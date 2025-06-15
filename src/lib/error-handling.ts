/**
 * Comprehensive error handling system
 * Provides consistent error handling, logging, and recovery mechanisms
 */

// Error types for better categorization
export enum ErrorType {
  NETWORK = 'NETWORK',
  VALIDATION = 'VALIDATION',
  AUTHENTICATION = 'AUTHENTICATION',
  AUTHORIZATION = 'AUTHORIZATION',
  NOT_FOUND = 'NOT_FOUND',
  SERVER = 'SERVER',
  CLIENT = 'CLIENT',
  UNKNOWN = 'UNKNOWN'
}

// Error severity levels
export enum ErrorSeverity {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

// Base error interface
export interface AppError {
  id: string;
  type: ErrorType;
  severity: ErrorSeverity;
  message: string;
  details?: string;
  code?: string | number;
  timestamp: Date;
  userId?: string;
  sessionId?: string;
  url?: string;
  userAgent?: string;
  stack?: string;
  context?: Record<string, any>;
  recoverable?: boolean;
  retryable?: boolean;
}

// Error handler configuration
interface ErrorHandlerConfig {
  enableLogging: boolean;
  enableReporting: boolean;
  enableUserNotification: boolean;
  logLevel: ErrorSeverity;
  reportingEndpoint?: string;
  maxRetries: number;
  retryDelay: number;
}

// Default configuration
const DEFAULT_CONFIG: ErrorHandlerConfig = {
  enableLogging: true,
  enableReporting: process.env.NODE_ENV === 'production',
  enableUserNotification: true,
  logLevel: ErrorSeverity.MEDIUM,
  maxRetries: 3,
  retryDelay: 1000
};

/**
 * Enhanced Error Handler Class
 */
export class ErrorHandler {
  private static instance: ErrorHandler;
  private config: ErrorHandlerConfig;
  private errorQueue: AppError[] = [];
  private retryQueue: Map<string, number> = new Map();

  private constructor(config: Partial<ErrorHandlerConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.setupGlobalErrorHandlers();
  }

  static getInstance(config?: Partial<ErrorHandlerConfig>): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler(config);
    }
    return ErrorHandler.instance;
  }

  /**
   * Setup global error handlers
   */
  private setupGlobalErrorHandlers(): void {
    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError(this.createError({
        type: ErrorType.UNKNOWN,
        severity: ErrorSeverity.HIGH,
        message: 'Unhandled promise rejection',
        details: event.reason?.toString(),
        stack: event.reason?.stack
      }));
    });

    // Handle global JavaScript errors
    window.addEventListener('error', (event) => {
      this.handleError(this.createError({
        type: ErrorType.CLIENT,
        severity: ErrorSeverity.HIGH,
        message: event.message,
        details: `${event.filename}:${event.lineno}:${event.colno}`,
        stack: event.error?.stack
      }));
    });

    // Handle resource loading errors
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        this.handleError(this.createError({
          type: ErrorType.NETWORK,
          severity: ErrorSeverity.MEDIUM,
          message: 'Resource loading failed',
          details: (event.target as any)?.src || (event.target as any)?.href,
          recoverable: true,
          retryable: true
        }));
      }
    }, true);
  }

  /**
   * Create a standardized error object
   */
  createError(params: Partial<AppError>): AppError {
    return {
      id: this.generateErrorId(),
      type: params.type || ErrorType.UNKNOWN,
      severity: params.severity || ErrorSeverity.MEDIUM,
      message: params.message || 'An unknown error occurred',
      details: params.details,
      code: params.code,
      timestamp: new Date(),
      userId: this.getCurrentUserId(),
      sessionId: this.getSessionId(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      stack: params.stack,
      context: params.context,
      recoverable: params.recoverable ?? false,
      retryable: params.retryable ?? false,
      ...params
    };
  }

  /**
   * Handle an error with full processing pipeline
   */
  async handleError(error: AppError): Promise<void> {
    try {
      // Add to error queue
      this.errorQueue.push(error);

      // Log the error
      if (this.config.enableLogging && this.shouldLog(error)) {
        this.logError(error);
      }

      // Report the error
      if (this.config.enableReporting && this.shouldReport(error)) {
        await this.reportError(error);
      }

      // Notify the user if appropriate
      if (this.config.enableUserNotification && this.shouldNotifyUser(error)) {
        this.notifyUser(error);
      }

      // Attempt recovery if possible
      if (error.recoverable) {
        await this.attemptRecovery(error);
      }

    } catch (handlingError) {
      console.error('Error in error handler:', handlingError);
    }
  }

  /**
   * Log error to console with appropriate level
   */
  private logError(error: AppError): void {
    const logMessage = `[${error.severity}] ${error.type}: ${error.message}`;
    const logData = {
      id: error.id,
      details: error.details,
      code: error.code,
      timestamp: error.timestamp,
      url: error.url,
      context: error.context,
      stack: error.stack
    };

    switch (error.severity) {
      case ErrorSeverity.CRITICAL:
      case ErrorSeverity.HIGH:
        console.error(logMessage, logData);
        break;
      case ErrorSeverity.MEDIUM:
        console.warn(logMessage, logData);
        break;
      case ErrorSeverity.LOW:
        console.info(logMessage, logData);
        break;
    }
  }

  /**
   * Report error to external service
   */
  private async reportError(error: AppError): Promise<void> {
    if (!this.config.reportingEndpoint) return;

    try {
      await fetch(this.config.reportingEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(error)
      });
    } catch (reportingError) {
      console.error('Failed to report error:', reportingError);
    }
  }

  /**
   * Notify user about the error
   */
  private notifyUser(error: AppError): void {
    // This would integrate with your notification system
    // For now, we'll use a simple approach
    const userMessage = this.getUserFriendlyMessage(error);
    
    // You could integrate with toast notifications, modal dialogs, etc.
    if (error.severity === ErrorSeverity.CRITICAL || error.severity === ErrorSeverity.HIGH) {
      // Show prominent notification
      console.warn('User notification:', userMessage);
    }
  }

  /**
   * Attempt to recover from the error
   */
  private async attemptRecovery(error: AppError): Promise<void> {
    if (!error.retryable) return;

    const retryCount = this.retryQueue.get(error.id) || 0;
    if (retryCount >= this.config.maxRetries) {
      this.retryQueue.delete(error.id);
      return;
    }

    this.retryQueue.set(error.id, retryCount + 1);

    // Wait before retrying
    await new Promise(resolve => setTimeout(resolve, this.config.retryDelay * (retryCount + 1)));

    // Implement specific recovery strategies based on error type
    switch (error.type) {
      case ErrorType.NETWORK:
        // Retry network request
        break;
      case ErrorType.AUTHENTICATION:
        // Attempt to refresh token
        break;
      default:
        // Generic recovery
        break;
    }
  }

  /**
   * Utility methods
   */
  private generateErrorId(): string {
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private getCurrentUserId(): string | undefined {
    // Implement based on your auth system
    return undefined;
  }

  private getSessionId(): string | undefined {
    // Implement based on your session management
    return sessionStorage.getItem('sessionId') || undefined;
  }

  private shouldLog(error: AppError): boolean {
    const severityLevels = [ErrorSeverity.LOW, ErrorSeverity.MEDIUM, ErrorSeverity.HIGH, ErrorSeverity.CRITICAL];
    const configLevel = severityLevels.indexOf(this.config.logLevel);
    const errorLevel = severityLevels.indexOf(error.severity);
    return errorLevel >= configLevel;
  }

  private shouldReport(error: AppError): boolean {
    return error.severity === ErrorSeverity.HIGH || error.severity === ErrorSeverity.CRITICAL;
  }

  private shouldNotifyUser(error: AppError): boolean {
    return error.severity === ErrorSeverity.MEDIUM || error.severity === ErrorSeverity.HIGH || error.severity === ErrorSeverity.CRITICAL;
  }

  private getUserFriendlyMessage(error: AppError): string {
    switch (error.type) {
      case ErrorType.NETWORK:
        return 'Connection issue. Please check your internet connection and try again.';
      case ErrorType.AUTHENTICATION:
        return 'Please log in again to continue.';
      case ErrorType.AUTHORIZATION:
        return 'You don\'t have permission to perform this action.';
      case ErrorType.NOT_FOUND:
        return 'The requested resource was not found.';
      case ErrorType.VALIDATION:
        return 'Please check your input and try again.';
      case ErrorType.SERVER:
        return 'Server error. Please try again later.';
      default:
        return 'An unexpected error occurred. Please try again.';
    }
  }

  /**
   * Get error statistics
   */
  getErrorStats(): {
    total: number;
    byType: Record<ErrorType, number>;
    bySeverity: Record<ErrorSeverity, number>;
    recent: AppError[];
  } {
    const byType = {} as Record<ErrorType, number>;
    const bySeverity = {} as Record<ErrorSeverity, number>;

    this.errorQueue.forEach(error => {
      byType[error.type] = (byType[error.type] || 0) + 1;
      bySeverity[error.severity] = (bySeverity[error.severity] || 0) + 1;
    });

    return {
      total: this.errorQueue.length,
      byType,
      bySeverity,
      recent: this.errorQueue.slice(-10)
    };
  }

  /**
   * Clear error queue
   */
  clearErrors(): void {
    this.errorQueue = [];
    this.retryQueue.clear();
  }
}

// Convenience functions for common error scenarios
export const errorHandler = ErrorHandler.getInstance();

export function handleNetworkError(message: string, details?: string): void {
  errorHandler.handleError(errorHandler.createError({
    type: ErrorType.NETWORK,
    severity: ErrorSeverity.MEDIUM,
    message,
    details,
    recoverable: true,
    retryable: true
  }));
}

export function handleValidationError(message: string, context?: Record<string, any>): void {
  errorHandler.handleError(errorHandler.createError({
    type: ErrorType.VALIDATION,
    severity: ErrorSeverity.LOW,
    message,
    context,
    recoverable: true
  }));
}

export function handleCriticalError(message: string, details?: string, stack?: string): void {
  errorHandler.handleError(errorHandler.createError({
    type: ErrorType.UNKNOWN,
    severity: ErrorSeverity.CRITICAL,
    message,
    details,
    stack
  }));
}

export default ErrorHandler;

import React, {  useState, useEffect , useCallback } from 'react';
import { Wifi, WifiOff, RefreshCw, AlertTriangle } from 'lucide-react';

import ErrorBoundary from '@/components/ErrorBoundary';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NetworkStatusProps {
  onRetry?: () => void;
  className?: string;

}

  /**
 * Network Status Component with offline support and retry mechanisms
 */
export const NetworkStatus: React.FC<NetworkStatusProps> = ({ onRetry, className }) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOfflineMessage, setShowOfflineMessage] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [isRetrying, setIsRetrying] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowOfflineMessage(false);
      setRetryCount(0);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowOfflineMessage(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Show offline message if already offline
    if (!navigator.onLine) {
      setShowOfflineMessage(true);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleRetry = async () => {
    setIsRetrying(true);
    setRetryCount(prev => prev + 1);

    try {
      // Test network connectivity
      const response = await fetch('/favicon.ico', { 
        method: 'HEAD',
        cache: 'no-cache'
      });
      
      if (response.ok) {
        setIsOnline(true);
        setShowOfflineMessage(false);
        setRetryCount(0);
        onRetry?.();
      } else {
        throw new Error('Network test failed');
    } catch (error) {
      // Still offline or network issues
      setIsOnline(false);
    } finally {
      setIsRetrying(false);
  };

  if (!showOfflineMessage && isOnline) {
    return null;
  return (
    <ErrorBoundary>
      <div className={cn('fixed top-4 left-4 right-4 z-50', className)}>
      <Alert className={cn(
        'border-2 shadow-lg',
        isOnline ? 'border-green-500 bg-green-50' : 'border-orange-500 bg-orange-50'
      )}>
        <div className="flex items-center gap-2">
          {isOnline ? (
            <Wifi className="h-4 w-4 text-green-600" />
          ) : (
            <WifiOff className="h-4 w-4 text-orange-600" />
          )}
          <AlertTriangle className="h-4 w-4" />
        </div>
        
        <AlertDescription className="mt-2">
          {isOnline ? (
            <div className="flex items-center justify-between">
              <span className="text-green-800">
                Connection restored! You're back online.
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowOfflineMessage(false)
                className="ml-4"
              >
                Dismiss
              </Button>
            </div>
          ) : (
            <div>
              <p className="text-orange-800 mb-3">
                You're currently offline. Some features may not be available.
              </p>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                            onClick={handleRetry
                            disabled={isRetrying}
                  className="flex items-center gap-2"
                >
                  <RefreshCw className={cn(
                    'h-3 w-3',
                    isRetrying && 'animate-spin'
                  )} />
                  {isRetrying ? 'Checking...' : 'Retry Connection'}
                </Button>
                
                {retryCount > 0 && (
                  <span className="text-sm text-orange-700">
                    Attempt {retryCount}
                  </span>
                )}
              </div>
              
              <div className="mt-2 text-sm text-orange-700">
                <p>While offline, you can still:</p>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>Browse previously loaded pages</li>
                  <li>View cached medical information</li>
                  <li>Access contact details</li>
                </ul>
              </div>
            </div>
          )}
        </AlertDescription>
      </Alert>
    </div>
    </ErrorBoundary>
  );
};

/**
 * Hook for network status monitoring
 */
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [connectionType, setConnectionType] = useState<string>('unknown');

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Get connection information if available
    if ('connection' in navigator) {
      const connection = (navigator as Navigator & { connection?: { effectiveType?: string; addEventListener: (event: string, handler: () => void) => void; removeEventListener: (event: string, handler: () => void) => void } }).connection;
      if (connection) {
        setConnectionType(connection.effectiveType || 'unknown');

        const handleConnectionChange = () => {
          setConnectionType(connection.effectiveType || 'unknown');
        };

        connection.addEventListener('change', handleConnectionChange);

        return () => {
          window.removeEventListener('online', handleOnline);
          window.removeEventListener('offline', handleOffline);
          connection.removeEventListener('change', handleConnectionChange);
        };
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return { isOnline, connectionType };
};

/**
 * Retry mechanism for failed requests
 */
  const [retryCount, setRetryCount] = useState(0);
  const [isRetrying, setIsRetrying] = useState(false);

  const retry = async <T,>(
    operation: () => Promise<T>,
    onSuccess?: (result: T) => void,
    onError?: (error: Error) => void
  ): Promise<T | null> => {
    setIsRetrying(true);
    
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const result = await operation();
        setRetryCount(0);
        setIsRetrying(false);
        onSuccess?.(result);
        return result;
      } catch (error) {
        setRetryCount(attempt + 1);
        
        if (attempt === maxRetries) {
          setIsRetrying(false);
          onError?.(error as Error);
          throw error;
        // Exponential backoff
        const delay = baseDelay * Math.pow(2, attempt);
        await new Promise(resolve => setTimeout(resolve, delay));
    setIsRetrying(false);
    return null;
  };

  const reset = () => {
    setRetryCount(0);
    setIsRetrying(false);
  };

  return { retry, retryCount, isRetrying, reset };
};

export default NetworkStatus;

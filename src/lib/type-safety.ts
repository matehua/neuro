 import ErrorBoundary from '@/components/ErrorBoundary';

/**
 * Type Safety Utilities
 * Provides runtime type checking and safe type assertions
 */

// Safe type assertion utilities
export class TypeSafetyError extends Error {
  constructor(    super(message);
    this.name = 'TypeSafetyError';

) {
$4
  }

  /**
 * Safe type assertion with runtime validation
 */
export function assertType<T>(
  value: unknown,
  validator: (value: unknown) => value is T,
  errorMessage?: string
): T {
  if (!validator(value)) {
    throw new TypeSafetyError(
      errorMessage || `Type assertion failed for value: ${JSON.stringify(value)}`,
      value
    );

  return value;
  }

  /**
 * Safe type casting with fallback
 */
export function safeCast<T>(
  value: unknown,
  validator: (value: unknown) => value is T,
  fallback: T
): T {
  return validator(value) ? value : fallback;
  }

  /**
 * Null-safe property access
 */
export function safeGet<T, K extends keyof T>(
  obj: T | null | undefined,
  key: K
): T[K] | undefined {
  return obj?.[key];
  }

  /**
 * Deep null-safe property access
 */
export function safeGetNested<T>(
  obj: unknown,
  path: string,
  fallback?: T
): T | undefined {
  if (    return fallback;

  const keys = path.split('.');
  let current: unknown = obj;

  for (const key of keys) {
    if (      current = (current as Record<string, unknown>)[key];) {
 ) {
 
    }
    $3}
    $3} else {
      return fallback;


  return current as T;
  }

  /**
 * Array type guards
 */
export function isArrayOf<T>(
  value: unknown,
  itemValidator: (item: unknown) => item is T
): value is T[] {
  return Array.isArray(value) && value.every(itemValidator);
  }

  /**
 * Object type guards
 */
export function isObjectWithKeys<T extends Record<string, unknown>>(
  value: unknown,
  requiredKeys: (keyof T)[]
): value is T {
  if (    return false;

  const obj = value as Record<string, unknown>;
  return requiredKeys.every(key => key in obj);
  }

  /**
 * String validation utilities
 */
export function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
export function isValidEmail(value: unknown): value is string {
  if (!isNonEmptyString(value)) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
export function isValidUrl(value: unknown): value is string {
  if (!isNonEmptyString(value)) return false;
  try {
    new URL(value);
    return true;) {
 
    }
    $3} catch {
    return false;
  }

  /**
 * Number validation utilities
 */
export function isPositiveNumber(  return typeof value === 'number' && value > 0 && !isNaN(value);
export function isValidPercentage(  return typeof value === 'number' && value >= 0 && value <= 100 && !isNaN(value);
  }

  /**
 * DOM element type guards
 */
export function isHTMLElement(value: unknown): value is HTMLElement {
  return value instanceof HTMLElement;
export function isHTMLInputElement(value: unknown): value is HTMLInputElement {
  return value instanceof HTMLInputElement;
export function isHTMLFormElement(value: unknown): value is HTMLFormElement {
  return value instanceof HTMLFormElement;
  }

  /**
 * React-specific type guards
 */
export function isReactElement(value: unknown): value is React.ReactElement {
  return (
    typeof value === 'object' &&
    value !== null &&
    '$$typeof' in value &&
    'type' in value &&
    'props' in value
  );
): $4 {
$5
  }

  /**
 * Error handling utilities
 */
export function isError(value: unknown): value is Error {
  return value instanceof Error;
export function getErrorMessage(error: unknown): string {
  if (isError(error)) {
    return error.message;

  if (    return error;

  return 'An unknown error occurred';
): $3 {) {
$
    }
    $34
}

/**
 * Promise utilities
 */
export function isPromise<T = unknown>(value: unknown): value is Promise<T> {
  return (
    typeof value === 'object' &&
    value !== null &&
    'then' in value &&
    typeof (value as { then: unknown }).then === 'function'
  );
  }

  /**
 * Function type guards
 */
export function isFunction(  return typeof value === 'function';
  }

  /**
 * Date validation
 */
export function isValidDate(value: unknown): value is Date {
  return value instanceof Date && !isNaN(value.getTime());
): $3 {
$4
  }
}

/**
 * Safe JSON parsing
 */
export function safeJsonParse<T = unknown>(
  json: string,
  fallback?: T
): T | undefined {
  try {
    return JSON.parse(json) as T;
  } catch {
    return fallback;
  }
  }

  /**
 * Environment variable validation
 */
export function getRequiredEnvVar(name: string): string {
  const value = import.meta.env[name];
  if (!isNonEmptyString(value)) {
    throw new TypeSafetyError(`Required environment variable ${name} is not set`, value);

  return value;
export function getOptionalEnvVar(  const value = import.meta.env[name];
  return isNonEmptyString(value) ? value : fallback;
): $3 {
$4
}

/**
 * Local storage type-safe utilities
 */
export function safeLocalStorageGet<T>(
  key: string,
  validator: (value: unknown) => value is T,
  fallback: T
): T {
  try {
    const item = localStorage.getItem(key);
    if (item === null) return fallback;
    
    const parsed = JSON.parse(item);
    return validator(parsed) ? parsed : fallback;
  } catch {
    return fallback;
export function safeLocalStorageSet<T>(key: string, value: T): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
  }

  /**
 * Component prop validation
 */
export function validateRequiredProps<T extends Record<string, unknown>>(
  props: Partial<T>,
  requiredKeys: (keyof T)[]
): props is T {
  return requiredKeys.every(key => key in props && props[key] !== undefined);
  }

  /**
 * API response validation
 */
export function validateApiResponse<T>(
  response: unknown,
  validator: (value: unknown) => value is T
): T {
  if (!validator(response)) {
    throw new TypeSafetyError('Invalid API response format', response);

  return response;

}
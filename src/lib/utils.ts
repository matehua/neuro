import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names using clsx and tailwind-merge
 * This utility helps prevent class conflicts when using Tailwind CSS
 *
 * @param inputs - Class names to combine
 * @returns Combined and optimized class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a date to a localized string
 *
 * @param date - Date to format
 * @param locale - Locale to use for formatting (defaults to 'en-AU' for Australian English)
 * @param options - Intl.DateTimeFormatOptions
 * @returns Formatted date string
 */
export function formatDate(
  date: Date | string | number,
  locale: string = 'en-AU',
  options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }
): string {
  const dateObj = date instanceof Date ? date : new Date(date)
  return new Intl.DateTimeFormat(locale, options).format(dateObj)
}

/**
 * Truncates a string to a specified length and adds an ellipsis
 *
 * @param str - String to truncate
 * @param length - Maximum length
 * @returns Truncated string
 */
export function truncateString(str: string, length: number): string {
  if (str.length <= length) return str
  return str.slice(0, length) + '...'
}

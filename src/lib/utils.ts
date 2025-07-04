import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combine classes with tailwind-merge for optimal Tailwind CSS class merging
 * @param inputs - Array of class names or conditional class objects
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format a date to a readable string
 * @param date - Date to format
 * @param options - Intl.DateTimeFormat options
 * @returns Formatted date string
 */
export function formatDate(
    date: Date | string | number,
    options: Intl.DateTimeFormatOptions = {}
): string {
  return new Intl.DateTimeFormat("fr-FR", {
    month: "long",
    day: "numeric",
    year: "numeric",
    ...options,
  }).format(new Date(date))
}

/**
 * Generate a slug from a string
 * @param str - String to convert to slug
 * @returns Slugified string
 */
export function slugify(str: string): string {
  return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Remove accents
      .replace(/[^a-z0-9 -]/g, "") // Remove invalid chars
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/-+/g, "-") // Replace multiple - with single -
      .trim()
}

/**
 * Capitalize the first letter of a string
 * @param str - String to capitalize
 * @returns Capitalized string
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Truncate text to a specific length
 * @param text - Text to truncate
 * @param length - Maximum length
 * @param suffix - Suffix to add when truncated
 * @returns Truncated text
 */
export function truncate(
    text: string,
    length: number,
    suffix: string = "..."
): string {
  if (text.length <= length) return text
  return text.substring(0, length).trim() + suffix
}

/**
 * Check if a URL is external
 * @param url - URL to check
 * @returns True if external, false if internal
 */
export function isExternalUrl(url: string): boolean {
  try {
    const urlObj = new URL(url)
    return urlObj.hostname !== window.location.hostname
  } catch {
    return false
  }
}

/**
 * Debounce function calls
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Get initials from a name
 * @param name - Full name
 * @returns Initials
 */
export function getInitials(name: string): string {
  return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
}
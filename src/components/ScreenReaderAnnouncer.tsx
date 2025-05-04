import React, { useEffect, useRef } from 'react';

interface ScreenReaderAnnouncerProps {
  /** The message to announce to screen readers */
  message?: string;
  /** The politeness level for the announcement */
  politeness?: 'polite' | 'assertive';
  /** Whether to clear the message after it's announced */
  clearAfter?: number;
}

/**
 * A component that announces messages to screen readers using ARIA live regions
 * This is useful for announcing dynamic content changes, form submission results, etc.
 */
const ScreenReaderAnnouncer: React.FC<ScreenReaderAnnouncerProps> = ({
  message,
  politeness = 'polite',
  clearAfter = 5000,
}) => {
  const announcerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!message || !announcerRef.current) return;
    
    // Clear the announcer first to ensure the message is announced
    // even if it's the same as the previous message
    announcerRef.current.textContent = '';
    
    // Use setTimeout to ensure the DOM update happens
    const timerId = setTimeout(() => {
      if (announcerRef.current) {
        announcerRef.current.textContent = message;
      }
    }, 50);
    
    // Clear the message after the specified time
    const clearTimerId = setTimeout(() => {
      if (announcerRef.current) {
        announcerRef.current.textContent = '';
      }
    }, clearAfter);
    
    return () => {
      clearTimeout(timerId);
      clearTimeout(clearTimerId);
    };
  }, [message, clearAfter]);
  
  return (
    <div
      ref={announcerRef}
      className="sr-only"
      aria-live={politeness}
      aria-atomic="true"
      aria-relevant="additions text"
    />
  );
};

export default ScreenReaderAnnouncer;

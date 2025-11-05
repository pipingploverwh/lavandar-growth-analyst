const sanitizeString = (input: string, maxLength = 200): string => {
  return input
    .substring(0, maxLength)
    .replace(/[<>\"']/g, '')
    .trim();
};

const ALLOWED_EVENT_NAMES = [
  'cta_click',
  'checkout_page_view',
  'checkout_opened',
  'checkout_error',
  'presentation_view',
  'growth_model_view',
  'slide_view',
  'breaden_presentation_view'
];

export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (!ALLOWED_EVENT_NAMES.includes(eventName)) {
    console.warn('Invalid event name:', eventName);
    return;
  }

  const timestamp = new Date().toISOString();
  const event = {
    name: sanitizeString(eventName, 50),
    timestamp,
    data: eventData,
    page: sanitizeString(window.location.pathname),
    referrer: sanitizeString(document.referrer || 'direct'),
  };

  try {
    const existingEvents = JSON.parse(localStorage.getItem('analytics_events') || '[]');
    existingEvents.push(event);
    if (existingEvents.length > 100) {
      existingEvents.shift();
    }
    localStorage.setItem('analytics_events', JSON.stringify(existingEvents));
    
    if (import.meta.env.DEV) {
      console.log('📊 Analytics Event:', event);
    }
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error('Failed to track event:', error);
    }
  }
};

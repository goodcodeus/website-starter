'use client';

import posthog from 'posthog-js';

if (typeof window !== 'undefined') {
  posthog.init('YOUR KEY', {
    api_host: '/ingest',
    ui_host: 'https://us.posthog.com',
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') {
        posthog.opt_out_capturing();
      }
    }
  });
}

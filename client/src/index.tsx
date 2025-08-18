import React from 'react';
import 'react-responsive-modal/styles.css';
import '@client/styles/tailwind.css';
import { createRoot } from 'react-dom/client';
import App from '@client/App';
import moment from 'moment';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element #root not found');
}
moment.locale('ko');
moment.updateLocale('ko', {
  relativeTime: {
    future: '나중에',
    past: '전',
    s: '몇 초',
  },
});

createRoot(rootElement).render(<App />);



import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

async function prepare() {
  const { worker } = await import('./mocks/browser');
  await worker.start({
  serviceWorker: {
    url: '/projects/adopt-a-pet/mockServiceWorker.js'
  }
});
}

prepare().then(() => {
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})

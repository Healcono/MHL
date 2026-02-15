import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const renderApp = () => {
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    console.error("Critical Error: Root element '#root' not found in DOM.");
    const errorOverlay = document.createElement('div');
    errorOverlay.style.cssText = "position:fixed;inset:0;background:white;z-index:9999;display:flex;align-items:center;justify-content:center;padding:2rem;text-align:center;direction:rtl;font-family:sans-serif;";
    errorOverlay.innerHTML = "<div><h1 style='color:#ef4444;font-size:1.5rem;font-weight:bold;'>خطا در بارگذاری برنامه</h1><p style='color:#6b7280;margin-top:1rem;'>متأسفانه مشکلی در شناسایی ریشه برنامه رخ داده است. لطفاً صفحه را رفرش کنید.</p></div>";
    document.body.appendChild(errorOverlay);
    return;
  }

  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Mounting Error:", error);
    rootElement.innerHTML = "<div style='padding:2rem;text-align:center;color:#ef4444;direction:rtl;'>خطای سیستمی در اجرای React رخ داد.</div>";
  }
};

// If DOM is already ready (likely for type=module), run immediately
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}
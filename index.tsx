import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const renderApp = () => {
  console.log("Initializing Media Health Literacy App...");
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
    // Rendering without StrictMode to ensure maximum compatibility in specific ESM environments
    // where dual-rendering cycles can cause version validation issues.
    root.render(<App />);
    console.log("App mounted successfully.");
  } catch (error) {
    console.error("React Mounting Error:", error);
    rootElement.innerHTML = `
      <div style='padding:2rem;text-align:center;color:#ef4444;direction:rtl;font-family:sans-serif;'>
        <h2 style='font-weight:bold;'>خطای سیستمی</h2>
        <p style='color:#666;margin-top:0.5rem;'>مشکلی در اجرای رابط کاربری رخ داده است. لطفاً حافظه کش مرورگر را پاک کرده و مجدداً امتحان کنید.</p>
        <code style='display:block;margin-top:1rem;font-size:0.75rem;background:#fef2f2;padding:0.5rem;border-radius:4px;'>${error instanceof Error ? error.message : String(error)}</code>
      </div>
    `;
  }
};

// Module scripts are already deferred, but checking readyState adds an extra layer of safety.
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}

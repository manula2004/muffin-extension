// content.js
// Injects a floating popup with rounded corners into the current page
(function() {
  if (document.getElementById('muffin-extension-popup')) return;

  const popup = document.createElement('div');
  popup.id = 'muffin-extension-popup';
  popup.style.position = 'fixed';
  popup.style.bottom = '32px';
  popup.style.right = '32px';
  popup.style.width = '320px';
  popup.style.background = '#fff';
  popup.style.borderRadius = '18px';
  popup.style.boxShadow = '0 4px 24px rgba(0,0,0,0.15)';
  popup.style.zIndex = '99999';
  popup.style.padding = '24px';
  popup.style.fontFamily = 'sans-serif';
  popup.style.display = 'flex';
  popup.style.flexDirection = 'column';
  popup.style.alignItems = 'center';

  // Example content
  popup.innerHTML = `
    <img src='https://raw.githubusercontent.com/manula2004/muffin-extension/main/public/muffin_logo.png' alt='Muffin Logo' style='width:64px;margin-bottom:12px;'>
    <h2 style='margin:0 0 8px 0;'>Muffin Deals</h2>
    <p style='margin:0 0 16px 0;'>Your popup content goes here!</p>
    <button id='muffin-close-btn' style='margin-top:8px;padding:6px 16px;border:none;background:#646cff;color:#fff;border-radius:8px;cursor:pointer;'>Close</button>
  `;

  document.body.appendChild(popup);

  document.getElementById('muffin-close-btn').onclick = () => {
    popup.remove();
  };
})();

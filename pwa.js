/* ================================================================
   BCA Notes Hub — PWA Install & Service Worker
   © 2026 Md Abdul Rahman Raza | arrahmanstudyhub.tech
   ADD <script src="pwa.js" defer></script> to index.html
================================================================ */

(function () {
  'use strict';

  /* ── 1. Service Worker Registration ──────────────────────── */
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js', { scope: '/' })
        .then(function (reg) {
          console.log('[PWA] SW registered:', reg.scope);

          /* Detect new SW → show update banner */
          reg.addEventListener('updatefound', function () {
            var sw = reg.installing;
            if (!sw) return;
            sw.addEventListener('statechange', function () {
              if (sw.state === 'installed' && navigator.serviceWorker.controller) {
                showBanner(
                  '🔄 Update available!',
                  'Refresh for the latest notes.',
                  'Refresh Now',
                  function () { location.reload(); }
                );
              }
            });
          });
        })
        .catch(function (err) {
          console.warn('[PWA] SW failed:', err);
        });
    });
  }

  /* ── 2. Install prompt capture ───────────────────────────── */
  var _prompt = null;

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    _prompt = e;

    /* Show the header install button */
    var headerBtn = document.getElementById('pwaInstallBtn');
    if (headerBtn) headerBtn.style.display = 'flex';

    /* Show the bottom install banner (big, can't miss it) */
    showBanner(
      '📱 Install BCA Hub',
      'Add to Home Screen for instant access & offline notes.',
      'Install App',
      triggerInstall
    );
  });

  window.addEventListener('appinstalled', function () {
    var headerBtn = document.getElementById('pwaInstallBtn');
    if (headerBtn) headerBtn.style.display = 'none';
    dismissBanner();
    showToast('🎉 BCA Hub installed! Find it on your home screen.');
  });

  /* ── 3. Trigger install from any button ─────────────────── */
  function triggerInstall() {
    if (!_prompt) {
      /* iOS Safari — no beforeinstallprompt — show manual instructions */
      showIOSGuide();
      return;
    }
    _prompt.prompt();
    _prompt.userChoice.then(function (r) {
      if (r.outcome === 'accepted') {
        showToast('Installing BCA Notes Hub…');
        /* GA4 tracking */
        if (typeof gae === 'function') gae('pwa_install', { outcome: 'accepted' });
      }
      _prompt = null;
      var headerBtn = document.getElementById('pwaInstallBtn');
      if (headerBtn) headerBtn.style.display = 'none';
      dismissBanner();
    });
  }

  /* Wire header install button */
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('pwaInstallBtn');
    if (btn) btn.addEventListener('click', triggerInstall);

    /* Handle deep-link URL params from manifest shortcuts */
    var p = new URLSearchParams(location.search);
    if (p.has('sem')) {
      var n = parseInt(p.get('sem'), 10);
      if (n >= 1 && n <= 6 && typeof switchSem === 'function') {
        setTimeout(function () { switchSem(n); }, 350);
      }
    }
    if (p.has('search') && typeof openSearch === 'function') {
      setTimeout(function () { openSearch(); }, 400);
    }
    if (p.has('syllabus') && typeof openSyllabusModal === 'function') {
      setTimeout(function () { openSyllabusModal(); }, 400);
    }
  });

  /* ── 4. Bottom Install Banner ───────────────────────────── */
  var _banner = null;

  function showBanner(title, body, btnLabel, onClick) {
    dismissBanner();

    var b = document.createElement('div');
    b.id = '__pwaBanner';
    b.innerHTML =
      '<div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap;">' +
        '<img src="/icons/icon-192.png" alt="BCA Hub" ' +
          'style="width:48px;height:48px;border-radius:12px;flex-shrink:0" ' +
          'onerror="this.style.display=\'none\'">' +
        '<div style="flex:1;min-width:0;">' +
          '<div style="font-weight:800;font-size:.9rem;color:#fff;margin-bottom:2px">' + title + '</div>' +
          '<div style="font-size:.76rem;color:#94a3b8;line-height:1.4">' + body + '</div>' +
        '</div>' +
        '<div style="display:flex;gap:8px;flex-shrink:0">' +
          '<button id="__pwaInstallGo" style="' +
            'background:linear-gradient(135deg,#6366f1,#7c3aed);color:#fff;border:none;' +
            'padding:9px 18px;border-radius:10px;font-size:.82rem;font-weight:700;' +
            'cursor:pointer;font-family:inherit;white-space:nowrap">' +
            btnLabel +
          '</button>' +
          '<button id="__pwaDismiss" style="' +
            'background:rgba(255,255,255,.08);color:#94a3b8;border:1px solid rgba(255,255,255,.1);' +
            'width:32px;height:32px;border-radius:8px;font-size:1rem;cursor:pointer;' +
            'display:flex;align-items:center;justify-content:center">✕</button>' +
        '</div>' +
      '</div>';

    Object.assign(b.style, {
      position:     'fixed',
      bottom:       '0',
      left:         '0',
      right:        '0',
      zIndex:       '8999',
      background:   'rgba(8,8,18,.97)',
      borderTop:    '1px solid rgba(99,102,241,.35)',
      backdropFilter: 'blur(20px)',
      padding:      '14px 20px',
      transform:    'translateY(100%)',
      transition:   'transform .35s cubic-bezier(.4,0,.2,1)',
      boxShadow:    '0 -8px 32px rgba(0,0,0,.6)',
    });

    document.body.appendChild(b);
    _banner = b;

    /* Animate in */
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { b.style.transform = 'translateY(0)'; });
    });

    b.querySelector('#__pwaInstallGo').addEventListener('click', onClick);
    b.querySelector('#__pwaDismiss').addEventListener('click', dismissBanner);

    /* Auto-dismiss after 20s */
    setTimeout(dismissBanner, 20000);
  }

  function dismissBanner() {
    if (!_banner) return;
    _banner.style.transform = 'translateY(100%)';
    var b = _banner;
    setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); }, 400);
    _banner = null;
  }

  /* ── 5. iOS Install Guide ───────────────────────────────── */
  function showIOSGuide() {
    var d = document.createElement('div');
    d.id = '__iosGuide';
    d.innerHTML =
      '<div style="' +
        'position:fixed;inset:0;z-index:9900;' +
        'background:rgba(0,0,0,.75);backdrop-filter:blur(8px);' +
        'display:flex;align-items:flex-end;justify-content:center;padding:0 12px 12px">' +
        '<div style="' +
          'background:#1e1e2e;border:1px solid rgba(99,102,241,.35);' +
          'border-radius:20px;padding:28px 24px;max-width:420px;width:100%;' +
          'box-shadow:0 -8px 40px rgba(0,0,0,.7)">' +
          '<div style="text-align:center;margin-bottom:20px">' +
            '<div style="font-size:2.5rem;margin-bottom:10px">📲</div>' +
            '<div style="font-weight:800;font-size:1.1rem;color:#fff;margin-bottom:6px">Add to Home Screen</div>' +
            '<div style="font-size:.82rem;color:#94a3b8">Follow these steps in Safari to install BCA Notes Hub:</div>' +
          '</div>' +
          '<ol style="padding-left:20px;color:#94a3b8;font-size:.83rem;line-height:1.8">' +
            '<li>Tap the <strong style="color:#818cf8">Share</strong> button (📤) in Safari\'s toolbar</li>' +
            '<li>Scroll down and tap <strong style="color:#818cf8">Add to Home Screen</strong></li>' +
            '<li>Tap <strong style="color:#818cf8">Add</strong> — done!</li>' +
          '</ol>' +
          '<button onclick="document.getElementById(\'__iosGuide\').remove()" style="' +
            'margin-top:20px;width:100%;background:linear-gradient(135deg,#6366f1,#7c3aed);' +
            'color:#fff;border:none;padding:12px;border-radius:12px;' +
            'font-size:.9rem;font-weight:700;cursor:pointer;font-family:inherit">Got it</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(d);
  }

  /* ── 6. Toast ───────────────────────────────────────────── */
  function showToast(msg) {
    var t = document.createElement('div');
    t.textContent = msg;
    Object.assign(t.style, {
      position:      'fixed',
      bottom:        '80px',
      left:          '50%',
      transform:     'translateX(-50%) translateY(14px)',
      background:    'rgba(10,10,22,.96)',
      color:         '#e2e8f0',
      padding:       '11px 22px',
      borderRadius:  '30px',
      fontSize:      '.82rem',
      fontWeight:    '600',
      fontFamily:    "'Plus Jakarta Sans',sans-serif",
      border:        '1px solid rgba(99,102,241,.35)',
      boxShadow:     '0 8px 28px rgba(0,0,0,.5)',
      backdropFilter:'blur(14px)',
      zIndex:        '9998',
      opacity:       '0',
      transition:    'opacity .3s, transform .3s',
      whiteSpace:    'nowrap',
      pointerEvents: 'none',
    });
    document.body.appendChild(t);
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        t.style.opacity = '1';
        t.style.transform = 'translateX(-50%) translateY(0)';
      });
    });
    setTimeout(function () {
      t.style.opacity = '0';
      t.style.transform = 'translateX(-50%) translateY(10px)';
      setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 350);
    }, 3500);
  }

})();

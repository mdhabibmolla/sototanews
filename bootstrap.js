/*
 * Loads the shared page partial first, then starts the existing Sotota News app.
 * All pages share the same UI and Firebase/Adsterra logic.
 */
(async function () {
  const shellUrl = 'partials/site-shell.html';
  try {
    const response = await fetch(shellUrl, { cache: 'no-cache' });
    if (!response.ok) throw new Error('Shared page shell could not be loaded: ' + response.status);
    const shell = await response.text();
    document.body.insertAdjacentHTML('afterbegin', shell);

    const appScript = document.createElement('script');
    appScript.src = 'public/js/app.js';
    appScript.onload = function () {
      const page = location.pathname.split('/').pop().toLowerCase();

      // Admin is a protected dashboard; user must authenticate through the existing Firebase Auth flow.
      if (page === 'admin.html') {
        setTimeout(function () {
          if (typeof openAdminLoginModal === 'function') openAdminLoginModal();
        }, 0);
      }

      // On article.html, the existing Firebase listener reads ?news=<post-id>
      // and opens the matching article after the news data arrives.
      if (page === 'article.html' && !new URLSearchParams(location.search).has('news')) {
        const target = document.getElementById('article-view-modal');
        if (target) target.style.display = 'none';
      }

      if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
        navigator.serviceWorker.register('public/service-worker.js').catch(function (err) {
          console.warn('PWA service worker registration failed:', err);
        });
      }
    };
    appScript.onerror = function () {
      document.body.insertAdjacentHTML('beforeend',
        '<p style="padding:16px;color:#b00020">অ্যাপের JavaScript লোড হয়নি। সার্ভার থেকে ওয়েবসাইটটি চালু করুন।</p>');
    };
    document.body.appendChild(appScript);
  } catch (error) {
    console.error(error);
    document.body.innerHTML =
      '<main style="font-family:sans-serif;padding:24px"><h2>সততা নিউজ চালু করা যায়নি</h2>' +
      '<p>এই ওয়েবসাইটটি file:// দিয়ে নয়, localhost বা hosting server দিয়ে খুলুন।</p>' +
      '<p>README-BN.md ফাইলে চালানোর নিয়ম দেওয়া আছে।</p></main>';
  }
})();

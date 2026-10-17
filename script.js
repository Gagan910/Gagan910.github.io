
(function warmBackends() {
  try {
    if (sessionStorage.getItem("warmed")) return;
    sessionStorage.setItem("warmed", "1");
  } catch (error) {
    // Continue even if sessionStorage is unavailable.
  }

  const urls = [
    "https://enterprise-rag-assistant-ik30.onrender.com/health",
    "https://enterprise-rag-frontend-g1bm.onrender.com"
  ];

  urls.forEach(function (url) {
    fetch(url, { mode: "no-cors" }).catch(function () {});
  });
})();

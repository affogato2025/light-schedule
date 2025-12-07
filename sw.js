// 简单的Service Worker
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] 安装');
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] 请求', e.request.url);
});
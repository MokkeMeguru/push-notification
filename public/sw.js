self.addEventListener('install', () => {
    console.log('[sw]', 'Your ServiceWorker is installed');
    self.registration.showNotification("Hello", {
        body: "ServiceWorker's",
        icon: "https://kanatapple.github.io/service-worker/push/images/image.jpg",
    });
});

self.addEventListener('push', ev => {
    if (ev.data) {
        console.log('[sw]', 'pushed!!', ev.data.json());
        const { title, msg, icon } = ev.data.json();
        self.registration.showNotification(title, {
            body: msg,
            icon: icon,
        });
    }
});

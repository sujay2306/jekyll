                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/2023/05/09/preview-on-wechaty-2.0/","revision":"c6f3ac59ba6ad75d2b8fb5c52533a835"},{"url":"/2023/04/23/introducing-wechaty-puppet-wxkf/","revision":"a74fbc06464e8cc0925797be71692aed"},{"url":"/2023/04/13/use-chatgpt-develop-a-conference-assistant/","revision":"d68b03ae17d325dfd7909db0fff6f24c"},{"url":"/2023/03/29/a-free-wechat-openai-qa-bot-by-xp/","revision":"6adaa76ef608cccb631c9cfab1bba728"},{"url":"/2023/03/03/postgraduate-supervision-group-assistant/","revision":"f8136d6d2691727bf51b0e99fa4e6bc4"}];
            // set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'Wechaty',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
);

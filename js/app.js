require.config({
    paths: {
        jquery: "./jquery.min",
        cookie: "./cookie",
        lazyload: "./jquery.lazyload.min",
        index: "./index"

    },
    shim: { lazyload: ['jquery'] }
});

require(['jquery', 'cookie', 'lazyload', 'index'], function($, cookie, lazyload, index) {
    index.index()
})
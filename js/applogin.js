require.config({
    paths: {
        jquery: "./jquery.min",
        md5: "./jquery.md5",
        cookie: "./cookie",
        login: "./login"
    },
    shim: {
        md5: ['jquery']
    }
});
require(['jquery', 'md5', 'cookie', 'login'], function($, md5, cookie, login) {
    login.login()
})
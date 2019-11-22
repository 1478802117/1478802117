require.config({
    paths: {
        jquery: "./jquery.min",
        md5: "./jquery.md5",
        // cookie: "./cookie",
        login: "./login"
    },
    shim: {
        md5: ['jquery']
    }
});
require(['jquery', 'md5', 'login'], function($, md5, login) {
    login.login()
})
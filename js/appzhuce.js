require.config({
    paths: {
        jquery: "./jquery.min",
        md5: "./jquery.md5",
        zhuce: "./zhuce"
    },
    shim: {
        md5: ['jquery']
    }
});
require(['jquery', 'md5', 'zhuce'], function($, md5, zhuce) {
    zhuce.yanzhen();
    zhuce.zhuce();
})
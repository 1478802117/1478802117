require.config({
    paths: {
        jquery: "./jquery.min",
        cookie: "./cookie",
        product: "./product"

    },
    shim: {}
});


require(['jquery', 'cookie', 'product'], function($, cookie, product) {

    product.render(function(id, price) { // 渲染页面
        $('.add').on('click', function() {
            product.addItem(id, price, $('.num').val());
        });
    });
});
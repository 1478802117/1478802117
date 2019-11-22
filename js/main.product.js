require.config({
    paths: {
        jquery: "./jquery.min",
        product: "./product",
        cookie: "./cookie"
    },
    shim: {}
});


require(['jquery', 'product'], function($, product) {

    product.render(function(id, price) { // 渲染页面
        $('.buy2').on('click', function() {
            alert('成功加入购物车!');
            product.addItem(id, price, $('#num').val());
        });
    });
});
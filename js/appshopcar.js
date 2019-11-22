require.config({
    paths: {
        jquery: "./jquery.min",
        cookie: "./cookie",
        shopcar: "./shopcar"

    },
    shim: {}
});
require(['jquery', 'shopcar'], function($, shopcar) {
        shopcar.shopcar(function() {
            shopcar.zongjia();
            shopcar.zhuangtai();
        })

        // console.log(1)
    })
    // require(['jquery', 'shopcar'], function($, shopcar) {
    //     shopcar.shopcar2()

//     // console.log(1)
// })
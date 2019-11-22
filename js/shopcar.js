define(['jquery', 'cookie'], function($, cookie) {
    return {
        shopcar: function(callback) {
            // console.log(1)
            let shop = cookie.get('shop');
            // console.log(shop)
            if (shop) {
                shop = JSON.parse(shop);
                let idList = shop.map(elm => elm.id).join();
                // console.log(idList)
                $.ajax({
                    url: "http://127.0.0.1:8080/h5-1910xm/lib/shop.php",
                    type: 'get',
                    data: {
                        'idList': idList
                    },
                    dataType: 'json',
                    success: function(data) {
                        // console.log(data);
                        let tempstr = '';
                        data.forEach(elm => {

                            let pic = JSON.parse(elm.pic);
                            let arr = shop.filter((val, i) => {
                                return val.id == elm.id;
                            });

                            tempstr += `
                            <div class="gg1">    
                <form>
                       
                    <input type="checkbox" checked>

                </form>
                <img src="${pic[0].src}">
                <div class="sga">
                    <a href="product.html?id=${elm.id}">
                            ${elm.title}
                    </a>
                </div>
                <div class="sg1">
                        ${elm.price}
                </div>
                <div class="num1">
                        数量：<input class="nn" type="number" value="${arr[0].num}" min="1" max="${elm.num}">
                                </div>
                               
                               
                <div class="num2">
                        ${(arr[0].num*elm.price).toFixed(2)}
                </div>
                <div class="num3">
                    <a href="#" >删除</a>
                </div>
             
                </div>
                            `;
                        });

                        $('.g1').append(tempstr);
                        let tempp = '';

                        callback && callback();
                    }
                });

            }




        },
        zhuangtai: function() {
            $('.ss4').on('click', function() {
                if (!cookie.get('isLogin')) {
                    alert('请登录');
                } else {
                    alert('支付成功');
                    cookie.remove('shop', "", -1);

                    cookie.remove('isLogin');
                    cookie.remove('username');
                    location.reload();

                };
            })


        },
        zongjia: function() {
            // console.log(111)
            let sum = 0;
            let sum2 = 0;

            let shop1 = cookie.get('shop');

            shop1 = JSON.parse(shop1);

            shop1.forEach(elm => {

                sum += parseInt(elm.num);
                sum2 += parseInt(elm.num) * parseInt(elm.price);
            });
            cookie.set(sum2, true, 1);

            $('.dd').text(sum);
            $('.ee').text(sum2);
        }
    };
});
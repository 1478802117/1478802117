let baseUrl = "http://localhost:8080/h5-1910xm/html/product";

define(['jquery', 'cookie'], function($, cookie) {
    return {
        render: function(callback) {

            let id = location.search.split('=')[1];
            $.ajax({
                url: `../lib/getitem.php`,
                type: 'get',
                data: {
                    id: id
                },
                dataType: 'json',
                success: function(data) {

                    let pic = JSON.parse(data.pic);
                    let tempstr = `
                      
                        
                 
                        <h4>详细说明</h4>
                        <div class="fdj">
                            <div class="exzoom" id="exzoom">

                                <div class="exzoom_img_box">
                                    <ul class="exzoom_img_ul">
                                        <li><img src="${pic[0].src}"></li>
                                    </ul>
                                </div>

                                <div class="exzoom_nav"></div>

                                <p class="exzoom_btn">
                                    <a href="javascript:void(0);" class="exzoom_prev_btn"> &lt; </a>
                                    <a href="javascript:void(0);" class="exzoom_next_btn"> &gt; </a>
                                </p>
                            </div>
                        </div>
                        <div class="gwc1">

                            <h5>${data.title}</h5>

                            <div class="jg1">
                                <div class="jg-2">
                                    价格
                                </div>
                                <div class="jg-3">
                                    <span style="font-size: 24px;" class="span-1">
                                    ${data.price}
        </span>元
                                </div>
                            </div>

                            <div class="jg-4">
                                <div class="xs-1">
                                    <span>累积销售量</span><em>${data.num}</em></div>
                                <div class="xs-2">
                                    <span>累积评价</span><em>0</em></div>
                            </div>



                            <div class="gm1">

                                <div class="gm2">
                                    购买数量
                                </div>


                                <input class="inp1" type="number" value="1" min="1" max="${data.num}" id="num">

                                <div class="gm4">
                                    <b>总计</b>
                                    <em></em>
                                </div>
                            </div>

                            <div class="btn1">
                                <a href="javascript:;" class="buy1">立即购买</a>
                                <a href="javascript:;" class="buy2">加入购物车</a>
                            </div>
                    `;
                    $('.item4').append(tempstr);
                    callback && callback(data.id, data.price);
                }
            })
        },
        addItem: function(id, price, num) {

            let shop = cookie.get('shop');
            console.log(shop);
            let product = {
                id: id,
                price: price,
                num: num
            };

            if (shop) {
                shop = JSON.parse(shop);
                if (shop.some(elm => elm.id == id)) {
                    shop.forEach(elm => {
                        elm.id == id ? elm.num = num : null;
                    });
                } else {
                    shop.push(product);
                }
            } else {
                shop = [];
                shop.push(product);
            }
            cookie.set('shop', JSON.stringify(shop), 1);
        }
    }
});
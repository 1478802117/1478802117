let baseUrl = "http://localhost:8080/h5-1910xm/html/shopcar";

define(['jquery', 'cookie', 'lazyload'], function($) {
    return {
        index: function() {
            $.ajax({
                url: `../lib/getall.php`,
                type: 'get',
                dataType: 'json',
                success: function(res) {
                    let temp = '';
                    res.forEach(elm => {
                        let pic = JSON.parse(elm.pic);
                        console.log(pic);
                        temp += `
                        <div class="hot-food-commodity hot-food-hover">
                        <a href="product.html?id=${elm.id}"><img data-original="${pic[0].src}" class="sg1 lazy" ></a>

                        <em>￥${elm.price}</em>
                        <i><a href="#" class="">${elm.title}</a></i>
                    </div>`;
                    });
                    $('.hot-food-bottom').append(temp);
                    $("img.lazy").lazyload({ effect: "fadeIn" });

                }
            })
            $.ajax({
                url: `../lib/getall2.php`,
                type: 'get',
                dataType: 'json',
                success: function(res) {
                    let temp2 = '';
                    res.forEach(elm => {
                        let pic = JSON.parse(elm.pic);
                        console.log(pic);
                        temp2 += `
                        <div class=" hot-food-hover2">
                    <a href="product.html?id=${elm.id}">
                    <img data-original="${pic[0].src}" class="sg1 lazy" style="height:110px">
                    </a>
                    <i><a href="#">${elm.title}</a></i>
                    <b>￥${elm.price}</b>
                </div>
                       `;
                    });
                    $('.hot-food-right').append(temp2);
                    $("img.lazy").lazyload({ effect: "fadeIn" });

                }
            })
            $.ajax({
                url: `../lib/getall3.php`,
                type: 'get',
                dataType: 'json',
                success: function(res) {
                    let temp3 = '';
                    res.forEach(elm => {
                        let pic = JSON.parse(elm.pic);
                        console.log(pic);
                        temp3 += `
                        <div class="zhongjian-p">
                        <a href="product.html?id=${elm.id} class="zhongjian-xia-hover">
                            <img data-original="${pic[0].src}" class="sg1 lazy" ></a>
                        <i>￥${elm.price}</i>
                        <a href="#" class="zhongjian-xia-jieshao">${elm.title}</a>
                    </div>
                       `;
                    });
                    $('.zhongjian-xia').append(temp3);
                    $("img.lazy").lazyload({ effect: "fadeIn" });

                }
            })
            $.ajax({
                url: `../lib/getall4.php`,
                type: 'get',
                dataType: 'json',
                success: function(res) {
                    let temp4 = '';
                    res.forEach(elm => {
                        let pic = JSON.parse(elm.pic);
                        console.log(pic);
                        temp4 += `
                        <div class="right-p">
                    <a href="product.html?id=${elm.id}" class="right-pic">
                    <img data-original="${pic[0].src}" class="sg1 lazy"></a>
                    <i>￥${elm.price}</i>
                    <a href="#" class="right-jieshao">${elm.title}</a>
                </div>
                       `;
                    });
                    $('.cf-right').append(temp4);
                    $("img.lazy").lazyload({ effect: "fadeIn" });

                }
            })
        }
    }
});
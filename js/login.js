define(['jquery', 'md5', 'cookie'], function() {
    return {
        login: function() {
            $('#login').on('click', function() {

                $.ajax({
                    url: "../lib/login.php",
                    type: 'get',
                    data: {
                        'username': $('#login-user').val(),
                        'password': $.md5($('#login-pass').val())
                    },
                    success: function(res) {
                        if (res == 1) {
                            cookie.set('islogin', 'ture', 1);
                            cookie.set('username', $('#login-user').val(), 1);
                            alert('登陆成功');
                            location.href = "http://127.0.0.1:8080/h5-1910xm/html/index1.html";
                        } else {
                            alert('用户名或密码错误');
                            location.reload()
                        }
                    }
                })
            })
        }
    }

});
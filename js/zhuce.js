define(['jquery', 'md5'], function() {
    return {
        yanzhen: function() {
            var reg = /^\w{6,}$/;
            var reg1 = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

            $("#name").on('keyup', function() {
                if (reg.test(this.value)) {
                    $('#namei').html('你的用户名符合要求');
                } else {
                    $('#namei').html('不少于6个字符,建议用英文字母、下划线或数字');
                }
            });
            $("#pass").on('keyup', function() {
                if (reg.test($('#pass').val())) {
                    $('#passi').html('你的密码符合要求');
                } else {
                    $('#passi').html('不少于6个字符,建议用英文字母、下划线或数字');
                }
            });
            $("#ture").on('keyup', function() {
                if ($('#name').val() == $('#ture').val()) {
                    $('#turei').html('验证密码正确');
                } else {
                    $('#turei').html('验证密码错误');
                }
            });
            $("#mail").on('keyup', function() {
                if (reg1.test($('#mail').val())) {
                    $('#maili').html('你的邮箱符合要求');
                } else {
                    $('#maili').html('邮箱格式错误');
                }
            });
        },
        zhuce: function() {
            $('.zhuce-tijiao').on('click', function() {
                $.ajax({
                    url: "../lib/reg.php",
                    type: 'get',
                    data: {
                        'username': $("#name").val(),
                        'password': $.md5($('#pass').val()),
                        ' mail': $('#mail').val()
                    },
                    success: function(res) {
                        if (res == 1) {
                            alert('该用户名已存在,请重新注册');
                            location.reload();
                        } else {
                            alert('注册成功');
                            location.href = 'http://127.0.0.1:8080/h5-1910xm/html/login.html'
                        }
                    }
                })
            })
        }
    }

});
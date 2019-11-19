<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="../stylel/bootstrap.min.css">
    <script src="../js/public2.js"></script>
    <script src="../js/cookie.js"></script>
    <script>
        if(!(cookie.get('isLogined')&&cookie.get('username')==='admin')){
            location.href="../html/login.html";
        }

        $(function(){
            $('.username').html(cookie.get('username'));

            $('#loginout').on('click',function(){
                // 退出  清除cookie
                cookie.remove('isLogined');
                cookie.remove('username');
                location.reload();//刷新页面
            });
        })
    </script>
    <style>
        th{
            text-align:center;
        }
    </style>
</head>
<body>
    
    <div class="container">
        <h1 class="text-center bg-info">用户信息</h1>
        <h4 class="text-center">
            <span class="username"></span>,欢迎回来。 
            <a href="javascript:;" id="loginout">退出</a>
        </h3>
        <table class="table table-bordered table-hover text-center">
            <tr>
                <th>user_id</th>
                <th>user_name</th>
                <th>user_pass</th>
                <th>user_email</th>
                <th>user_phone</th>
                <th>more</th>
            </tr>

            <?php 
                include('./lib/conn.php');  //连接数据库
                $sql = "select * from user";
                $result = $mysqli->query($sql);
                while($row = $result->fetch_assoc()){
                    echo "<tr>";
                    echo "<td>$row[user_id]</td>";
                    echo "<td>$row[user_name]</td>";
                    echo "<td>$row[user_pass]</td>";
                    echo "<td>$row[user_email]</td>";
                    echo "<td>$row[user_phone]</td>";
                    // a标签发送请求  发送的get请求
                    // form 提交方式是get 在地址栏呈现
                    // 地址栏问号后面的部分 search 就是get请求发送的数据
                    echo "<td><a href='./lib/removeuser.php?id=$row[user_id]'>删除</a> <a href='./eg12.update.html?id=$row[user_id]&username=$row[user_name]'>修改</a></td>";
                    echo "</tr>";
                }
                $mysqli->close();
                    
            ?>
        </table>
    </div>
</body>
</html>
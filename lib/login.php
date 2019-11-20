<?php
    include('./conn.php');

    // 接收前端发送的数据
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];

    $sql = "select * from user where u_name='$username' and u_password='$password'";

    $res = $mysqli->query($sql);

    if($res->num_rows>0){
        echo 1;
    }else{
        echo 2;
    }

    $mysqli->close();
?>
<?php
    include('./conn.php');

    $id = $_REQUEST['user_id'];
    $pass = $_REQUEST['user_pass'];
    $email = $_REQUEST['user_email'];
    $phone = $_REQUEST['user_phone'];

    $sql = "update user set user_pass='$pass',user_email='$email',user_phone='$phone' where user_id='$id'";

    $res = $mysqli->query($sql);

    $mysqli->close();

    echo "<script>location.href='userinfo.php';</script>";

?>
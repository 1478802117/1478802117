<?php
    include('./conn.php');

    $id = $_GET['id'];
    
    $sql = "delete from user where user_id=$id";

    $res = $mysqli->query($sql);

    echo "<script>location.href='userinfo.php';</script>";

?>
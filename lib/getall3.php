<?php
    include('./conn.php');

    $sql = "select * from product where id = 7 or id=9 or id = 18";

    $res = $mysqli->query($sql);

    $arr = array();

    while($row = $res->fetch_assoc()){
        array_push($arr,$row);
    }

    $json = json_encode($arr);

    echo $json;

    $mysqli->close();
?>
<?php
    header("Access-Control-Allow-Origin: *");
    //axios
    $id = '';
    $conn = mysqli_connect("localhost", "root", "");
    //select database
    $userid = $_POST['token'];
    mysqli_select_db($conn, "laundreasy");
    //select query
    $sql = "SELECT status,pubtime,tokenno,clothescount,room FROM laundry WHERE userid = '$userid' order by pubtime desc limit 3";
    //execute the query
    $result = mysqli_query($conn, $sql);


    if (!$id) echo '[';
    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
      echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
    // $conn->close();
?>
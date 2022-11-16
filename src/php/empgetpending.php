<?php
    header("Access-Control-Allow-Origin: *");
    //axios
    $id = '';
    $conn = mysqli_connect("localhost", "root", "");
    //select database
    
    mysqli_select_db($conn, "laundreasy");
    //select query
    $sql = "SELECT room,userid,clothescount FROM laundry WHERE typeofreq = 'pending' order by pubtime asc";
    //execute the query
    $result = mysqli_query($conn, $sql);

    // echo '[{"room":"325","userid":"2017A01G","clothescount":"2","tokenNo":"55"}]';
    if (!$id) echo '[';
    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
      echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
?>
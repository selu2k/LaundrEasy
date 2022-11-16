<?php
    header("Access-Control-Allow-Origin: *");
    //axios
    $id = '';
    $conn = mysqli_connect("localhost", "root", "");
    //select database
    
    mysqli_select_db($conn, "laundreasy");
    $sql = "SELECT room,userid,clothescount,tokenno FROM laundry WHERE typeofreq = 'accepted' AND status = 'Ready' order by pubtime asc";
    //execute the query
    $result = mysqli_query($conn, $sql);

    if (!$id) echo '[';
    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
      echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
?>

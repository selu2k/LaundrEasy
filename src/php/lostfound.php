<?php
    header("Access-Control-Allow-Origin: *");
    
    $id = '';
    $conn = mysqli_connect("localhost", "root", "");
    if(!$conn){
        die("Connection failed: " . mysqli_connect_error());
    }
    mysqli_select_db($conn, "laundreasy");
    $method = $_SERVER['REQUEST_METHOD'];

    switch($method){
        case 'GET':
            //select query
            $sql = "SELECT item,description ,phone,foundat  FROM lostfound order by pubtime desc";
            break;
        case 'POST':
            //mysql_real_escape_string()
            $item = $_POST['item'];
            $item = trim($item);
            $item = strip_tags($item);
            $item = mysqli_real_escape_string($conn,$item);
            $description = $_POST['description'];
            $description = trim($description);
            $description = strip_tags($description);
            $description = mysqli_real_escape_string($conn,$description);
            $phone = $_POST['phNo'];
            $phone = trim($phone);
            $phone = strip_tags($phone);
            $phone = mysqli_real_escape_string($conn,$phone);
            $foundat = $_POST['foundAt'];
            $foundat = trim($foundat);
            $foundat = strip_tags($foundat);
            $foundat = mysqli_real_escape_string($conn,$foundat);
            $sql = "INSERT INTO lostfound (item,description,phone,foundat) VALUES ('$item','$description','$phone','$foundat')";
            break;
    }
    
    //execute the query
    $result = mysqli_query($conn, $sql);
    if(!$result){
        die("Query failed: " . mysqli_error($conn));
    }
    if($method == 'GET'){
        if (!$id) echo '[';
        for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
          echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
        }
        if (!$id) echo ']';
    }
    elseif($method == 'POST'){
        echo json_encode($result);
    }

    $conn->close();
?>
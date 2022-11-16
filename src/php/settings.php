<?php
    header("Access-Control-Allow-Origin: *");
    //axios
    $id = '';
    $conn = mysqli_connect("localhost", "root", "");
    if(!$conn){
        die("Connection failed: " . mysqli_connect_error());
    }
     //select database
    mysqli_select_db($conn, "laundreasy");
    $regno = mysqli_real_escape_string($conn,$_POST['userid']);
    $regno = trim($regno);
    $regno = strip_tags($regno);
    $sql = "SELECT block,room,email,gender, (select count(userid) from laundry where userid = '$regno') as co FROM users WHERE userid = '$regno' ";
    //execute the query
    $result = mysqli_query($conn, $sql);


    
    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
      echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    

?>
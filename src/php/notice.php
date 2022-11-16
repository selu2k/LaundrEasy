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
    $method = $_SERVER['REQUEST_METHOD'];
    switch($method){
        case 'GET':
            //select query
            $sql = "SELECT description FROM notice order by pubtime desc limit 6";
            break;
        case 'POST':
            //mysql_real_escape_string()

            $description = $_POST['description'];
            $description = trim($description);
            $description = strip_tags($description);
            $sql = "INSERT INTO notice (description) VALUES ('$description')";
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
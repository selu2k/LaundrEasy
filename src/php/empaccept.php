<?php
header("Access-Control-Allow-Origin: *");
// echo '{"token" : "employee"}';
//conn
$conn = new mysqli("localhost", "root", "", "laundreasy");
//check
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$tokenno = mysqli_real_escape_string($conn,$_POST['tokenno']);
$tokenno = trim($tokenno);
$tokenno = strip_tags($tokenno);
$userid = mysqli_real_escape_string($conn,$_POST['userid']);
$userid = trim($userid);
$userid = strip_tags($userid);
$sql = "select * from laundry where tokenno = '$tokenno'";
$result = $conn->query($sql);
if($result->num_rows > 0){
    echo "Invalid";
}else{
    $sql1 = "Update laundry set typeofreq = 'accepted' , status = 'notdone', tokenno = '$tokenno' where userid = '$userid' AND typeofreq = 'pending'";
    $result1 = $conn->query($sql1);
    if ($result1) {
        echo "Success";
    } else {
        echo "Invalid";
    }
}

?>
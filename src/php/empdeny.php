<?php
header("Access-Control-Allow-Origin: *");
// echo '{"token" : "employee"}';
//conn
$conn = new mysqli("localhost", "root", "", "laundreasy");
//check
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$userid = mysqli_real_escape_string($conn,$_POST['userid']);
$userid = trim($userid);
$userid = strip_tags($userid);
$sql = "Delete from laundry where userid = '$userid' AND status = 'Not accepted'";
$result = $conn->query($sql);
if($result->num_rows > 0){
    echo "Invalid";
}else{
    $sql1 = "Update laundry set typeofreq = 'accepted' , status = 'notdone',tokenno = '$token' where userid = '$userid' AND typeofreq = 'pending'";
}

?>
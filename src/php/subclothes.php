<?php
    header("Access-Control-Allow-Origin: *");
    // echo '{"token" : "employee"}';
    //conn
    $conn = new mysqli("localhost", "root", "", "laundreasy");
    //check
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $regno = mysqli_real_escape_string($conn,$_POST['userid']);
    $regno = trim($regno);
    $regno = strip_tags($regno);
    $clothes = mysqli_real_escape_string($conn,$_POST['clothes']);
    $clothes = trim($clothes);
    $clothes = strip_tags($clothes);
    $tokenno = "";
    $typeofreq = "pending";
    $status = "Not accepted";
    $sqlcheck = "select * from laundry where userid = '$regno' AND (typeofreq = 'pending' OR  (typeofreq = 'accepted' AND status !='Collected')) ";
    $resultcheck = $conn->query($sqlcheck);
    if($resultcheck->num_rows > 0){
        echo "Invalid";
    }else{
    $sql = "SELECT room FROM users WHERE userid = '$regno'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            $room = $row["room"];
            $sql = "INSERT INTO laundry (userid,room,clothescount,typeofreq,status) VALUES ('$regno','$room','$clothes','pending','$status')";
            $result = $conn->query($sql);
            if ($result) {
                echo '{"token" : "success"}';
            } else {
                echo '{"token" : "invalid"}';
            }
        }
    } else {
        echo '{"token" : "invalid"}';
    }
}

?>

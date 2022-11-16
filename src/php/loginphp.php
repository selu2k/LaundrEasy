<?php
 header("Access-Control-Allow-Origin: *");
    // echo '{"token" : "employee"}';
    //conn
    $conn = new mysqli("localhost", "root", "", "laundreasy");
    //check
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $regno = mysqli_real_escape_string($conn,$_POST['email']);
    $regno = trim($regno);
    $regno = strip_tags($regno);
    $password = mysqli_real_escape_string($conn,$_POST['password']);
    $password = trim($password);
    $password = strip_tags($password);
    $password = $regno.$password;
    $password = sha1($password);
    $sql = "SELECT * FROM users WHERE userid = '$regno' AND password = '$password'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            // regex to check if the user is an employee
            if(preg_match('/^[0-9]{2}[A-Z]{3}\d{4}$/', $row["userid"])){
                echo '{"token" : "'.$row["userid"].'"}';
            }
            else{
                echo '{"token" : "'.$row["userid"].'"}';
            }
        }
    } else {
        echo '{"token" : "invalid"}';
    }
    $conn->close();
?>
<?php
header("Access-Control-Allow-Origin: *");
    // conn
    $conn = new mysqli("localhost", "root", "", "laundreasy");
    // check
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $email = mysqli_real_escape_string($conn,$_POST['email']);
    $email = trim($email);
    $email = strip_tags($email);
    $room = mysqli_real_escape_string($conn,$_POST['room']);
    $room = trim($room);
    $room = strip_tags($room);
    $gender = mysqli_real_escape_string($conn,$_POST['gender']);
    $gender = trim($gender);
    $gender = strip_tags($gender);
    $block = mysqli_real_escape_string($conn,$_POST['block']);
    $block = trim($block);
    $block = strip_tags($block);
    $regno = mysqli_real_escape_string($conn,$_POST['regNo']);
    $regno = trim($regno);
    $regno = strip_tags($regno);
    $password = mysqli_real_escape_string($conn,$_POST['password']);
    $password = trim($password);
    $password = strip_tags($password);
    $password = $regno.$password;
    $password = sha1($password);
    $sql = "INSERT INTO users (userid,block,room,gender,email, password) VALUES ('$regno','$block','$room','$gender','$email','$password')";
    $result = $conn->query($sql);
    if ($result) {
            echo '{"token" : "'.$regno.'"}';
    } else {
        echo '{"token" : "invalid"}';
    }

    //conn close
    $conn->close();

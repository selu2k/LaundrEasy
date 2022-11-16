import React from "react";
import "./ButtonDashboard.css";
import { Container } from "./Container";
import './index.css';
import axios from "axios";


const ButtonDashboard = ({token}) => {
  const triggerText = "+";
  // console.log(typeof token);

  const onSubmit = (event) => {
    event.preventDefault(event);
    const formData = new FormData();

    formData.append("userid", token);
    formData.append("clothes", event.target.clothesNum.value);
    console.log(formData);
    axios.post('http://localhost/laundashphp/subclothes.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => { 
        response = response.data;
        if(response === "Invalid"){
          alert("Clothes already submitted");
        }
        });

    // console.log(event.target.userID.value);
    // console.log(event.target.clothesNum.value);
    // console.log(token);
  };
  return (
    <div className="ButtonDashboard">
      <Container triggerText={triggerText} onSubmit={onSubmit} />
    </div>
  );
};

export default ButtonDashboard;

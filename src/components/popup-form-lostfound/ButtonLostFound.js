import React from "react";
import axios from "axios";
import "./ButtonLostFound.css";
import { Container } from "./Container";
import './index.css';
const ButtonLostFound = () => {
  const triggerText = "+";
  const onSubmit = (event) => {
    event.preventDefault(event);
    const formData = new FormData();
    formData.append("item", event.target.item.value);
    formData.append("foundAt", event.target.foundAt.value);
    formData.append("phNo", event.target.phNo.value);
    formData.append("description", event.target.description.value);

    axios.post('http://localhost/laundashphp/lostfound.php',formData ,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

    // event.closeModal();  // This is the line not working

    
    // console.log(event.target);
    // console.log(event.target.item.value);
    // console.log(event.target.foundAt.value);
    // console.log(event.target.phNo.value);
    // console.log(event.target.description.value);
  };
  return (
    <div className="ButtonLostFound">
      <Container triggerText={triggerText} onSubmit={onSubmit} />
    </div>
  );
};

export default ButtonLostFound;

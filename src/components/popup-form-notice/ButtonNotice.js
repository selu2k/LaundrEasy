import React from "react";
import axios from "axios";
import "./ButtonNotice.css";
import { Container } from "./Container";
import './index.css';

const ButtonNotice = () => {
  const triggerText = "+";
  const onSubmit = (event) => {
    event.preventDefault(event);
    const formData = new FormData();

    formData.append("description", event.target.description.value);

    /*
    REVIEw ONCE SINCE TAKEN FROM LOST AND FOUND
    */
    axios.post('http://localhost/laundashphp/notice.php', formData, {
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

export default ButtonNotice;

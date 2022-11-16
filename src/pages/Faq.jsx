import React, { useState } from "react";
import "../styles/faq.css";
import data from "../assets/dummy-data/questionsFaq";

function Faq() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  }
  return (
    <div className="main-content-faq">

      <h2 className="faq-head">Frequently Asked Questions</h2>
      <div className="wrapper-faq">

        <div className="accordion">
          {data.map((item, index) => (

            <div className="item-faq">
              <div className="title-faq" onClick={() => toggle(index)}>
                <h2>{item.question}</h2>
                <span>{selected === index ? "-" : "+"}</span>
              </div>
              <div className={selected === index ? "content-faq-show" : "content-faq"}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>);

}

export default Faq;
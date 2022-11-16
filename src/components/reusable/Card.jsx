import React from "react";
import ProgressBar from "./ProgressBar/ProgressBar";
import contacts from "../../assets/dummy-data/contacts";


// const state ={
//   size: 62.5,
//   progress: 25,
//   strokeWidth: 10,
//   circleOneStroke: '#eea046',
//   circleTwoStroke: "green"
// }

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}


function Card(props) {
  const state = contacts[0].progress;



  var t = props.dos.split(/[- :]/);
  // console.log(props.dos);
  // Apply each element to the Date function
  var startDate = new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5]);
  var endDate = addDays(startDate, 2);
  // console.log(endDate);

  var name;

  if (props.name === "Ready" || props.name === "Collected") {
    state.progress = 100;
  } else if (props.name === "Not accepted") {
    state.progress = 0;
    name = "Not Accepted";
  } else {
    const total = +endDate - +startDate;
    const elaps = Date.now() - startDate;
    var prog = Math.round((elaps / total) * 100);
    state.progress = Math.min(prog, 100);
    if (state.progress < 50) {
      name = "2 days left";
    } else if (state.progress > 75) {
      name = "Collect today";
    }
    else {
      name = "1 day left";
    }
  }


  // state.progress = props.progress;
  return (
    <div className="card-body">
      <div className="card">
        <div className="top">
          <h2 className="name">{(props.name === "Ready" || props.name === "Collected") ? props.name : name}</h2>
          <ProgressBar {...state} />
        </div>
        <div className="bottom">
          <p className="info"><b>Token No: </b> {(props.name === "Not accepted") ? "NA" : props.token}</p>
          <p className="info"><b>Clothes: </b> {props.clothes}</p>
          <p className="info"><b>Submission: </b> {props.dos}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
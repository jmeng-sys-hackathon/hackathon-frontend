import React from "react";
import Form from "react-bootstrap/Form";
import Card from "../Components/Card";
function Form2(props) {
  return (
    <div>
      <label>You picked Sports! Do want to participate or view?</label>
      <div className="cardspec" style={{ flexDirection: "row" }}>
        <Card subtitle={props.img} title="Participate!" />
        <Card subtitle={props.img} title="Spectate!" />
      </div>
    </div>
  );
}

export default Form2;

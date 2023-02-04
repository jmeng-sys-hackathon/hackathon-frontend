import React from "react";
import Card from "react-bootstrap/Card";
import Rating from "@mui/material/Rating";
function card(props) {
  return (
    <div style={{ width: "18rem" }} class="shadow p-3 mb-3 rounded">
      <Card.Body>
        <Card.Title style={{ fontFamily: "Amatic SC" }}>Card Title</Card.Title>
        <Card.Text style={{ fontFamily: "Montserrat" }}>
          {props.subtitle}
        </Card.Text>
        <Rating name="read-only" value="4" readOnly />
        <Card.Link href="#">Another Link</Card.Link>
        <img src={props.img} alt={props.imgalt} />
      </Card.Body>
    </div>
  );
}

export default card;

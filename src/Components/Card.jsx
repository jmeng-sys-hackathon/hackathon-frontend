import React from "react";
import Card from "react-bootstrap/Card";
import Rating from "@mui/material/Rating";
import styled from "styled-components";

function card(props) {
  console.log(props)
  return (
    <CardStyle style={{ width: "22rem" }} className="shadow p-3 mb-3 rounded">
      <Card.Body>
        <div style={{minHeight: "72px"}}>
          <Card.Title className="card-title">{props.title}</Card.Title>
        </div>
        <Card.Text className="card-text">
          {props.subtitle}
        </Card.Text>
        <Card.Text className="view-more">{"View more..."}</Card.Text>
        <Rating name="read-only" value={props.rating} style={{marginBottom: "30px"}} readOnly />
        {/*<Card.Link href="#">Another Link</Card.Link>*/}
        <img src={props.img} alt={props.imgalt} />
      </Card.Body>
    </CardStyle>
  );
}

export default card;

const CardStyle = styled.div`

  border-radius: 20px !important;
  border: solid rgba(141, 211, 187, 0.3);
  border-width: 1px;
  box-shadow: 18px 16px 2px 2px rgba(141, 211, 187, 0.4) !important;

  margin: 0 20px;
  margin-bottom: 40px !important;

  transition: all 0.5s ease-in-out;
  
  .card-title {
    font-family: "Amatic SC";
    font-weight: bold;
    letter-spacing: 2px;
    margin-bottom: 30px;
  }

  .card-text {
     font-family: "Montserrat";
     font-size: 14px;
     color: rgb(0, 0, 0);
  }

  .view-more {
    font-family: "Amatic SC";
    font-size: 16px;
    font-weight: bold;
    text-align: right;
  }

  img {
    max-width: 100%;
  }

  &:hover {
    transform: scale(1.03);
    box-shadow: 18px 16px 10px 4px rgba(141, 211, 187, 0.4) !important;
  }
`;
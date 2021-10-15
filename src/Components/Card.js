import React from "react";
import {
  CardContainer,
  CardImage,
  CardPara,
  CardTitle,
  InfoContainer,
  CardArrow,
} from "./styled/Card.styled";
import cardImageS from "../images/astro-s.jpg";
import cardImageL from "../images/astro-l.png";
export default function Card({ width }) {
  return (
    <CardContainer>
      {width > 1024 ? (
        <CardImage src={cardImageL} alt="Neil Armstrong" />
      ) : (
        <CardImage src={cardImageS} alt="Neil Armstrong" />
      )}

      <InfoContainer>
        <CardTitle>Exploration</CardTitle>
        <CardPara>Lorem ipsum dolor sit amet, consectetur adipiscing</CardPara>
        <CardArrow />
      </InfoContainer>
      <InfoContainer next>
        <CardTitle>Footprint</CardTitle>
        <CardPara>Lorem ipsum dolor sit amet, consectetur</CardPara>
      </InfoContainer>
    </CardContainer>
  );
}

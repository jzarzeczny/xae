import React from "react";
import {
  HeroContainer,
  HeroImage,
  HeroPara,
  HeroTitle,
} from "./styled/Hero.styled";
import mainImage from "../images/astronaut.svg";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroImage src={mainImage} alt="astrouaut" />
      <HeroTitle>
        Adventure <br /> Together
      </HeroTitle>
      <HeroPara>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat id
        potenti faucibus nec, rhoncus, vulputate vitae. Dictum rutrum ut cras
        nullam porta id dolor arcu, quis.
      </HeroPara>
    </HeroContainer>
  );
}

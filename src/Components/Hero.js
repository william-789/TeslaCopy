import React from 'react'
import styled from 'styled-components'

const HeroSection = styled.section `
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
jusitfy-content: space-around;
align-items: center;
font-size: 14px;

h1 {
    font-size: 40px;
}
`;
const ButtonBox = styled.div `
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;

function Hero({heroId, backgroundFile, title, text}) {
  return (
    <HeroSection id={heroId} style={{ backgroundImage:"url(" + backgroundFile + ")" }}>
    <h1>{title}</h1>
    <p>{text}</p>
    <ButtonBox>
        <button>Por fazer</button>
    </ButtonBox>
    </HeroSection>
  )
}

export default Hero

/*
H1 Model 3 - 40px (36px mobile)
Order Online for Touchless Delivery - 14px, Segoi UI?
<Button buttonBgOpacity={buttonBO}>
{buttonText}
</Button>
*/

import React from 'react'
import styled from 'styled-components'
import Model3img from './1-Model-3.jpg'

const HeroSection = styled.section `
width: 100%;
display: flex;
background-image: url(${Model3img});
height: 100vh;
background-position: center;
background-size: cover;
flex-direction: column;
align-items: space-between;
justify-content: center;
`;
const TextBox = styled.div `
text-align: center;
`;
const ButtonBox = styled.div `
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
width: 100%;
button {
    padding: 10px;
    margin: 0 10px;
    border-radius: 20px;
}
`;
function TestHero() {
  return (
    <HeroSection id='Model3'>
        <TextBox>
            <h1>Model 3</h1>   
            <p>Order Online for Touchless Delivery</p>
        </TextBox>
        <ButtonBox>

        </ButtonBox>
        
    </HeroSection>
  )
}

//heroId - ok, backgroundFile - ok, title, text
/*Missing -->
text: fonts and sizes
p: a and a styling
button: sizes, padding and margin*/
export default TestHero
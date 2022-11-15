import React from 'react'
import styled from 'styled-components'

const HeroSection = styled.section `
width: 100%;
display: flex;
height: 100vh;
background-position: center;
background-size: cover;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 16vh 0 13vh 0;
box-sizing: border-box;
`;
const TextBox = styled.div `
text-align: center;
h1 {
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  margin: 0;
  @media (max-width: 768px){
    font-size: 36px;
  }
}
p {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
  padding-top: 6px;
}
p a {
  color: #000;
  text-decoration: none;
  border-bottom: 1px solid #000;
  outline-offeset: 2px;
}
`;
const ButtonBox = styled.div `
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
width: 100%;
z-index: 1;
button {
    padding: 10px;
    margin: 0 10px;
    border-radius: 20px;
    width: 264px;
    height: 40px;
    border: none;
    box-sizing: border-box;
    backdrop-filter: blur(8px);
    cursor: pointer;
    @media (max-width: 599px) {
      width: calc(100vw - 50px);
      margin-bottom: 15px;
    }
}
.button1 {
  background-color: rgba(23, 26, 32, 0.8);
  color: #fff;
}
.button2 {
  background-color: rgba(244, 244, 244, 0.65);
  color: #000;
}
`;
function TestHero({heroId, backgroundFile, title, text, delivery, button1, button2}) {

  return (
    <HeroSection id={heroId} style={{ backgroundImage: `url(${backgroundFile})`}}>
        <TextBox>
            <h1>{title}</h1>   
            <p>{text}<a href='#'>{delivery}</a></p>
        </TextBox>
        <ButtonBox>
          <a><button className='button1'>{button1}</button></a>
          {button2 ? <a><button className='button2'>{button2}</button></a> : ''}
        </ButtonBox>
        
    </HeroSection>
  )
}

//heroId - ok, backgroundFile - ok, title - ok, text - ok, delivery - ok, button1 - ok, button2 - ok
/*Missing -->
textbox p fontweight doesnt work
button: width 100% at 599px
try mobile bg image at 839px
Make it into pattern
*/
export default TestHero

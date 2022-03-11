import React from 'react';
import styled from 'styled-components';
import { CenterInfo, SideInfo } from './NavData';

const NavbarBox = styled.nav `
width: 100%;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: space-between;
height: 54px;
font-size: 14px;
line-height: 21px;
padding: 0 32px;
a {
  padding: 8px 16px;
  height: 32px;
  text-align: center;
}
`;
const Products = styled.ul `
list-style: none;
margin: 0;
padding: 0;
padding-inline: 8px;
li {
  transition: transform 0.5 ease;
  display: inline-block;
}
li a {
  text-decoration: none;
  color: black;
  border-radius: 12px;
  transition: color .33s ease,background-color .33s ease;
}
li a:hover {
  background-color: rgba(117, 117, 117, 0.2);
}
`;
function Navbar() {
  return (
    <NavbarBox>
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="24" viewBox="0 0 342 35">
          <path d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z" fill="currentColor"></path>
        </svg>
      </a>      
      <Products >
        {CenterInfo.map((product, key) => {
          return(
          <li key={key}>
            <a href={product.link}>{product.title}</a>
          </li>)
        })}
      </Products>
      <Products>
      {SideInfo.map((info, key) => {
          return(
          <li key={key}>
            <a href='/'>{info}</a>
          </li>)
        })}
      </Products>
    </NavbarBox>
  )
}
/*IconTesla - icon
Products: Model S, Model 3, Model X, Model Y, Solar Roof, Solar Panels
Products disappear at 1199px
MenuGeneral: Shop Account Menu
tesla.com
*/

export default Navbar
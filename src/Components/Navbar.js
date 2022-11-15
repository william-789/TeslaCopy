import React, { useState } from 'react';
import styled from 'styled-components';
import { CenterInfo, SideInfo , SidebarData} from './NavData';

/*
MISSING: smooth transition products hover
*/
const NavbarBox = styled.nav `
width: 100%;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: space-between;
height: 56px;
font-size: 14px;
line-height: 21px;
padding: 0 32px;
background-color: transparent;
position: fixed;
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
  @media (max-width: 1199px){
    background-color: rgba(117, 117, 117, 0.12);
  }
}
li a:hover {
  background-color: rgba(117, 117, 117, 0.12);
  @media (max-width: 1199px){
    background-color: rgba(117, 117, 117, 0.18);
  }
}
@media (max-width: 1199px){
  li:not(.menu) {
    display: none;
  }
}
`;
const SidebarBox = styled.div `
.nav-sidebar {
    display: none;
    background-color: #fff;
    width: 311px; 
    height: 100vh;    
    position: absolute;   
    box-sizing: border-box;
    top: 0;
    right: 0;
}
.nav-sidebar.show {
    display: block;
    transition: 0.5s ease;
    z-index: 102;
}
nav ul {
    list-style: none;
    padding: 0;
    margin: 4px 32px 48px 32px;
}
nav ul li {
    width: 247px;
    height: 32px;
    margin-bottom: 8px;
    border-radius: 12px;
    transition: color .33s ease,background-color .33s ease;
    display: flex;
}
nav ul li:hover {
  background-color: rgba(117, 117, 117, 0.12);
}
nav ul li a {
    text-decoration: none;
    color: #393c41;
    font-size: 14px;
    width: 231;
    padding: 8px 16px;
}
.sidebarHeader {
    width: 100%;
    height: 80px;
    padding: 20px;
    box-sizing: border-box;
}
.sidebarHeader button {
    background-color: transparent;
    border: none;
    padding: 8px;
    float: right;
    height: 40px;
}
.sidebarHeader button svg {
    block-size: 24px;
}
`;
function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
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
        <li onClick={showSidebar} className='menu'><a>Menu</a></li>
      </Products>
    </NavbarBox>
    <SidebarBox>
        <nav className={sidebar ? 'nav-sidebar show' : 'nav-sidebar'}>
          <div className='sidebarHeader'>
            <button className='menu-bars' onClick={showSidebar}>
              <svg class="tds-icon tds-icon-close tds-modal-close-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.53 17.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.748.748 0 0 1-1.06 0 .75.75 0 0 1 0-1.06L10.94 12 5.47 6.53a.75.75 0 1 1 1.06-1.06L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47z" fill='currentColor'></path>
              </svg>
            </button>
          </div>
          <ul>
            {SidebarData.map((item) => {
              return (
                <li key={item.title}>
                  <a href='#'>
                    {item.title}
                  </a>
                </li>);
            })}
          </ul>
        </nav>    
    </SidebarBox>
    </>
  )
}
/*IconTesla - icon
Products: Model S, Model 3, Model X, Model Y, Solar Roof, Solar Panels
Products disappear at 1199px
MenuGeneral: Shop Account Menu

tesla.com
*/

export default Navbar
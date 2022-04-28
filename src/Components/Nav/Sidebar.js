import React, { useState } from 'react'
import {SidebarData} from './SidebarData.js'
import styled from  'styled-components' 

const Navbar = styled.nav `
width: 100%;
height: 56px;
`;
const Menu = styled.a `
float: left;
text-decoration: none;
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
}
nav ul li a {
    text-decoration: none;
    color: #393c41;
    font-size: 14px;
    width: 231;
    padding: 0 8px;
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
function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
    <Navbar>
        <Menu onClick={showSidebar}>Menu</Menu>
    </Navbar>
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
        {SidebarData.map((item, index) => {
            return (
                <li key={index}>
                    <a href='#'>
                        {item.title}
                    </a>
                </li>); })}
    </ul>        
    </nav>    
    </SidebarBox>
    
        
    </>
  );
}

export default Sidebar
//add transition
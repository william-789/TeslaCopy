import React, { useState } from 'react'
import SidebarData from './SidebarData'
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
    width: 287px; 
    height: 100vh;    
    position: fixed;
}
.nav-sidebar.show {
    display: flex;
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
    <ul>
        <li className='navbar-toggle'>
              <a href='#' className='menu-bars'>
                X
              </a></li>
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
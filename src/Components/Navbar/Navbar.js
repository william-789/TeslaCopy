import React from 'react'
import styled from 'styled-components'

const NavbarBox = styled.nav `
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;

`;

function Navbar() {
  return (
    <NavbarBox>
        <IconTesla />
        <Products />
        <MenuGeneral />
    </NavbarBox>
  )
}
/*IconTesla - icon
Products: Model S, Model 3, Model X, Solar Roof, Solar Panels
MenuGeneral: Shop Account Menu
tesla.com
*/

export default Navbar
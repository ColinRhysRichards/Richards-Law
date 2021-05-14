import React from "react";
import styled from 'styled-components'
import Icon from '../icons/R&RIcon.svg'


const Div = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: #03022D;
    color: white;
` 
const Logo = styled.img`
    height: auto;
    width: 100px;
    padding: 13px 0px;
    max-width: 600px;
    height: auto;
    overflow: hidden;
    text-align: center;
    margin: 0 21px;
`
const HamburgerMenu = styled.div`
    width: 100%;
    max-width: 600px;
    height: auto;
    overflow: hidden;
    text-align: center;
    margin: 0 20px;
    padding: 1rem;
`

function Navbar() {
    return (
      <Div>
        <Logo src={Icon} alt="homepage icon" />
        <Logo src={Icon} alt="homepage icon" />
        {/* <HamburgerMenu>H</HamburgerMenu> */}
      </Div>
    );
  }

  export default Navbar;
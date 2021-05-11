import React from "react";
import styled from 'styled-components'
import HeroImg from '../images/homepage-hero.jpg'


const Div = styled.div`
    width: 100%;
    max-width: 100%fit-content;
    background: #03022D;
    color: white;
`
const H4 = styled.div`
    margin: 0 21px;
    padding: 21px 0;
`
const H3 = styled.div`
    margin: 21px 21px;
`
const Ul = styled.ul`
    display: flex;
    justify-content: center;
    align-content: space-between;
    list-style: none;
    margin: 0px 21px;
    padding: 21px 0px;
    `
const Li = styled.li`
    color: #03022D;
    background-color: white; 
    border: 1px solid white;
    border-radius: 20px;
    padding: 3px;
    margin: 5px;
    font-weight: bold;
    font-size: 15px;
    font-family: ariel;
`    
const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    background: linear-gradient(0deg, white 60%, #03022D 60%);
`
const Img = styled.img`
    width: 100%;
    max-width: 600px;
    height: auto;
    overflow: hidden;
    text-align: center;
    margin: 0 20px;
`

function HomepageView() {
    return (
      <Div>
        <H4>About Us</H4>
        <H3>The attorneys at Richards & Richards Law Group, P.L.L.C. offer
            top-notch legal advice and representation to clients throughout
            Northern Utah. We are committed to providing the highest quality of
            professional legal services at an affordable price. We believe that
            dedicating our full attention to the needs of each individual client
            is not only a matter of good service, but is critical to achieving
            the best possible results.
        </H3>
        <Ul>
          <Li>Practice Areas</Li>
          <Li>Attorneys</Li>
          <Li>Contact Us</Li>
        </Ul>
        <ImgContainer>
          <Img src={HeroImg} alt="law firm" />
        </ImgContainer>
      </Div>
    );
  }

  export default HomepageView;
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import { useState } from "react";
import styled from "styled-components";



function HeaderApp() {
  
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
      setMode(!active)
  }

  const MenuCelular = styled.div`
    @media(min-width: 1024px) {
    width: 0px;
    display: none;
    }

    @media(max-width: 767px) {


#menu-tres-pontos{
  position: absolute;
  top: 7%;
  right: 8%;
}

.hamburger-line {
  z-index: 2;
  position: absolute;
  right: 2%;
  width: 9.5vw;
  height: 6px;
  border-radius: 5px;
  border: 1px solid white ;
  background-color: #000;
  transition: transform 1s ease;
}

.hamburger-line:nth-of-type(1) {
  top: 10px;
}

.hamburger-line:nth-of-type(2) {
  top: 20px;
}

.hamburger-line:nth-of-type(3) {
  top: 30px;
}

.iconActive .hamburger-line:nth-of-type(1) {
  transform: rotate(45deg) translate(0px, 8px);
}

.iconActive .hamburger-line:nth-of-type(2) {
  transform: rotate(-45deg) translate(-1px, -8px);
}

.iconActive .hamburger-line:nth-of-type(3) {
  opacity: 0;
}

.menuOpen {
    background-color: rgba(0, 0, 0, 0.5);
    position: relative;
    left: 61.688%;
}

.menu-responsive-bottons{
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 35vh;
  top: 15%;
  left: 10%;
  z-index: 99;
}

.button-header{
  width: 30vw;
  font-size: 2rem;
}

  }
  `

const ApagarHeader = styled.div`
  @media(max-width: 767px){
  display: none;
  width: 0;
  }

`

  return (
    <>  

        <MenuCelular>
        <div id='menu-tres-pontos' className={active ? 'icon iconActive':'icon'} onClick={ToggleMode}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>

        <div className={active ? "menu menuOpen": "menu menuClose"}>
          <div className='menu-responsive-bottons'>
          <Link to='/contatos' className='button-header' id='contact'>
          Contatos</Link>
          <Link to='/sobre' className='button-header'>
          Sobre</Link>
          <Link to='/trabalhos 'className='button-header'>
          Trabalhos</Link>
          <Link to='/' className='button-header'>
          Em breve</Link>
          </div>
        </div>
        
        </MenuCelular>

        <Navbar key={'xl'} bg="light" expand={'xl'} className="mb-3">
        
          <Container fluid>
            <Nav>
              <Link to="/">
              <img
              src="./Astronauta.svg"
              className="profile"
              alt="Portifolio avatar logo"
            />
              </Link>
            </Nav>
            <ApagarHeader>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                  <div className='buttons'>
                  <Link to='/contatos' className='button-header' id='contact'>
                  Contatos</Link>
                  <Link to='/sobre' className='button-header'>
                  Sobre</Link>
                  <Link to='/trabalhos 'className='button-header'>
                  Trabalhos</Link>
                  <Link to='/' className='button-header'>
                  Em breve</Link>
                  </div>
                </Nav>
            </ApagarHeader>
          </Container>
        </Navbar>
 

   
    </>
  )
}

export default HeaderApp


{/* <nav className='background-header'>
<img className='profile' src="./public/Astronauta.png" alt="" />
<div className='buttons'>
<button className='button-header'>Trabalhos</button>
<button className='button-header'>Sobre</button>
<button className='button-header'>Futuro</button>
<button className='button-header'>Contatos</button>
</div>
</nav> */}
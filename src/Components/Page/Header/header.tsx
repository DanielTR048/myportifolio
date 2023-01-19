import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';



function HeaderApp() {



  return (
    <>  

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

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'xl'}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${'xl'}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${'xl'}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'xl'}`}>
                 Portifolio
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
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
              </Offcanvas.Body>
            </Navbar.Offcanvas>
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
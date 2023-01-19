import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import Contatos from '../../templates/Contatos/index'


function HeaderApp() {



  return (
    <>  

      <Router>
        <Routes>
          <Route  path='/contatos' element={<Contatos/>} />
        </Routes>
      </Router>

        <Navbar key={'xl'} bg="light" expand={'xl'} className="mb-3">
        
          <Container fluid>
            <Nav>
              <a href="/">
              <img
              src="./Astronauta.svg"
              className="profile"
              alt="Portifolio avatar logo"
            />
              </a>
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
                  <button className='button-header' type="button" onClick={(e) => {e.preventDefault(); window.location.href='/contatos';}}>
                  Contatos</button>
                  <button className='button-header' type="button" onClick={(e) => {e.preventDefault(); window.location.href='/sobre';}}>
                  Sobre</button>
                  <button className='button-header' type="button" onClick={(e) => {e.preventDefault(); window.location.href='/trabalhos';}}>
                  Trabalhos</button>
                  <button className='button-header' type="button" onClick={(e) => {e.preventDefault(); window.location.href='/projetos';}}>
                  Em breve</button>
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
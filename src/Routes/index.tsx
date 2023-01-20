import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ContatoHome from '../Components/templates/contato-home';
import Home from '../Components/templates/Home';
import About from '../Components/templates/Sobre';



function MainRoutes(){
    return(
        <Router>
        <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/contatos' element={<ContatoHome/>} />
        <Route  path='/sobre' element={<About/>} />
        </Routes>
        </Router>
    )
}

export default MainRoutes


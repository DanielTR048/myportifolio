import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ContatoHome from '../Components/templates/contato-home';
import Contatos from '../Components/templates/Contatos';
import Home from '../Components/templates/Home';



function MainRoutes(){
    return(
        <Router>
        <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/contatos' element={<ContatoHome/>} />
        </Routes>
        </Router>
    )
}

export default MainRoutes
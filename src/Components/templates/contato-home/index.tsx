import styled from 'styled-components'
import HeaderApp from '../../Page/Header/header'
import MainApp from '../../Page/Main/mainApp'
import Contatos from '../Contatos'
import './contato.css'



const ContatoHome = () =>{
    const Classe = styled.div`
        .main02{
            display: none;
        }
    `
    return <>
        <HeaderApp></HeaderApp>
        <Contatos></Contatos>
        <Classe>
        <MainApp></MainApp>
        </Classe>
    </> 
    
};

export default ContatoHome;
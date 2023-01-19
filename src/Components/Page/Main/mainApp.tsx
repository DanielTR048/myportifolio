import './main.css';
import Carousel from '../../templates/Carrosel';
import { Project } from '../../templates/project';
import Button from '../../Itens/Botão-troca-cor';
import { useState } from 'react';




const projectList: Project[] = [
  { id: "1", name: 'Projeto Hiper+ um e-commerce de hipermeabilizantes, montado na loja integrada, um projeto freelance, feito por mim e um companheiro do ramo de marketing, o projeto em si foi simples, o mais complicado foi design e os ajustes dos produtos, que eu acabei utilizando uma IA para me auxiliar no processo - www.lojaimpermais.com.br', image: './logohipermais.svg' },
  { id: "2", name: 'Projeto Pong feito em C#, um game montado usando a biblioteca OpenTK, meu primeiro jogo já programado, é bem arcaico o sistema, bem simples, mas é foi muito prazeroso faze-lo e jogar o resultado final foi como conseguir andar a primeira vez de bicicleta', image: './pong.svg' },
  { id: "3", name: 'Meu Projeto de Portifolio com o auxilio de um companheiro programador desenvolvi a primeira versão da minha vida usando ReactTS com a biblioteca VITE, mostrando o que tenho a oferecer como programador, não só isso o site contém imagens totalmente feitas por IA', image: './imageportifolio.svg' },
  { id: "4", name: 'Um Projeto em equipe E-ponto um projeto usando reactTS, esse foi mais que um projeto para mim, eu comecei ele para estudar e simplesmente perguntei quem queria embarcar comigo nessa jornada, muitos entraram e pularam do barco, mas nada tira o tanto que aprendi nesse tempo com o projeto e como lidar com as pessoas, o projeto ainda está em andamento', image: './imageponto.svg' },
];




export default function MainApp() {
  const [isOn, setIsOn] = useState(false);

  const handleChange = (value: boolean) => {
      setIsOn(value);
  }
  return (
    <main>
      <section className='main01'>
        <div className = "left-side">
        <div className='welcome'>
        <h1 className='B'>B</h1>
        <h1 className='E'>E</h1>
        <h1 className='M'>M</h1>
        <h1 className='V'>V</h1>
        <h1 className='I'>I</h1>
        <h1 className='N'>N</h1>
        <h1 className='D'>D</h1>
        <h1 className='O'>O</h1>
        </div>
        
      <p className='mytext'>
        Sou um desenvolvedor Front-end adepto a ReactTS, 
        formado em técnico de desenvolvimento web e certificação em Azure Fundamentals.
        Além de ser programador, possuo interesse em inteligência artificial, marketing, e design.
        Amo jogos de estratégia como xadrez, sinto prazer em cozinhar.
        Minha meta de vida é sempre continuar 
        aprendendo e usar esses conhecimentos para impactar positivamente a sociedade.
      </p>
      <div className='button-changecolor'>
      <Button colors={['lightyellow', 'white']} value={isOn} onChange={handleChange}/>
      </div>
      </div>
      <div className="right-side">
        <img className = 'img' src="./public/raposa 00 1.svg" alt="" />
      </div>
      </section>
      
      <section className='main02'>
        <Carousel projects={projectList} /> 
      </section>

      
    </main>
  )
}

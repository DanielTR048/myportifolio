import styled from 'styled-components';
import HeaderApp from '../../Page/Header/header';
import MainApp from '../../Page/Main/mainApp';
import './sobre.css'


function About() {


    const Classe = styled.div`

        .main01{
            display: none;
        }
        .main02{
            display: none;
        }
    `

    const AboutCurri = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
        position: absolute;
        z-index: 99;
        top: 2%;
        
        .curriculum{
        position: relative;
        top: 20vh;
        left: 55%;
        width: 45vw;
        height: 150vh;
        z-index: 100;
        display: flex;
        flex-direction: row;
        gap: 3.5vw;
        }

        .curriculum-left{
        display: flex;
        flex-direction: column;
        width: 60%;
        
        }

        .curriculum-right{
        display: flex;
        flex-direction: column;
        width: 40%;
        }

        .curriculum-title{
        display: flex;
        flex-direction: column;
        height: 10%;
        width: auto;
        }

        .curriculum-content-profile{
        display: flex;
        flex-direction: column;
        height: 16%;
        width: auto;
        }

        .curriculum-content-experience{
        display: flex;
        flex-direction: column;
        height: 26%;
        width: auto;
        }

        .curriculum-content-Education{
        display: flex;
        flex-direction: column;
        height: 37%;
        width: auto;
        }

        .curriculum-details{
        display: flex;
        flex-direction: column;
        height: 13%;
        width: auto;
        }

        .curriculum-social-links{
        display: flex;
        flex-direction: column;
        height: 11%;
        width: auto;
        }
        .curriculum-hobbies{
        display: flex;
        flex-direction: column;
        height: 14%;
        width: auto;
        }
        .curriculum-languages{
        display: flex;
        flex-direction: column;
        height: 9%;
        width: auto;
        }
        .curriculum-skills{
        display: flex;
        flex-direction: column;
        height: 49%;
        width: auto;
        }

        .box-tittle{
            display: flex;
            flex-direction: row;
        }

        #tittle-text{
            font-weight: 600;
            font-size: 3vh;
        }

        #ajuste{
            padding-bottom: 3%;
        }

        #text-grey{
            color: lightgray;
            font-size: 2vh;
        }

        h6{
            font-weight: 600;
            font-size: 2.5vh;
        }

        .union{
            display: flex;
            flex-direction: column;
            margin-bottom: 3%;
        }

        .gray-letter{
            color: #A9A9A9;
            font-size: 2vh;
        }

        .tittle-body{
            font-size: 2vh;
            font-weight: 400;
        }

        .text-body-about{
            font-size: 1.7vh;
            margin: 0 0 0;
            text-align: justify;
        }

        .text-body-about-profile{
            font-size: 1.8vh;
            margin: 0 0 0;
            text-align: justify;
        }

        #img-top{
            width: 5vw;
            height: 5vw;
        }

        h6{
             font-family: 'Poppins';
        }

        p{
             font-family: 'Poppins';
        }

        .box-tittle-text{
            padding-left: 5%;
        }

        .progress-bar-languages{
            position: relative;
            background-color: lightgray;
            height: 10px;
            border-radius: 5px;
        }

        .progress-bar-languages-inside{
            position: absolute;
            height: 100%;
            background-color: blue;
            width: 70%;
            border-radius: 5px;
        }

        .progress-bar-skills{
            position: relative;
            background-color: lightgray;
            height: 10px;
            border-radius: 5px;
            margin-top: 0.7vh;
        }

        .progress-bar-skills-inside{
            position: absolute;
            height: 100%;
            background-color: blue;
            border-radius: 5px;
        }
        .union:nth-of-type(1) .progress-bar-skills .progress-bar-skills-inside {
            width: 65%;
        }

        .union:nth-of-type(2) .progress-bar-skills .progress-bar-skills-inside{
            width: 70%;
        }

        .union:nth-of-type(3) .progress-bar-skills .progress-bar-skills-inside {
            width: 60%;
        }

        .union:nth-of-type(4) .progress-bar-skills .progress-bar-skills-inside{
            width: 60%;
        }

        .union:nth-of-type(5) .progress-bar-skills .progress-bar-skills-inside {
            width: 87%;
        }

        .union:nth-of-type(6) .progress-bar-skills .progress-bar-skills-inside {
            width: 50%;
        }

        .union:nth-of-type(7) .progress-bar-skills .progress-bar-skills-inside {
            width: 60%;
        }

        .title-page-about-box{
            width: 30vw;
            position: relative;
            top: 17.5vh;
            left: 72%;
            text-align: center;
            background-color: #F1A20B;
            border-radius: 7px;
            box-shadow: #A9A9A9 0.2px 2px 0.5px 0.1px;

        }

        .title-page-about-letter{
            color: white;
            text-shadow: #A9A9A9 1px 1px 2px 5px;  
            font-size: 4.3vh;
        }
        
    `
    return (
        <>
            <HeaderApp></HeaderApp>
            <AboutCurri>

                    <div className='title-page-about-box'>
                       <h1 className='title-page-about-letter'> Curriculum Daniel </h1>
                    </div>
                    <div className='curriculum'>
                        <div className="curriculum-left">
                            <div className="curriculum-title">

                            <div className="box-tittle">
                                    <div className="img-left">
                                        <img id='img-top' src="./danielmoderno.svg" alt="" />
                                    </div>
                                        <div className="box-tittle-text">
                                            <h6 id='tittle-text'>Daniel Rosa</h6>
                                            <p id='text-grey'>Desenvolvedor front end</p> 
                                        </div>
                            </div>
                                
                            </div>
                            <div className="curriculum-content-profile">
                                <h6>Profile</h6>
                                <p className='text-body-about-profile'>Sou desenvolvedor web, tenho experiência trabalhando como
                                freelance e desenvolvendo e-commerce, tenho conhecimento
                                das seguintes linguagens: HTML, CSS, JS, TS, e do framework
                                ReactTS, tambem faço um estudo a parte de marketing digital,
                                tanto em tráfego quanto em viés cognitivo para
                                desenvolvimento web.
                                </p>
                            </div>
                            <div className="curriculum-content-experience">
                                <h6>Experience</h6>
                                <p className='tittle-body'>Confiança supermercados - Empacotador – Botucatu, São Paulo </p>
                                <p className='gray-letter'> 01/03/2019 – 31/10/2019 </p>
                                <p className='text-body-about'> Uma boa oportunidade de desenvolvimento social </p>
                                <p className='tittle-body'> Escola Jonas Alves - Estagiario TI – Botucatu, São Paulo </p>
                                <p className='gray-letter'> 02/08/2021 – 28/01/2022 </p>
                                <p className='text-body-about'> Uma experencia incrivel na area de ti, como suporte e tecnico </p>

                            </div>
                            <div className="curriculum-content-Education">
                                <h6>Formação</h6> 
                                <p className='tittle-body'>Faculdade galileu - Bacharelado em engenharia de computação</p>
                                <p className='gray-letter'>01/01/2019 - Em andamento</p>
                                <p className='text-body-about'>Foco em hardware e software, sendo eles eletronica, circuitos e materiais de computadores e aprendizado nas linguagens C, C++, Python, GO, banco de dados em Mysql</p>
                                <p className='tittle-body'>Senai - Curso técnico em informática para internet - desenvolvimento web</p>
                                <p className='text-body-about'>Foco em web design, utilizando as principais ferramentas como Figma, Lucidchart. Linguagens utilizadas Js, Java, com seus respectivos frameworks ReactJs, SpringBoot(java)</p>
                                <p className='gray-letter'>01/01/2021 - 02/05/2022</p>
                            </div>
                        </div>
                        <div className="curriculum-right">
                            <div className="curriculum-details">
                                <h6>Detalhes</h6>
                                <p className='text-body-about'>Residente em Botucatu São paulo, Natural brasileiro</p>
                                <p className='text-body-about'>Telefone: 14988197311</p>
                                <p className='text-body-about'>Email: danieltobiasrosa@hotmail.com</p>
                            </div>
                            <div className="curriculum-social-links">
                                <h6>Redes sociais</h6>
                                <a className='text-body-about' href='https://www.linkedin.com/in/danielrosa-a01644215'> www.linkedin.com/in/danielrosa-a01644215 </a>
                                <a className='text-body-about' href='https://www.instagram.com/programadorweb77/'> https://www.instagram.com/programadorweb77/ </a>
                            </div>
                            <div className="curriculum-hobbies">
                                <h6>Hobbies</h6>
                                <p className='text-body-about'>Tenho grande apreço pela livros, encontro na leitura e na escrita grande satisfação, deleito-me ao jogar xadrez, e sou um grande apreciador de novos sabores na gastronomia</p>
                            </div>
                            <div className="curriculum-languages">
                                <h6>Linguagens</h6>
                                <p className='text-body-about' id='ajuste'>Ingles</p>
                                <div className='progress-bar-languages'>
                                    <div className="progress-bar-languages-inside"></div>
                                </div>
                            </div>
                            <div className="curriculum-skills">
                                <h6>Habilidades</h6>
                                <div className="union">
                                <p className='text-body-about'>ReactTS</p>
                                <div className="progress-bar-skills">
                                    <div className="progress-bar-skills-inside"></div>
                                </div>
                                </div>
                                <div className="union">
                                <p className='text-body-about'>JavaScript</p>
                                <div className="progress-bar-skills">
                                <div className="progress-bar-skills-inside"></div>
                                </div>
                                </div>
                                <div className="union">
                                <p className='text-body-about'>MySql</p>
                                <div className="progress-bar-skills">
                                <div className="progress-bar-skills-inside"></div>
                                </div>
                                </div>
                                <div className="union">
                                <p className='text-body-about'>Design</p>
                                <div className="progress-bar-skills">
                                <div className="progress-bar-skills-inside"></div>
                                </div>
                                </div>
                                <div className="union">
                                <p className='text-body-about'>Html/Css</p>
                                <div className="progress-bar-skills">
                                <div className="progress-bar-skills-inside"></div>
                                </div>
                                </div>
                                <div className="union">
                                <p className='text-body-about'>UX e UI</p>
                                <div className="progress-bar-skills">
                                <div className="progress-bar-skills-inside"></div>
                                </div>
                                </div>
                                <div className="union">
                                <p className='text-body-about'>Marketing digital</p> 
                                <div className="progress-bar-skills">
                                <div className="progress-bar-skills-inside"></div></div>
                            </div>
                            </div>
                        </div>
                    </div>

            </AboutCurri>
            <Classe>
                <MainApp></MainApp>
            </Classe>
            
        </>

    )

}


export default About;
import styled from 'styled-components';
import HeaderApp from '../../Page/Header/header';
import MainApp from '../../Page/Main/mainApp';
import './sobre.css'


function About() {


    const Classe = styled.div`
        .main02{
            display: none;
        }
    `

    const AboutCurri = styled.div`
        position: absolute;
        z-index: 99;
        top: 2%;
        
        .curriculum{
        position: absolute;
        top: 0;
        left: 30%;
        width: 40vw;
        height: 95vh;
        z-index: 100;

        display: flex;
        flex-direction: row;
        }

        .curriculum-left{
        display: flex;
        flex-direction: column;
        width: 62%;
        }

        .curriculum-right{
        display: flex;
        flex-direction: column;
        width: 40%;
        }

        .curriculum-title{
        display: flex;
        flex-direction: column;
        height: 13%;
        width: auto;
        }

        .curriculum-content-profile{
        display: flex;
        flex-direction: column;
        height: 20%;
        width: auto;
        }

        .curriculum-content-experience{
        display: flex;
        flex-direction: column;
        height: 30%;
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
        height: 17.5%;
        width: auto;
        }

        .curriculum-social-links{
        display: flex;
        flex-direction: column;
        height: 13.5%;
        width: auto;
        }
        .curriculum-hobbies{
        display: flex;
        flex-direction: column;
        height: 11%;
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
    `
    return (
        <>
            <HeaderApp></HeaderApp>
            <AboutCurri>
                <div className='curriculum'>
                    <div className="curriculum-left">
                        <div className="curriculum-title"></div>
                        <div className="curriculum-content-profile"></div>
                        <div className="curriculum-content-experience"></div>
                        <div className="curriculum-content-Education"></div>
                    </div>
                    <div className="curriculum-right">
                        <div className="curriculum-details"></div>
                        <div className="curriculum-social-links"></div>
                        <div className="curriculum-hobbies">
                        </div>
                        <div className="curriculum-languages"></div>
                        <div className="curriculum-skills"></div>
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
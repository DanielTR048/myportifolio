import './footer.css'

function FooterApp() {

  return (
    <footer>
      <div className="container-footer">
        <div className="text">
          <h2 className='text-footer-tittle'>Meus agradecimentos</h2>
          <h5 className='text-footer'>Quero agradecer a todos que me ajudaram a trilhar esse caminho e que ainda continuam ajudando, 
            minha familia por ter me dado um lar aonde morar, meu irmão por ter me dado condições disso tudo ser possivel e por me fazer um homem melhor,
            minha irmã por acreditar em mim, meus amigos por me apoiarem, tudo isso fez ser quem
            eu sou hoje, obrigado pelo gesto de atenção, presente, ou uma lembrança que voce me deu, 
            a combinação desses fatores mostrou o caminho ao qual irei seguir. 
          </h5>
        </div>
        <div className="colaboradores">
          <h2 className="colaboradores-title">Participantes</h2>
          <div className="participantes">
            <div className="daniel">
              <h2>Daniel</h2>
              <img src="../public/danielviking.svg" alt="" />
              <h2>Web developer</h2>
              <div className="daniel-icons">
                <a href="https://wa.me/14988197311"><img id='whats-daniel' className='img-whats' src="./public/whats.svg" alt="" /></a>
                <a href="https://github.com/DanielTR048"><img id='git-daniel' className='img-git' src="./public/git.svg" alt=""/></a>
              </div>
            </div>
            <div className="bruce">
              <h2>Bruce</h2>
              <img src="../public/molde.svg" alt="" />
              <h2>Web developer</h2>
              <div className='bruce-icons'>
                <a href="https://wa.me/9992007523"><img id='whats-bruce' className='img-whats' src="./public/whats.svg" alt="" /></a>
                <a href="https://github.com/Bruc3W"><img id='git-bruce' className='img-git' src="./public/git.svg" alt=""/></a>
              </div>  
            </div>
          </div>
        </div>
        <div className="contatos-father">

          <div className="contatos">
            <h2 className='text-footer-right'>Contatos:</h2>
          </div>
    
          <div className="contatos">
            <a href="https://wa.me/14988197311"><img id='whats' className='img-whats' src="./public/whats.svg" alt="" /></a>
            <h2>Whatsapp</h2>
          </div>
          <div className="contatos">
            <a href="https://www.instagram.com/programadorweb77/?theme=dark"><img id='insta' className='img-insta' src="./public/insta.svg" alt="" /></a>
            <h2>Instagram</h2>
          </div>
          <div className="contatos">
            <a href="https://github.com/DanielTR048"><img id='git' className='img-git' src="./public/git.svg" alt=""/></a>
            <h2>Github</h2>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default FooterApp





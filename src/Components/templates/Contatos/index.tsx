import './contact.css'


function Contatos() {


    return (
        <>
       
        <div className='contato'>
            <section className='line-1'>
                <h1 className='tittle'>Contate-me</h1>
            </section>
            <section className='line-2'>
                {/* Botão github */}
                <a className='icon-git' href="https://github.com/DanielTR048"><img className='img-git' src="./public/git.svg" alt=""/></a>
                {/* Botão Whatsapp */}
                <a className='icon-whats' href="https://wa.me/14988197311"><img className='img-whats' src="./public/whats.svg" alt="" /></a>

                
            </section>
            <section className='line-3'>
                {/* Botão Instagram */}
                <a className='icon-insta' href="https://www.instagram.com/programadorweb77/?theme=dark"><img className='img-insta' src="./public/insta.svg" alt="" /></a>
                {/* Botão Linkedin */}
                <a className='icon-linkedin' href="https://www.linkedin.com/in/daniel-rosa-a01644215"><img className='img-linkedin' src="./public/linkedin.svg" alt="" /></a>
            </section>
            <section className='line-4'>
                <a className='icon-email' href=""><img className='img-email' src="./public/email.svg" alt="" /></a>
                <h4 className='text-email'>danieltobiasrosa@hotmail.com</h4>
            </section>

            <img className='img-post-office' src="./public/postbox.svg" alt="" />
           <a className='link-close-button' href="/"><img className='close-button' src="./public/close.svg" alt="" /></a>

           <div className='cellphone'>
           <a href="/"><img className='cell1' src="./public/navbarcel1.svg" alt="" /> </a> 
           <a href="/"><img className='cell2' src="./public/navbarcel2.svg" alt="" /> </a> 
           <a href="/"><img className='cell3' src="./public/navbarcel3.svg" alt="" /> </a> 
        </div>
        </div>



        </>
    )
}


export default Contatos;
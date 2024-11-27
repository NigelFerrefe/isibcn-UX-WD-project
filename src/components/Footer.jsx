import "./Footer.css";
import  callpic from "../assets/call.png"
import mailpic from "../assets/mail.png"
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          <div className="stores-container">
            <h1>¿Dónde Encontrarnos? </h1>
            <br />
            <div className="tienda-via-augusta">
              <h2>TIENDA VÍA AUGUSTA</h2>
              <p>Vía Augusta, 117 local D <br />
                08006 Barcelona <br /> 
                656 316 346</p>
            </div>
            <br />
            <div className="tienda-gracia">
              <h2>TIENDA GRACIA</h2>
              <p>Travessera de Gràcia 111 <br />
                08012 Barcelona <br />
                656 488 801</p>
            </div>
            <br />
            <div className="tienda-sarria">
              <h2>TIENDA SARRIÀ</h2>
              <p>
                Pg. Reina Elisenda de Montcada 10 <br />
                08034 Barcelona <br />
                695 342 649
              </p>
            </div>
            <br />
            <div className="contact-container">
              <h3>Contacto</h3>
              <br />
                
              <p><img className="call-icon" src={callpic} alt="" />+34 656 316 346</p>
              <br />
              <a className="mail-icon" href="mailto:info@isi-bcn.com"><img src={mailpic} alt="" />info@isi-bcn.com</a>
            <br />
            </div>
            <p className="developed">Developed by</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

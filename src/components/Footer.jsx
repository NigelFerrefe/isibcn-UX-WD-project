import "./Footer.css";
import callpic from "../assets/call.png";
import mailpic from "../assets/mail.png";
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
              <a
                className="tienda-augusta-link"
                href="http://surl.li/hdsior"
                target="blank"
              >
                Vía Augusta, 117 local D <br />
                08006 Barcelona <br />
                656 316 346
              </a>
            </div>
            <br />
            <div className="tienda-gracia">
              <h2>TIENDA GRACIA</h2>
              <a
                className="tienda-gracia-link"
                href="http://surl.li/llucgy"
                target="blank"
              >
                Travessera de Gràcia 111 <br />
                08012 Barcelona <br />
                656 488 801
              </a>
            </div>
            <br />
            <div className="tienda-sarria">
              <h2>TIENDA SARRIÀ</h2>
              <a
                className="tienda-sarria-link"
                href="http://surl.li/yeinjs"
                target="blank"
              >
                Pg. Reina Elisenda de Montcada 10 <br />
                08034 Barcelona <br />
                695 342 649
              </a>
            </div>
            <br />
            <div className="contact-container">
              <h3>Contacto</h3>
              <br />

              <p>
                <img className="call-icon" src={callpic} alt="" />
                +34 656 316 346
              </p>
              <br />
              <a className="email-container" href="mailto:info@isi-bcn.com">
                <img className="email-icon" src={mailpic} alt="" />
                info@isi-bcn.com
              </a>
              <br />
            </div>
            <div className="footer-copyright">
              <small className="copyright">
                © {new Date().getFullYear()} All Rights Reserved.
              </small>
              <small className="developed">
                Designed by Gabi, Laura, Leti, Isa & Mario
              </small>
              <small className="developed">Developed by Diego, Kara & Nigel</small>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

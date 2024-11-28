import "./Footer.css";
import callpic from "../assets/call.png";
import mailpic from "../assets/mail.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
            <h1>¿Dónde Encontrarnos? </h1>
          <div className="stores-container">
            <br />
            <div className="tienda-via-augusta">
              <h2>TIENDA VÍA AUGUSTA</h2>
              <br />
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
              <br />
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
              <br />
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
          </div>
            <br />
              <h3>Contacto</h3>
            <div className="contact-container">
              <br />

              <a href="tel:+34656316346" className="call-link">
                <img className="call-icon" src={callpic} alt="Call Icon" />
                +34 656 316 346
              </a>
              <br />
              <a className="email-container" href="mailto:info@isi-bcn.com">
                <img className="email-icon" src={mailpic} alt="" />
                info@isi-bcn.com
              </a>
              <br />
            </div>
            <div className="footer-copyright">
              <small className="developed">
                Designed by Gabi, Laura, Leti, Isa & Mario
              </small>
              <small className="developed">
                Developed by Diego, Kara & Nigel
              </small>
            </div>
              <small className="copyright">
                © {new Date().getFullYear()} All Rights Reserved.
              </small>
        </div>
      </footer>
    </>
  );
}

export default Footer;

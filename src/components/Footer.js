import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo1 from "../assets/logo1.jpg";
export default function Footer() {
  let iconStyles = { color: "black", size: "1em" };
  return (
    <>
      <div className="footer-section stack h">
        <img src={logo1} alt="restaurant logo" width="400" height="200"></img>
        <div className="nav-footer stack v g-3">
          <h2> Navigation</h2>
          <ul className="stack v g-2">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
            <li>
              <a href="">Reservations</a>
            </li>
            <li>
              <a href="">Order Online</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
          </ul>
        </div>

        <div className="contact-footer stack v g-4">
          <h2>Contact</h2>
          <p>Phone: 555-5555</p>
          <p>Email:mailto@littlelemon.com</p>
          <p>Location: 4679 Farland Street, Illinois, Chicago.</p>
        </div>

        <div className="socials stack v g-1">
          <h2>Socials</h2>
          <a href="https://www.instagram.com/">
            <FaInstagram style={iconStyles} />
          </a>
          <a href="https://www.facebook.com/">
            {" "}
            <FaFacebook style={iconStyles} />
          </a>
          <a href="https://x.com//">
            {" "}
            <FaTwitter style={iconStyles} />
          </a>
        </div>
      </div>
      <style jsx>{`
        .footer-section {
          grid-area: footer;
          min-width: 100%;
          font-family: Markazi Text;
          font-weight: 600;

          align-items: center;
          justify-content: space-evenly;
        }
        li a {
          color: black;
        }
        ul {
          list-style-type: none;
        }

        @media (max-width: 1440px) {
          .footer-section {
            width: 100%;
            flex-flow: row-reverse nowrap;
            text-align: center;
          }
          img {
            width: 300px;
            height: 200px;
          }
        }

        @media (max-width: 768px) {
          .footer-section {
            width: 100%;
            flex-flow: column wrap-reverse;
            align-items: center;
            justify-content: space-evenly;
            text-align: center;
          }
          img {
            width: 100%;
            height: 200px;
          }
          .nav-footer,
          .contact-footer,
          .socials {
            width: 100%;
            padding: 10px;
          }
        }
      `}</style>
    </>
  );
}

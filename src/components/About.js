import MarioandAdrianA from "../assets/MarioandAdrianA.jpg";
import chefb from "../assets/chefb.jpg";
export default function About() {
  return (
    <>
      <div className="about-section stack ">
        <div className="about-details">
          <h2 className="name"> Little Lemon</h2>
          <h3 className="place"> Chicago</h3>
          <p className="describe">
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            Restaurant features a locally sourced menu with daily specials.
          </p>
        </div>
        <div className="pictures stack h ">
          <img
            src={MarioandAdrianA}
            alt="Mario and Adrian"
            className="chefs image1"
          ></img>
          <img
            src={chefb}
            alt="Mario and Adrian"
            className="chefs image2"
          ></img>
        </div>
      </div>
      <style jsx>{`
        .about-section {
          grid-area: about;
          align-items: center;
          justify-content: space-evenly;
          min-width: 100%;
          background-color: #495e57;
        }
        .about-details {
          width: 20%;
        }
        .name {
          margin-bottom: 1rem;
          font-family: Markazi Text;
          font-weight: 500;
          font-size: 70px;
          color: #f4ce14;
          line-height: 0.1;
        }
        .place {
          font-family: Markazi Text;
          font-weight: 500;
          font-size: 53px;
          color: white;
          line-height: 0.1;
        }
        .describe {
          color: white;
          font-family: Karla;
          font-size: 21px;
        }
        .pictures {
          margin-top: 1rem;
          width: 30%;
          position: relative;
        }
        .chefs {
          margin-bottom: -5rem;
          width: 19vw;
          height: 45vh;
        }
        .image1 {
          border-radius: 16px;
        }
        .image2 {
          position: absolute;
          top: -4rem;
          right: -9rem;
          border-radius: 16px;
        }

        @media (max-width: 1440px) {
          .about-section {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            min-width: 100%;
          }
          .about-details {
            width: 60%;
          }
          .pictures {
            margin-top: 4rem;
            width: 45%;
            position: relative;
          }
          .chefs {
            margin-bottom: -5rem;
            width: 20vw;
            height: 60vh;
          }

          .image2 {
            position: absolute;
            top: -4rem;
            right: 6rem;
            border-radius: 16px;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            min-width: 100%;
          }
          .about-details {
            width: 100%;
          }
          .name {
            width: 100%;
          }

          .pictures {
            margin-top: 2rem;
            width: 50%;
            position: relative;
          }

          .chefs {
            width: 40vw;
          }

          .image2 {
            position: absolute;
            top: -2rem;
            right: -10rem;
            border-radius: 16px;
          }
        }
      `}</style>
    </>
  );
}

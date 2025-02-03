import restaurantfood from "../assets/restauranfood.jpg";
import { Link as LinkR } from "react-router";

export default function Hero() {
  return (
    <>
      <div className="hero-section">
        <div className="details">
          <h2 className="section-title"> Little Lemon</h2>
          <h3 className="sub-title"> Chicago</h3>
          <p className="text">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <LinkR to="/bookingpage" className="reserve-button">
            Reserve a Table
          </LinkR>
        </div>
        <div>
          <img
            src={restaurantfood}
            alt="food"
            className="food-restaurant"
          ></img>
        </div>
      </div>
      <style jsx>{`
        .hero-section {
          grid-area: hero;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 100%;
          background-color: #495e57;
          font-family: Markazi Text;
        }
        .details {
          width: 30%;
          margin-right: 1rem;
        }
        .section-title {
          margin-bottom: 1rem;
          font-weight: 500;
          font-size: 85px;
          color: #f4ce14;
          line-height: 0.1;
          text-align: left;
        }
        .sub-title {
          font-weight: 400;
          font-size: 53px;
          color: white;
          line-height: 0.1;
        }
        .text {
          font-family: Karla;
          font-weight: 400;
          font-size: 32px;
          color: white;
        }
        .food-restaurant {
          margin-bottom: -10rem;
          width: 300px;
          height: 350px;
          border-radius: 16px;
        }
        .reserve-button {
          text-decoration: none;
          background-color: #f4ce14;
          border-radius: 6px;
          color: black;
          cursor: pointer;
          display: inline-block;
          font-family: Markazi Text;
          font-size: 18px;
          font-weight: 600;
          margin: 12px;
          padding: 10px 35px;
          transition: all 0.15s ease-in-out;
        }
        .reserve-button:hover {
          background-color: #f4ce14;
          filter: brightness(80%);
          transform: translateY(4px);
        }

        @media (max-width: 1440px) {
          .hero-section {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            min-width: 100%;
          }
          .details {
            width: 60%;
          }
          .section-title {
            text-align: center;
          }
        }
        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column;
            text-align: center;
            width: 100%;
          }
          .details {
            width: 100%;
          }

          .section-title {
            margin-bottom: 1rem;
            font-weight: 500;
            font-size: 85px;
            color: #f4ce14;
            line-height: 0.1;
            text-align: center;
          }
          .sub-title {
            font-weight: 400;
            font-size: 53px;
            color: white;
            line-height: 0.1;
          }
          .text {
            font-weight: 400;
            font-size: 32px;
            color: white;
          }
          .food-restaurant {
            margin-bottom: -2rem;
          }
        }
      `}</style>
      ;
    </>
  );
}

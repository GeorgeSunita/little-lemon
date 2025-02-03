import { HighlightsCard } from "./HighlightsCard";
import bruchetta from "../assets/bruchetta.svg";
import greeksalad from "../assets/greeksalad.jpg";
import lemondessert from "../assets/lemondessert.jpg";

export default function Highlights() {
  const cards = [
    {
      image: `${greeksalad}`,
      title: "Greek Salad",
      price: "$12.99",
      description:
        "The famous greek salad of crispy lettuce,peppers, olives and our Chicago style feta cheese, garnished with  crunchy garlic and rosemary croutons.",
    },
    {
      image: `${bruchetta}`,
      title: "Bruchetta",
      price: "$5.99",
      description:
        "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      image: `${lemondessert}`,
      title: "Lemon Dessert",
      price: "$5",
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];

  return (
    <>
      <div className="highlights-section stack v">
        <div className="section-heading stack">
          <h2 className="heading"> Highlights</h2>
          <button className="order-button">Online Menu</button>
        </div>

        <div className="cards-container stack g-5">
          {cards.map(function (elem, i) {
            return (
              <HighlightsCard
                image={elem.image}
                title={elem.title}
                price={elem.price}
                description={elem.description}
                key={i}
              />
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .highlights-section {
          grid-area: highlights;
          align-items: center;
          justify-content: center;
          max-width: 100%;
        }
        .section-heading {
          width: 80%;
          justify-content: space-around;
          align-items: center;
          margin-bottom: 1rem;
        }
        .heading {
          margin-bottom: 1rem;
          font-family: Karla;
          font-weight: 700;
          font-size: 38px;
          line-height: 0.1;
        }

        .order-button {
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
        .order-button:hover {
          background-color: #f4ce14;
          filter: brightness(80%);
          transform: translateY(4px);
        }
        .cards-container {
          width: 70%;
          align-items: center;
          justify-content: space-evenly;
        }
        svg {
          width: 40px;
          height: 60px;
        }
        .price {
          color: red;
        }

        @media (max-width: 1440px) {
          .highlights-section {
            margin-top: 3rem;
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .cards-container {
            flex-direction: column;
            width: 100%;
            margin-top: 0;
          }
        }
      `}</style>
    </>
  );
}

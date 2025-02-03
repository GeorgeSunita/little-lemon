import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";
import { TestimonialCard } from "./TestimonialCard";

export default function Testimonials() {
  const cards = [
    {
      rating: "⭐⭐⭐⭐",
      image: `${person1}`,
      name: "Palesa",
      review:
        "Had a fantastic meal at Little Lemon! The food was fresh, flavorful, and beautifully presented - every dish was a delight.",
    },
    {
      rating: "⭐⭐⭐⭐⭐",
      image: `${person2}`,
      name: "Nick & Katie",
      review:
        "We really enjoyed Pizza Night at Little Lemon! The Pizzas were cooked perfectly, and the toppings were amazing! Delicious!Great wait staff, too, as always!",
    },
    {
      rating: "⭐⭐⭐⭐",
      image: `${person3}`,
      name: "Anjum",
      review:
        "The lemon dessert was excellent. Beautiful setting for food with friends. The atmosphere is lovely and staff were very friendly.",
    },
    {
      rating: "⭐⭐⭐⭐",
      image: `${person4}`,
      name: "Haruto",
      review:
        "The Little Lemon Restaurant is absolutely FANTASTIC, The atmosphere was warm and inviting, making it the perfect spot for a relaxed and enjoyable meal.",
    },
  ];
  return (
    <>
      <div className="testimonials-section">
        <div className="section-heading">
          <h2 className="heading"> Testimonials</h2>
        </div>

        <div className="cards-container stack">
          {cards.map(function (elem, i) {
            return (
              <TestimonialCard
                rating={elem.rating}
                image={elem.image}
                name={elem.name}
                review={elem.review}
                key={i}
              />
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .testimonials-section {
          grid-area: testimonials;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 100%;
        }
        .cards-container {
          width: 100%;
          align-items: center;
          justify-content: space-evenly;
        }

        @media (max-width: 1440px) {
          .testimonials-section {
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .cards-container {
            flex-direction: column;
            width: 100%;
            gap: 20px;
          }
        }
      `}</style>
    </>
  );
}

export const TestimonialCard = (props) => {
  return (
    <>
      <div className="testimonial-card stack v">
        <div>
          <img className="customer-pic" src={props.image}></img>
          <div className="rating stack">
            <h4>
              {" "}
              {props.name} {props.rating}
            </h4>
          </div>
        </div>

        <h4>Review</h4>
        <p className="review">{props.review} </p>
      </div>

      <style jsx>{`
        .testimonial-card {
          align-items: center;
          justify-content: center;

          flex: 0 1 15%;
          height: 38rem;
          overflow: hidden;
          background-color: #495e57;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
        .customer-pic {
          border-radius: 50%;
        }
        h4 {
          color: white;
        }
        .rating {
          align-items: center;
          justify-content: space-around;
        }
        .review {
          font-family: Karla;
          font-size: 21px;
          font-weight: 200;
          line-height: 1.1;
          width: 98%;
          color: white;
          text-align: left;
        }

        @media (max-width: 1440px) {
          .testimonial-card {
            flex: 0 1 23%;
            height: 38rem;
            overflow: hidden;
          }
          .customer-pic {
            width: 200px;
            height: 200px;
          }
        }

        @media (max-width: 768px) {
          .testimonial-card {
            flex: 0 1 10%;
            height: 18rem;
            overflow: hidden;
          }
        }
      `}</style>
    </>
  );
};

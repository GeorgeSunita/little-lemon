export const HighlightsCard = (props) => {
  return (
    <>
      <div className="highlights-card stack v">
        <img className="food-pic" alt="food image" src={props.image}></img>
        <div className="food-name">
          <h3 className="title">{props.title}</h3>
          <h3 className="price">{props.price}</h3>
        </div>
        <p className="para">{props.description}</p>
        <a className="order-link ">Order a delivery 🛵</a>
      </div>

      <style jsx>{`
        .highlights-card {
          align-items: center;
          justify-content: center;
          font-family: inherit;
          flex: 0 1 20%;
          height: 40rem;
          overflow: hidden;
          background-color: #495e57;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
        .food-pic {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .food-name {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .title {
          font-size: 24px;
          font-weight: 600;
          color: white;
          padding: 10px;
        }

        .para {
          font-family: Karla;
          font-size: 21px;
          font-weight: 200;
          line-height: 1.1;
          width: 98%;
          color: white;
          text-align: left;
        }
        .order-link {
          border-radius: 6px;
          color: #f4ce14;
          cursor: pointer;
          display: inline-block;
          font-family: inherit;
          font-size: 18px;
          font-weight: 600;
          padding: 10px;
          transition: all 0.15s ease-in-out;
          text-decoration: none;
        }
        .order-link:hover {
          background-color: #b4afa9;
          filter: brightness(80%);
          transform: translateY(4px);
        }
        .price {
          color: red;
        }

        @media (max-width: 1440px) {
          .highlights-card {
            flex: 0 1 50%;
          }
        }

        @media (max-width: 768px) {
          .highlights-card {
            padding: 20px;
            flex: 0 1 20%;
          }
        }
      `}</style>
    </>
  );
};

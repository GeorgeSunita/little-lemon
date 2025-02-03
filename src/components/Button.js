export const Button = (props) => {
  return (
    <>
      <a href={props.href}>{props.title}</a>
      <style jsx>{`
        a {
          background-color: #94948f;
          border-radius: 6px;
          color: white;
          cursor: pointer;
          display: inline-block;
          font-family: inherit;
          font-size: 18px;
          font-weight: 600;
          margin: 12px;
          padding: 10px 35px;
          transition: all 0.15s ease-in-out;
        }
        a:hover {
          filter: brightness(80%);
          transform: translateY(4px);
        }
        @media (min-width: 2100px) {
          a {
            font-size: px;
          }
        }
      `}</style>
    </>
  );
};

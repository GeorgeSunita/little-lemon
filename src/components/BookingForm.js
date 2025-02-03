import { submitAPI } from "./ApiCall";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function BookingForm(props) {
  const [dateValue, setDateValue] = useState("");
  const [guestsNumber, setGuestsNumber] = useState("");
  const [times, setTimes] = useState("");
  const [occasion, setOccasion] = useState("");

  localStorage.clear();
  let userData = {
    Date: dateValue,
    Time: times,
    Number: guestsNumber,
    Occasion: occasion,
  };
  localStorage.setItem("userInfo", JSON.stringify(userData));

  const handleChange = (e) => {
    setDateValue(e);
    props.dispatch(e);
  };
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((dateValue, times, guestsNumber, occasion !== "")) {
      submitAPI();
      navigate("/confirmbooking");
    }
  };

  return (
    <>
      <div className="booking-form-container stack v ">
        <h2 className="booking-title">Reserve a Table</h2>
        <form className="form-container stack v " onSubmit={handleSubmit}>
          <div className="field">
            <label for="res-date">DATE</label>
            <input
              value={dateValue}
              type="date"
              id="res-date"
              onChange={(e) => handleChange(e.target.value)}
              required={true}
            />
          </div>
          <div className="field">
            <label for="res-time">TIME</label>
            <select
              id="res-time"
              value={times}
              onChange={(e) => setTimes(e.target.value)}
              required
            >
              <option value="">Select a Time</option>
              {props.availableTimes.availableTimes.map((availableTimes) => {
                return <option key={availableTimes}>{availableTimes}</option>;
              })}
            </select>
          </div>

          <div className="Field">
            <label for="guests">NUMBER OF GUESTS</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              value={guestsNumber}
              onChange={(e) => setGuestsNumber(e.target.value)}
            />
          </div>

          <div className="Field">
            <label for="occasion">ANY OCCASSION</label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>
          <div className="Field">
            <input
              className="submit-button"
              aria-label="On Click"
              type={"submit"}
              value={"Make Your Reservation"}
            ></input>
          </div>
        </form>
      </div>

      <style jsx>
        {" "}
        {`
          .booking-form-container {
            height: 80vh;
            background-color: #495e57;
            align-items: center;
            justify-content: center;
          }
          .booking-title {
            font-size: 18px;
            font-weight: 800;
            text-transform: uppercase;
          }
          .form-container {
            justify-content: space-evenly;
            align-items: flex-start;
            flex-direction: column;
            gap: 15px;
          }
          input[type="text"],
          input[type="date"],
          input[type="number"],
          input[type="submit"],
          textarea {
            font-size: 20px;
            font-family: inherit;
            width: 20rem;
            height: 3rem;
            border-radius: 0.5rem;
            border: none;
            padding: 0.25rem 0.25rem;
          }
          input::placeholder {
            font-weight: bold;
            opacity: 0.5;
          }
          select {
            font-size: 20px;
            font-family: inherit;
            width: 20.3rem;
            height: 4rem;
            border-radius: 0.5rem;
            border: none;
            padding: 0.25rem 1rem;
          }
          input,
          label {
            display: block;
          }

          label {
            font-size: 20px;
            height: 2rem;
          }
          .submit-button {
            width: 100%;
            height: 3rem;
            text-decoration: none;
            background-color: #f4ce14;
            border-radius: 6px;
            color: black;
            cursor: pointer;
            display: block;
            font-family: Markazi Text;
            font-size: 22px;
            font-weight: 600;
            transition: all 0.15s ease-in-out;
          }
          .submit-button:hover {
            background-color: #f4ce14;
            filter: brightness(80%);
            transform: translateY(4px);
          }
        `}
      </style>
    </>
  );
}

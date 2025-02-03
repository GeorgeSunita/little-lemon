import { BrowserRouter as Router, Routes, Route } from "react-router";
import { useReducer } from "react";
import { useState } from "react";
import BookingPage from "./BookingPage";
import HomePage from "./HomePage";
import { fetchAPI } from "./ApiCall";
import ConfirmBooking from "./ConfirmBooking";

export const updateTimes = function (state, date) {
  return { availableTimes: fetchAPI(new Date(date)) };
};

export const initializeTimes = function () {
  return { availableTimes: fetchAPI(new Date()) };
};
export default function Main(props) {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <Routes>
         <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/bookingpage"
          element={
            <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
          }
        ></Route>
         <Route path="/confirmbooking" element={<ConfirmBooking />}></Route>
      </Routes>
    </>
  );
}

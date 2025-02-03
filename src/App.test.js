import BookingForm from "./components/BookingForm";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import App from "./App";
import { initializeTimes, updateTimes } from "./components/Main";
import { submitAPI, fetchAPI } from "./components/ApiCall";
test("Renders the Header heading", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const headingElement = screen.getByText("Reserve a Table");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes returns the correct expected value", () => {
  const date = new Date();
  const initialState = initializeTimes();
  const expectedResult = { availableTimes: fetchAPI(date) };
  expect(initialState).toEqual(expectedResult);
});

test("updateTimes returns the same state", () => {
  const date = new Date();
  const state = {
    availableTimes: fetchAPI(date),
  };

  const newState = updateTimes(state, date);
  expect(newState).toEqual(state);
});

test("submitAPI returns true", () => {
  const formData = {
    date: "2025-02-12",
    time: "19:00",
    guests: "4",
    occasion: "Anniversary",
  };
  const result = submitAPI(formData);
  expect(result).toBe(true);
});

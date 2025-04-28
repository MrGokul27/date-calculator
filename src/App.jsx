import React from "react";
import DateCalculator from "./components/DateCalculator";
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div style={{ paddingBottom: "2rem", fontFamily: "Arial, sans-serif" }}>
      <div className="">
        <h1 style={{ margin: "0" }}>Date Calculator</h1>
        <span>Days Between Two Dates</span>
      </div>
      <DateCalculator />
    </div>
  );
};

export default App;

import React, { useState } from "react";

const DateCalculator = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [daysResult, setDaysResult] = useState(null);
  const [monthsDaysResult, setMonthsDaysResult] = useState(null);

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // Format YYYY-MM-DD
  };

  const handleSetTodayStart = () => {
    setStartDate(getTodayDate());
  };

  const handleSetTodayEnd = () => {
    setEndDate(getTodayDate());
  };

  const calculateDifference = () => {
    if (!startDate || !endDate) return;

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (end < start) {
      alert("End date must be after start date");
      return;
    }

    // Number of days
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysResult(diffDays);

    // Months and days
    let months;
    months = (end.getFullYear() - start.getFullYear()) * 12;
    months -= start.getMonth();
    months += end.getMonth();

    const adjustedStart = new Date(start);
    adjustedStart.setMonth(adjustedStart.getMonth() + months);

    let extraDays = Math.floor((end - adjustedStart) / (1000 * 60 * 60 * 24));

    if (extraDays < 0) {
      months--;
      adjustedStart.setMonth(adjustedStart.getMonth() - 1);
      extraDays = Math.floor((end - adjustedStart) / (1000 * 60 * 60 * 24));
    }

    setMonthsDaysResult({ months, days: extraDays });
  };

  return (
    <div style={{ maxWidth: "400px", marginTop: "2rem" }}>
      <div style={{ marginBottom: "1rem" }}>
        <label>Start Date: </label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          style={{ marginLeft: "1rem", marginRight: "1rem" }}
        />
        <button onClick={handleSetTodayStart}>Today's Date</button>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>End Date: </label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          style={{ marginLeft: "1.9rem", marginRight: "1rem" }}
        />
        <button onClick={handleSetTodayEnd}>Today's Date</button>
      </div>

      <button onClick={calculateDifference} style={{ padding: "0.5rem 1rem" }}>
        Calculate
      </button>

      {daysResult !== null && (
        <div style={{ marginTop: "2rem" }}>
          <h3>Results:</h3>
          <p>
            <strong>Total Days:</strong> {daysResult} days
          </p>
          <p>
            <strong>Months and Days:</strong> {monthsDaysResult.months} months
            and {monthsDaysResult.days} days
          </p>
        </div>
      )}
    </div>
  );
};

export default DateCalculator;

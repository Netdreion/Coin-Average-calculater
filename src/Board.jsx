import React, { useState } from "react";
import "./App.css";

export default function Board() {
  const [exist, setExist] = useState(0);
  const [newCoin, setNewCoin] = useState(0);
  const [existAv, setExistAv] = useState(0);
  const [newAv, setNewAv] = useState(0);
  const [output, setOutput] = useState(0);

  const existCoinInput = (event) => {
    setExist(parseInt(event.target.value));
  };

  const newCoinInput = (event) => {
    setNewCoin(parseInt(event.target.value));
  };

  const existCoinAverage = (event) => {
    setExistAv(parseInt(event.target.value));
  };

  const newCoinAverage = (event) => {
    setNewAv(parseInt(event.target.value));
  };

  const outputField = () => {
    const totalCoin = exist + newCoin;
    const totalAv = existAv + newAv;
    const result = totalAv / totalCoin;
    setOutput(result);
  };

  return (
    <div>
      <h1>Average Calculator</h1>
      <h2>Add your credentials!</h2>
      <form>
        <input
          type="number"
          placeholder="Existing Coin"
          value={exist}
          onChange={existCoinInput}
        />
        <span />
        <input
          type="number"
          placeholder="Existing Average"
          value={existAv}
          onChange={existCoinAverage}
        />
        <br />
        <input
          type="number"
          placeholder="Added Coin"
          value={newCoin}
          onChange={newCoinInput}
        />
        <span />
        <input
          type="number"
          placeholder="Added Average"
          value={newAv}
          onChange={newCoinAverage}
        />
      </form>
      <button type="submit" onClick={outputField}>
        Calculate
      </button>
      <div>Total Coin Average: {output}</div>
    </div>
  );
}

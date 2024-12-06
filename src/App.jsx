import { useState } from "react";
import BillInput from "./components/BillInput";
import Feedbck from "./components/Feedback";

const ratings = [
  {
    value: 0,
    feedback: "Dissatisfied",
  },
  {
    value: 5,
    feedback: "It was okay!",
  },
  {
    value: 10,
    feedback: "It was good!",
  },
  {
    value: 20,
    feedback: "Absolutely Amazing!",
  },
];

export default function App() {
  const [amount, setAmount] = useState({
    bill: 0,
    myTip: 0,
    myFriendTip: 0,
    average: 0,
  });

  function setBillAmount(amount) {
    setAmount((currState) => {
      return { ...currState, bill: amount };
    });
  }

  function setMyTip(percent) {
    const calculatedTip = (percent / 100) * amount.bill;
    const calculatedAverge =
      amount.myFriendTip > 0
        ? (calculatedTip + amount.myFriendTip) / 2
        : calculatedTip;

    setAmount((currState) => {
      return { ...currState, myTip: calculatedTip, average: calculatedAverge };
    });
  }

  function setMyFriendTip(percent) {
    const calculatedTip = (percent / 100) * amount.bill;
    const calculatedAverge =
      amount.myTip > 0 ? (amount.myTip + calculatedTip) / 2 : calculatedTip;

    setAmount((currState) => {
      return { ...currState, myTip: calculatedTip, average: calculatedAverge };
    });
  }

  return (
    <div className="app">
      <BillInput onChangeFn={setBillAmount} />
      <Feedbck
        ratings={ratings}
        text="How did you like the service?"
        onChangeFn={setMyTip}
      />
      <Feedbck
        ratings={ratings}
        text="How did your friend like the service?"
        onChangeFn={setMyFriendTip}
      />
      {amount.bill > 0 && (
        <h3>
          You pay ${amount.bill + amount.average} (${amount.bill} + $
          {amount.average} tip)
        </h3>
      )}
    </div>
  );
}

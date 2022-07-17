import React, { useState, useContext } from "react";
import { myContext } from "./App";

export const FirstComponent = (props) => {
  const style = useContext(myContext);
  const [amount, setAmount] = useState(props.amount);

  return (
    <div>
      <button
        style={style}
        onClick={() => {
          setAmount(amount - 1);
        }}
      >
        -
      </button>
      <span>{amount}</span>
      <button style={style} onClick={() => setAmount(amount + 1)}>
        {" "}
        +{" "}
      </button>
    </div>
  );
};

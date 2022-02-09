import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

const normalizeCardNumber = (value) => {
  let x = value.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  let maskedText = !x[2]
    ? x[1]
    : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");

  return maskedText;
};

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          placeholder="0000 0000 0000"
          type="tel"
          inputMode="numeric"
          autoComplete="cc-number"
          name="cardNumber"
          id="cardNumber"
          onChange={(event) => {
            const { value } = event.target;
            event.target.value = normalizeCardNumber(value);
          }}
          // onChange={formatText}
          ref={register}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default App;

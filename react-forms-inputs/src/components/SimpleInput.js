import React, { useState } from "react";

const SimpleInput = (props) => {
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputNameIsValid, setInputNameIsValid] = useState(false);
  const [inputNameTouched, setInputNameTouched] = useState(false);
  // const inputNameRef = useRef();

  const inputNameChangeHandler = (e) => {
    setInputNameValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setInputNameTouched(true);

    if (inputNameValue.trim() === "") {
      setInputNameIsValid(false);
      return;
    }

    // const nameRefValue = inputNameRef.current.value;
    // console.log(nameRefValue);
    console.log(inputNameValue);

    setInputNameValue("");
  };

  const inputNameIsInvalid = !inputNameIsValid && inputNameTouched;

  const inputNameClasses = inputNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={inputNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={inputNameRef}
          type="text"
          id="name"
          onChange={inputNameChangeHandler}
          value={inputNameValue}
        />
      </div>
      {inputNameIsInvalid && (
        <p className="error-text">Name field must not be empty.</p>
      )}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

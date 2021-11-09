import React, { useState } from "react";

const SimpleInput = (props) => {
  const [inputNameValue, setInputNameValue] = useState("");
  // const inputNameRef = useRef();

  const inputNameChangeHandler = (e) => {
    setInputNameValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // const nameRefValue = inputNameRef.current.value;
    // console.log(nameRefValue);
    console.log(inputNameValue);

    setInputNameValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          // ref={inputNameRef}
          type="text"
          id="name"
          onChange={inputNameChangeHandler}
          value={inputNameValue}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

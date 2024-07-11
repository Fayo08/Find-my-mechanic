import React from "react";
import "./Formfields.scss";


function Formfields({ placeholder, label, value, id }) {
  return (
    <>
      <form className="formfields">
        <label htmlFor="textField" className="label">
     
          {label}
        </label>
        <input
          type="text"
          className="form-fields"
          id={id}
          value={value}
          placeholder={placeholder}
        />
      </form>
    </>
  );
}

export default Formfields;

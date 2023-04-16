import React from "react";
import "./form.style.scss";

const FormInput = ({ label, inputType, error, ...otherProps }) => {
  return (
    <div className="form-input">
      <div className="input">
        <input className={`input-field ${inputType}`} {...otherProps} />
      </div>
      <p>{error}</p>
    </div>
  );
};

export default FormInput;

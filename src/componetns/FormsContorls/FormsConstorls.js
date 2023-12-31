import React from "react";
import classes from "./FormsConstorls.module.css";

export const Textarea = ({ input, meta, ...props }) => {
  let hasError = meta && meta.touched && meta.error;
  return (
    <div className={`${classes.formControl} ${hasError ? classes.error : ""}`}>
      <div>
        <textarea {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
export const Input = ({ input, meta, ...props }) => {
  let hasError = meta && meta.touched && meta.error;
  return (
    <div className={`${classes.formControl} ${hasError ? classes.error : ""}`}>
      <div>
        <input {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

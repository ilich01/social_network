import { Navigate } from "react-router-dom";
import classes from "./Login.module.css";
import classesform from "../FormsContorls/FormsConstorls.module.css";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../FormsContorls/FormsConstorls";
import { required } from "../../utils/validator/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";

const Loginform = (props) => {
  return (
    <div className={classes.container}>
      <form onSubmit={props.handleSubmit} className={classes.form}>
        <Field
          name={"email"}
          placeholder="Email"
          className={classes.input}
          type="text"
          component={Input}
          validate={[required]}
        />
        <Field
          name={"password"}
          placeholder="Password"
          className={classes.input}
          type="password"
          id="password"
          component={Input}
          validate={[required]}
        />
        <div className={classes.rememberMe}>
          <Field
            name={"rememberMe"}
            type="checkbox"
            id={classes.rememberMe}
            className={classes.checkbox}
            component={Input}
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        {props.error && (
          <div className={classesform.formSummaryError}>{props.error}</div>
        )}

        <button id={classes.loginBtn}>Log in</button>
        {/* <a id={classes.forgotPassword} href="#">
          Forgotten password?
        </a> */}
        <button className={classes.create} id={classes.createAccountBtn}>
          Create new account
        </button>
      </form>
    </div>
  );
};
const LoginReduxForm = reduxForm({
  form: "login",
})(Loginform);
const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Navigate to="/profile" />;
  }
  return (
    <div>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);

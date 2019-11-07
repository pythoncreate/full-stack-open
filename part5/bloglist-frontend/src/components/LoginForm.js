import React from "react";
import PropTypes from "prop-types";

const LoginForm = ({ handleSubmit, username, password }) => {
  return (
    <div className="text-center">
      <form className="form-signin" onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputUser" className="sr-only">
          username
        </label>
        <input {...username.omitreset} className="form-control" />
        <label for="inputPassword" className="sr-only">
          password
        </label>
        <input {...password.omitreset} className="form-control" />

        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

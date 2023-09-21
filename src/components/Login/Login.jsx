import React, { useState } from "react";
<<<<<<< HEAD
import "./login.scss";

export default function Login() {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);
=======
import "./login.css";

export default function Login() {
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);
>>>>>>> 7c51c7f14f8014964427ab51c6d32dfe19a30f3c

  const toggleForms = () => {
    setLoginFormVisible(!isLoginFormVisible);
  };
<<<<<<< HEAD
  const [userFormsClass, setUserFormsClass] = useState("");

  // Function to handle "Sign Up" button click
  const handleSignUpClick = () => {
    setUserFormsClass("bounceRight");
  };

  // Function to handle "Login" button click
  const handleLoginClick = () => {
    setUserFormsClass("bounceLeft");
  };
=======

>>>>>>> 7c51c7f14f8014964427ab51c6d32dfe19a30f3c
  return (
    <>
      <section className="user">
        <div className="user_options-container">
          <div className="user_options-text">
            <div className="user_options-unregistered">
              <h2 className="user_unregistered-title">
                Don't have an account?
              </h2>
              <p className="user_unregistered-text">
                Banjo tote bag bicycle rights, High Life sartorial cray craft
                beer whatever street art fap.
              </p>
              <button
                className="user_unregistered-signup"
<<<<<<< HEAD
                onClick={handleSignUpClick}
=======
                onClick={toggleForms}
>>>>>>> 7c51c7f14f8014964427ab51c6d32dfe19a30f3c
              >
                Sign up
              </button>
            </div>

            <div className="user_options-registered">
              <h2 className="user_registered-title">Have an account?</h2>
              <p className="user_registered-text">
                Banjo tote bag bicycle rights, High Life sartorial cray craft
                beer whatever street art fap.
              </p>
<<<<<<< HEAD
              <button
                className="user_registered-login"
                onClick={handleLoginClick}
              >
=======
              <button className="user_registered-login" onClick={toggleForms}>
>>>>>>> 7c51c7f14f8014964427ab51c6d32dfe19a30f3c
                Login
              </button>
            </div>
          </div>

          <div
            className={`user_options-forms ${
              isLoginFormVisible ? "bounceLeft" : "bounceRight"
            }`}
          >
            {isLoginFormVisible ? (
              <div className="user_forms-login">
                <h2 className="forms_title">Login</h2>
                <form className="forms_form">
                  <fieldset className="forms_fieldset">
                    <div className="forms_field">
                      <input
                        type="email"
                        placeholder="Email"
                        className="forms_field-input"
                        required
                        autoFocus
                      />
                    </div>
                    <div className="forms_field">
                      <input
                        type="password"
                        placeholder="Password"
                        className="forms_field-input"
                        required
                      />
                    </div>
                  </fieldset>
                  <div className="forms_buttons">
                    <button type="button" className="forms_buttons-forgot">
                      Forgot password?
                    </button>
                    <input
                      type="submit"
                      value="Log In"
                      className="forms_buttons-action"
                    />
                  </div>
                </form>
              </div>
            ) : (
              <div className="user_forms-signup">
                <h2 className="forms_title">Sign Up</h2>
                <form className="forms_form">
                  <fieldset className="forms_fieldset">
                    <div className="forms_field">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="forms_field-input"
                        required
                      />
                    </div>
                    <div className="forms_field">
                      <input
                        type="email"
                        placeholder="Email"
                        className="forms_field-input"
                        required
                      />
                    </div>
                    <div className="forms_field">
                      <input
                        type="password"
                        placeholder="Password"
                        className="forms_field-input"
                        required
                      />
                    </div>
                  </fieldset>
                  <div className="forms_buttons">
                    <input
                      type="submit"
                      value="Sign up"
                      className="forms_buttons-action"
                    />
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
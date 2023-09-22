import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  return (
    <div className="container-login">
      <div className={`container ${isSignUp ? "right-panel-active" : ""}`}>
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="buttonn">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <Link className="buttonn" to="/dashboard">Sign In</Link>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div
              className={`overlay-panel overlay-left ${
                isSignUp ? "" : "overlay-right"
              }`}
            >
              <h1>{isSignUp ? "Hello, Friend!" : "Welcome Back!"}</h1>
              <p>
                {isSignUp
                  ? "Enter your personal details and start the journey with us"
                  : "To keep connected with us, please login with your personal info"}
              </p>
              <Link
                className="ghost buttonn"
                onClick={isSignUp ? handleSignInClick : handleSignUpClick}
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer></footer>
    </div>
  );
}

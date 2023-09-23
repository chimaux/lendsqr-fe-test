import React, { useState } from "react";
import logo from "../../images/logo.png";
import chatWiget from "../../images/chatWiget.png";
import "./login.scss";
import { UseGlobalContext } from "../../Context";

import { Sentry } from "react-activity";
import "react-activity/dist/library.css";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const { setIsLogged } = UseGlobalContext();

  // USERNAME STATE STARTS HERE

  const [username, setUsername] = useState<string>("");
  // USER NAME STATE ENDS HERE

  // PASSWORD STATE STARTS HERE
  const [password, setPassword] = useState<string>("");
  // PASSWORD STATE ENDS HERE

  // SHOW PASSWORD STATE STARTS HERE
  const [showPassword, setShowPassword] = useState<boolean>(false);
  // SHOW PASSWORD STATE ENDS HERE

  // ISFOCUSED STATE STARTS HERE
  const [isFocused, setIsFocused] = useState<string[]>([]);
  // ISFOCUSED STATE ENDS HERE

  // ISFOCUSED STATE STARTS HERE
  const [activityIndicator, setActivityIndicator] = useState<boolean>(false);
  // ISFOCUSED STATE ENDS HERE

  // EMAIL IS VALID STARTS HERE
  const [isValidEmail, setIsValidEmail] =  useState<boolean>(true);
  // EMAIL IS VALID ENDS HERE


// VALIDATE EMAIL FUNCTION STARTS HERE
const validateEmail = (email: string) => {
  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
// VALIDATE EMAIL FUNCTION ENDS HERE

// EMAIL INPUT HANDLE STARTS HERE
const emailHandler =(e:React.ChangeEvent<HTMLInputElement>) =>{
  const newEmail = e.target.value;
   setUsername(newEmail)
   
}
// EMAIL INPUT HANDLER ENDS HERE

  const handleFocus = (index: string) => {
    if (!isFocused.includes(index)) {
      setIsFocused([...isFocused, index]);
    }
  };

  const handleBlur = (index: string) => {
    if (isFocused.includes(index)) {
      setIsFocused(isFocused.filter((item) => item !== index));
      if (username){
        setIsValidEmail(validateEmail(username));
      }
    }
  };

  // LOGIN FUNCTION
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("Username:", username);
    // console.log("Password:", password);
    if (isValidEmail) {
      setActivityIndicator((prev)=>!prev);
      // SIMULATING LOGING DELAY
      setTimeout(() => {
        setActivityIndicator((prev)=>!prev);
        setIsLogged(true)
      }, 3000);
    }

  };

  return (
    <div className="container">
      <div className="chat">
        <a href="#">
          <img src={chatWiget} alt="chat" />
        </a>
      </div>

      {/* LOGO STARTS HERE */}
      <Link to="/dashboard">
            <div className="logoDiv">
        <img src={logo} alt="lendsqr" className="logo" />
      </div>
      </Link>

      {/* LOGO ENDS HERE */}

      <div className="mainDiv">
        {/* BACKGROUND IMAGE STARTS HERE */}
        <div className="bigImage"></div> 
        {/* BACKGROUND IMAGE ENDS HERE */}

        {/* FORM STARTS HERE */}
        <div className="formDiv">
          <div className="formSubContainer">
      
            <span className="welcome">Welcome!</span>
            <p className="details">Enter details to login.</p>
            {!isValidEmail ? <div className="emailError"><p>Please enter a valid email address.</p></div>
          :  
          <div className="emailGood"><p>Please enter a valid email address.</p></div>
          }
            <form onSubmit={handleSubmit}>
              {/* EMAIL INPUT */}
              <div
                className={`loginInput1 ${
                  isFocused.includes("1") ? "focus" : "blur"
                }`}
                onFocus={() => handleFocus("1")}
                onBlur={() => handleBlur("1")}
              >
                <input
                  type="email"
                  placeholder="Email"
                  className="loginInput2"
                  value={username}
                  onChange={emailHandler}
                  required
                />
              </div>
              {/* PASSWORD INPUT */}
              <div
                className={`loginInput1 ${
                  isFocused.includes("2") ? "focus" : "blur"
                }`}
                onFocus={() => handleFocus("2")}
                onBlur={() => handleBlur("2")}
              >
                <input
                  type={showPassword == true ? "text" : "password"}
                  placeholder="Password"
                  className="loginInput2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  className="show"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword === false ? "show" : "hide"}
                </span>
              </div>

              <div className="forgot">
                <a href="#">Forgot password?</a>
              </div>

              <button type="submit" className="loginButton ">
                {
                    activityIndicator === false ?  "LOG IN"
                      : 
                    <Sentry animating={activityIndicator} />
                }
       
              </button>
            </form>
          </div>
        </div>
        {/* FORM ENDS HERE */}
      </div>
    </div>
  );
};

export default Login;

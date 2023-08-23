import React, { useState } from 'react'
import logo from './images/logo.png'
import './login.scss'





const Login : React.FC = ()=> {



// USERNAME STATE STARTS HERE


  const [username, setUsername]= useState<string>('');
// USER NAME STATE ENDS HERE

// PASSWORD STATE STARTS HERE
  const [password, setPassword]= useState<string>('');
// PASSWORD STATE ENDS HERE

// SHOW PASSWORD STATE STARTS HERE
const [showPassword, setShowPassword]= useState<boolean>(false);
// SHOW PASSWORD STATE ENDS HERE

// ISFOCUSED STATE STARTS HERE


const [  isFocused, setIsFocused]= useState<string[]>([]);
// ISFOCUSED STATE ENDS HERE





const handleFocus = (index:string) => {
  if (!isFocused.includes(index)) {
    setIsFocused([...isFocused, index]);
  }
};

const handleBlur = (index:string) => {
  if (isFocused.includes(index)) {
    setIsFocused(isFocused.filter((item) => item !== index));
  }
};



// LOGIN FUNCTION
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    // onLogin(username, password);
  };

  return (
  
    <div className='container'>

{/* LOGO STARTS HERE */}
<div className='logoDiv'>
<img src={logo} alt="lendsqr" className='logo'/>
</div>
{/* LOGO ENDS HERE */}

<div className='mainDiv'>
{/* BACKGROUND IMAGE STARTS HERE */}
<div className='bigImage'>
  {/* BACKGROUND IMAGE ENDS HERE */}
</div>

{/* FORM STARTS HERE */}
<div className='formDiv'>
  <div className='formSubContainer'>
  <span className='welcome'>Welcome!</span>
  <p className='details'>Enter details to login.</p>

<form onSubmit={handleSubmit}>
{/* EMAIL INPUT */}
  <div className={`loginInput1 ${ isFocused.includes("1") ? "focus": "blur"}`}
                  onFocus={() => handleFocus("1")}
                  onBlur={() => handleBlur("1")}
  >
    <input 
    type="text" 
    placeholder='Email' 
    className='loginInput2' 
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    />
  </div>
  {/* PASSWORD INPUT */}
  <div className={`loginInput1 ${ isFocused.includes("2") ? "focus": "blur"}`}
                  onFocus={() => handleFocus("2")}
                  onBlur={() => handleBlur("2")}
  >
    <input 
    type={showPassword == true ? "text" : "password"}
    placeholder='Password' 
    className='loginInput2' 
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    
    />
    <span className='show'
    onClick={()=> setShowPassword((prev)=> !prev)}
    >{showPassword === false ? "show" : "hide"}</span>
  </div>

  <div className='forgot'>
  <a href="#">Forgot password?</a>
  </div>

  <button type="submit" className='loginButton ' >
  LOG IN
  </button>

  </form>

  </div>
</div>
{/* FORM ENDS HERE */}

</div>

    </div>

  )
}

export default Login
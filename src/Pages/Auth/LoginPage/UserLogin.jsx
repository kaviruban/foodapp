import React, { useState } from "react";
import "./Loginpage.css";
import { useNavigate } from "react-router-dom";




function Login() {

  const[userName , setUserName] = useState("");
  const[userPassword , setUserPassword] = useState("");

const HandleSubmit = (e) => {
  e.preventDefault();
  if(userName === "Admin" && userPassword === "1234567890"){
    // alert("Login Successfull");
    navigate("/home")
  }
  else{
    alert("Enter Valid Credentials !");
  }

}



  const navigate = useNavigate();
  return (
    <div className="parent-login-container">
      <h2>Login</h2>
      <div className="login-container">
        <form>
          <label htmlFor="">User Name</label>
          <input type="text" placeholder="Enter user Name"  onChange={(e) => {setUserName(e.target.value)}}/>
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Enter the password" onChange={(e) => {setUserPassword(e.target.value)}} />
        </form>
      </div>
      <div>
        <button className="auth-buttons" onClick={HandleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;







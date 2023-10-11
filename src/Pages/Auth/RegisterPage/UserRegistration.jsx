import React from "react";
import "./Registerpage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function UserRegistration() {
  const navigate = useNavigate();

  const[username , setUserName] = useState('');
  const[useremail , setUserEmail] = useState('');
  const[password , setPassword] = useState('');
  const[confirmpassword , setConfirmPassword] = useState('');
  const[name , setName] = useState('');
  
  return (
    <>
      <h2>Register</h2>
      <div className="register-container">
        <form>
          <label htmlFor="">User name</label>
          <input type="text" placeholder="Enter your name" value = {username} onChange={e => setName(e.target.value)} />
          <label htmlFor="">E-mail</label>
          <input type="text" placeholder="Enter your E-mail" value = {useremail} onChange={e => setUserEmail(e.target.value)} />
          <label htmlFor="">Password</label>
          <input type="text" placeholder="Enter your password " value = {password} onChange={e => setPassword(e.target.value)}/>
          <label htmlFor="">Confirm Password</label>
          <input type="password" placeholder="confirm your password" value={confirmpassword} onChange={e => setConfirmPassword(e.target.value)} />
        </form>
        <div>
          <button className="register-button" onClick={() => navigate("/")}>Register</button>
        </div>
      </div>
    </>
  );
}

export default UserRegistration;


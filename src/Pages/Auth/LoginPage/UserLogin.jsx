import React from "react";
import "./Loginpage.css";
import { useNavigate } from "react-router-dom";



function Login() {
  const navigate = useNavigate();
  return (
    <div className="parent-login-container">
      <h2>Login</h2>
      <div className="login-container">
        <form>
          <label htmlFor="">E-mail</label>
          <input type="text" placeholder="Your E-mail" />
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Enter the password" />
        </form>
      </div>
      <div>
        <button className="auth-buttons" onClick={() => navigate("/home")}>
          Login
        </button>
        <button className="auth-buttons" onClick={() => navigate("/register")}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Login;


// import React, { useState, useEffect } from "react";

// import basestyle from "../Base.module.css";
// import loginstyle from "./Loginpage.css";
// import axios from "axios";
// import { useNavigate, NavLink } from "react-router-dom";
// const Login = ({ setUserState }) => {
//   const navigate = useNavigate();
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const [user, setUserDetails] = useState({
//     email: "",
//     password: "",
//   });

//   const changeHandler = (e) => {
//     const { name, value } = e.target;
//     setUserDetails({
//       ...user,
//       [name]: value,
//     });
//   };
//   const validateForm = (values) => {
//     const error = {};
//     const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.email) {
//       error.email = "Email is required";
//     } else if (!regex.test(values.email)) {
//       error.email = "Please enter a valid email address";
//     }
//     if (!values.password) {
//       error.password = "Password is required";
//     }
//     return error;
//   };

//   const loginHandler = (e) => {
//     e.preventDefault();
//     setFormErrors(validateForm(user));
//     setIsSubmit(true);
//     // if (!formErrors) {

//     // }
//   };

//   useEffect(() => {
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(user);
//       axios.post("http://localhost:3000/", user).then((res) => {
//         alert(res.data.message);
//         setUserState(res.data.user);
//         navigate("/", { replace: true });
//       });
//     }
//   }, [formErrors]);
//   return (
//     <div className={loginstyle.login}>
//       <form>
//         <h1>Login</h1>
//         <input
//           type="email"
//           name="email"
//           id="email"
//           placeholder="Email"
//           onChange={changeHandler}
//           value={user.email}
//         />
//         <p className={basestyle.error}>{formErrors.email}</p>
//         <input
//           type="password"
//           name="password"
//           id="password"
//           placeholder="Password"
//           onChange={changeHandler}
//           value={user.password}
//         />
//         <p className={basestyle.error}>{formErrors.password}</p>
//         <button className={basestyle.button_common} onClick={loginHandler}>
//           Login
//         </button>
//       </form>
//       <NavLink to="/register">Not yet registered? Register Now</NavLink>
//     </div>
//   );
// };
// export default Login;

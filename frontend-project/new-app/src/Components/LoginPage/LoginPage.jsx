import { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import "./LoginPage.css";
import axios from "axios";

export default function LoginPage({ setshowlogin }) {
  const [currstate, setcurrstate] = useState("Login");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleClose = () => {
    setData({
      name: "",
      email: "",
      password: "",
    });
    setshowlogin(false);
  };

  useEffect(() => {
    setData({
      name: "",
      email: "",
      password: "",
    });
  }, [currstate]);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const url = "http://127.0.0.1:8000/api";

    try {
      if (currstate === "Sign Up") {
        const response = await axios.post(`${url}/register/`, {
          name: data.name,
          email: data.email,
          password: data.password,
        });
        alert(response.data.message);
        setcurrstate("Login");
      } else {
        const response = await axios.post(`${url}/login/`, {
          email: data.email,
          password: data.password,
        });

        if (response.data.success) {
          alert("Login Successfully");
          handleClose();
        } else {
          alert(response.data.message);
        }
      }
    } catch (error) {
      console.log("Error:", error.response?.data);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="login-page">
      <form className="login-page-container" onSubmit={onSubmit}>
        <div className="login-page-title">
          <h2>{currstate}</h2>

          <img onClick={handleClose} src={assets.cross_icon} alt="close" />
        </div>

        <div className="login-page-inputs">
          {currstate === "Sign Up" && (
            <input
              key="name-field"
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your name"
              autoComplete="new-name"
              required
            />
          )}
          <input
            key="email-field"
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            autoComplete="new-email"
            required
          />
          <input
            key="password-field"
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Your password"
            autoComplete="new-password"
            required
          />
        </div>

        <button type="submit">
          {currstate === "Sign Up" ? "Create account" : "Login"}
        </button>

        <div className="login-page-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>

        {currstate === "Login" ? (
          <p className="sign-p">
            Create a new account?
            <span onClick={() => setcurrstate("Sign Up")}> Click here</span>
          </p>
        ) : (
          <p className="login-p">
            Already have an account?
            <span onClick={() => setcurrstate("Login")}> Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

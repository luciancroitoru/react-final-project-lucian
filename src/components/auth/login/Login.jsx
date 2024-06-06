import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../App";

import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const [error, setError] = useState();

  async function login(event) {
    event.preventDefault();
    setError(null);

    const formElement = event.target;
    const { email, password } = formElement;

    const user = {
      email: email.value,
      password: password.value,
    };

    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const body = await response.json();

    if (response.status === 400) {
      setError(body);
      return;
    }

    if (response.ok) {
      localStorage.setItem("accessToken", body.accessToken);
      setAuth(body.accessToken);
      navigate("/");
    }
  }

  return (
    <>
    <div className="login-page-container">
    <h1 className="h1_login_page">Please log in with your credentials:</h1>
    <form onSubmit={login}>
      {error && <p className="error">{error}</p>}
      <div className="login-container">
        <fieldset>
          <label htmlFor="label_email_login">Email:</label>
          <input
            className="input_email_login"
            type="email"
            id="email"
            name="email"
            required
            minLength={5}
            maxLength={25}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="label_password_login">Password:</label>
          <input
            className="input_password_login"
            type="password"
            id="password"
            name="password"
            required
            maxLength={25}
          />
        </fieldset>
        <button className="login-button">Login</button>

        <Link to="/register" className="register-back-link">
          <button
            className="button_register_back_to_login"
            // onClick={handleBackClickRegister}
            >No account yet? Click me to register.
        </button>
        </Link>

        
        {/* <Link to="/" className="register-back-link">
          <button
            className="button_register_back_to_login"
            // onClick={handleBackClickRegister}
            >Click me to go back to main page.
        </button>
        </Link> */}
      </div>
    </form>
    </div>
    </>
  );
}

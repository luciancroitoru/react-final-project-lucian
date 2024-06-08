import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

export function Register() {
  const navigate = useNavigate();

  function register(event) {
    event.preventDefault();

    const formElement = event.target;
    const { email, username, first_name, last_name, password, reTypePassword } =
      formElement;

    if (password.value !== reTypePassword.value) {
      console.warn(`Passwords don't match!`);
      return;
    }

    const user = {
      email: email.value,
      username: username.value,
      password: password.value,
      first_name: first_name.value,
      last_name: last_name.value,
    };

    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(() => navigate("/login"));
  }

  return (
    <>
      <div className="register-page-container">
        <h1 className="h1_register_page">
          Please complete the form below to register:
        </h1>
        <form onSubmit={register} className="register-container">
          <fieldset className="username-container">
            <label className="label_username" htmlFor="username">
              Username:
            </label>
            <div className="input-username">
              <input
                className="input_username"
                type="text"
                id="username"
                name="username"
                required
                minLength={1}
                maxLength={20}
              />
            </div>
          </fieldset>

          <fieldset className="firstname-container">
            <label className="label_first_name" htmlFor="first_name">
              First Name:
            </label>
            <div className="input-first-name">
              <input
                className="input_first_name"
                type="text"
                id="first_name"
                name="first_name"
                required
                minLength={1}
                maxLength={20}
              />
            </div>
          </fieldset>

          <fieldset className="surname-container">
            <label htmlFor="label_last_name">Surname:</label>
            <div className="input-surname">
              <input
                className="input_last_name"
                type="text"
                id="last_name"
                name="last_name"
                required
                minLength={1}
                maxLength={20}
              />
            </div>
          </fieldset>

          <fieldset className="email-container">
            <label htmlFor="label_email">Email:</label>
            <div className="input-email">
              <input
                className="input_email"
                type="email"
                id="email"
                name="email"
                required
                minLength={5}
                maxLength={30}
              />
            </div>
          </fieldset>

          <fieldset className="password-container">
            <label htmlFor="label_password">Password:</label>
            <div className="input-password">
              <input
                className="input_password"
                type="password"
                id="password"
                name="password"
                required
                minLength={5}
                maxLength={30}
              />
            </div>
          </fieldset>

          <fieldset className="retype-password-container">
            <label htmlFor="label_reTypePassword">Re-type password:</label>
            <div className="input-retype-password">
              <input
                className="input_reTypePassword"
                type="password"
                id="reTypePassword"
                name="reTypePassword"
                required
                minLength={5}
                maxLength={30}
              />
            </div>
          </fieldset>

          <button className="button-register">Register</button>

          <Link to="/login" className="register-back-link">
            <button className="button_register_back_to_login">
              Go back to login
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}

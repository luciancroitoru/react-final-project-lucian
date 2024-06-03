import { useNavigate } from "react-router-dom";
import "./Register.css";

export function Register() {
     const navigate = useNavigate();
    function register(event) {
      event.preventDefault();
  
      const formElement = event.target;
      const { email, username, password, reTypePassword } = formElement;
  
      if (password.value !== reTypePassword.value) {
        console.warn(`Passwords don't match!`);
        return;
      }
  
      const user = {
        email: email.value,
        username: username.value,
        password: password.value,
      };
  
      fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(() => navigate('/login'));
    }
  
    return (
      <form onSubmit={register} className="register-container">

        <fieldset className="username-container">
          <label htmlFor="username">Username:</label>
          <div className="input-username">
            <input type="text" id="username" name="username" />
          </div>
        </fieldset>

        <fieldset className="firstname-container">
          <label htmlFor="username">First Name:</label>
          <div className="input-first-name">
            <input type="text" id="username" name="username" />
          </div>
        </fieldset>

        <fieldset className="surname-container">
          <label htmlFor="username">Surname:</label>
          <div className="input-surname">
            <input type="text" id="username" name="username" />
          </div>
        </fieldset>
  
        <fieldset className="email-container"> 
          <label htmlFor="email">Email:</label>
          <div className="input-email">
            <input type="email" id="email" name="email" />
          </div>
        </fieldset>
  
        <fieldset className="password-container">
          <label htmlFor="password">Password:</label>
          <div className="input-password">
            <input type="password" id="password" name="password" />
          </div>
        </fieldset>
  
        <fieldset className="retype-password-container">
          <label htmlFor="reTypePassword">Re-type password:</label>
          <div className="input-retype-password">
            <input type="password" id="reTypePassword" name="reTypePassword" />
          </div>
        </fieldset>
        <button className="button-register">Register</button>
      </form>
    );
  }
  
import handleSignup from "../../api/handleSignup";
import "./SignupForm.css";
import { errors } from "../../utils/errorLabels";
import { useState } from "react";
//For both sign up and login
export default function SignupForm() {
  const [error_lbl, setError_lbl] = useState(errors[""]);
  async function checkForm(FormData) {
    const password_input = FormData.get("password");
    const retype_password_input = FormData.get("retype_password");
    if (password_input !== retype_password_input) {
      //Set Label
      setError_lbl(errors["RETYPE_PASSWORD_LBL"]);
      return;
    } else {
      //Reset any errors that may be
      setError_lbl("");
    }

    handleSignup(FormData, setError_lbl);
  }

  return (
    <section className="signup-form-wrapper">
      <h1>Create Account</h1>
      <form action={checkForm}>
        <div className="form-input-signup">
          <label htmlFor="fullname">Full Name</label>
          <br />
          <input type="text" id="fullname" name="fullname" />
        </div>
        <div className="form-input-signup">
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" id="email" name="email"></input>
        </div>

        <div className="form-input-signup">
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" id="password" name="password" />
        </div>

        <div className="form-input-signup">
          <label htmlFor="retype_password">ReType Password</label>
          <br />
          <input type="password" id="retype_password" name="retype_password" />
          <p className="err_label">{error_lbl}</p>
        </div>
        <div className="form-input-signup">
          <input className="signup-btn" type="submit" value="Submit" />
          <p>
            Already have an account? <a href="">Login</a>
          </p>
        </div>
      </form>
    </section>
  );
}

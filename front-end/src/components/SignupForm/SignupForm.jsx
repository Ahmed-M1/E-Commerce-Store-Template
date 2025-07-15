import handleSignup from "../../api/handleSignup";
import "./SignupForm.css";
//For both sign up and login
export default function SignupForm() {
  return (
    <>
      <h1>SignUp</h1>
      <form action={handleSignup}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email"></input>
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />

        <label htmlFor="retype_password">ReType Password</label>
        <input
          type="retype_password"
          id="retype_password"
          name="retype_password"
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

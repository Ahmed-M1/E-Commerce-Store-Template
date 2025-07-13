import axios from "axios";
import validateFields from "../utils/validateData";
export default function handleSignup(FormData) {
  FormData.preventDefault();
  const email_input = FormData.get("email");
  const password_input = FormData.get("password");
  validateFields(email_input, password_input);
  //Now send data
  axios
    .post("http://localhost:8000/user/signup", {
      email: email_input,
      password: password_input,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

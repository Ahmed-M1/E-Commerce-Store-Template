import axios from "axios";
import validateFields from "../utils/validateData";
import { errors } from "../utils/errorLabels";
export default async function handleSignup(FormData, setError_lbl) {
  const full_name_input = FormData.get("fullname");
  const email_input = FormData.get("email");
  const password_input = FormData.get("password");
  validateFields(email_input, password_input);
  try {
    //Now send data
    const result = await axios.post("http://localhost:8000/signup", {
      full_name: full_name_input,
      email: email_input,
      password: password_input,
    });
    console.log(result.data);
    if (result.data.error) {
      setError_lbl(errors[result.data.error_label]);
    }
  } catch (e) {
    console.log("Unable to send data!");
  }
}

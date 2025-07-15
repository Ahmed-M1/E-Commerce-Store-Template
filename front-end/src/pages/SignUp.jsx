import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SignupForm from "../components/SignupForm/SignupForm";
export default function SignUp() {
  return (
    <>
      <Navbar />
      <SignupForm />
      <Footer />
    </>
  );
}

export default function validateSignUpData(email, password) {
  //Should not contain characters like
  const email_regex = new RegExp("^[^@]+@[^@]+.[^@]+$");
  const password_regex = new RegExp(
    "/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,16}$/"
  );
  if (!email_regex.test(email)) return false;
  if (!password_regex.test(password)) return false;

  return true;
}

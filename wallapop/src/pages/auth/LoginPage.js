import { login } from "../service";
import { Button } from "../../components/Button";
import { useState } from "react";
//import { useAuth } from "./context";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authLogin } from "../../store/actions";

export function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();
  //const { onLogin } = useAuth();
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [checkValue, setCheckValue] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await login(formValues, checkValue);
      //onLogin();
      dispatch(authLogin());
      const to = location.state?.from || "/auth/login";
      navigate(to, { replace: true });
    } catch (error) {}
  };

  const handleChange = (event) => {
    setFormValues((currentFormValues) => ({
      ...currentFormValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleCheckBox = (event) => {
    setCheckValue(event.target.checked);
  };

  const { email, password } = formValues;
  const buttonDisabled = !email || !password;
  return (
    <div>
      <h1>Log in to Nodepop</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          ></input>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            type="checkbox"
            name="checkbox"
            value="checkbox"
            onChange={handleCheckBox}
          ></input>
          <label>Keep accesToken for next session</label>
        </div>
        <Button type="submit" disabled={buttonDisabled}>
          Login
        </Button>
      </form>
    </div>
  );
}

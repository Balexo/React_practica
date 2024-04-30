import { login } from "../service";
import { Button } from "../../components/Button";
import { useState } from "react";

export function LoginPage({ onLogin }) {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const response = login({
      email,
      password,
    });
    onLogin();
  };

  const handleChange = (event) => {
    setFormValues((currentFormValues) => ({
      ...currentFormValues,
      [event.target.name]: event.target.value,
    }));
  };

  const { email, password } = formValues;
  const buttonDisabled = !email || !password;
  return (
    <div>
      <h1>Log in to Nodepop</h1>
      <form onSubmit={handleSubmit}>
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
        <Button type="submit" disabled={buttonDisabled}>
          Login
        </Button>
      </form>
    </div>
  );
}

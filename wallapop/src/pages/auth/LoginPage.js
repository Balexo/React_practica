import { login } from "../service";
import { Button } from "../../components/Button";
import { useState } from "react";

export function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    const response = login({
      email,
      password,
    });
    onLogin();
  };
  const buttonDisabled = !email || !password;
  return (
    <div>
      <h1>Log in to Nodepop</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <Button type="submit" disabled={buttonDisabled}>
          Login
        </Button>
      </form>
    </div>
  );
}

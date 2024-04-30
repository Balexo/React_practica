import { login } from "../service";
import { Button } from "../../components/Button";

export function LoginPage({ onLogin }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const response = login({
      email: event.target.email.value,
      password: event.target.password.value,
    });
    onLogin();
  };
  return (
    <div>
      <h1>Log in to Nodepop</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email"></input>
        <input type="password" name="password"></input>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}

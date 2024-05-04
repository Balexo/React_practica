import { Button } from "./Button";
import { useAuth } from "../pages/auth/context";
import { logout } from "../pages/service";
import { Link } from "react-router-dom";

function AuthButton({ className }) {
  const { isLogged, onLogout } = useAuth();
  const handleLogout = async () => {
    await logout();
    onLogout();
  };

  return isLogged ? (
    <Button onClick={handleLogout} className={className}>
      Logout
    </Button>
  ) : (
    <Button className={className} as={Link} to="/auth/login">
      Login
    </Button>
  );
}

export default AuthButton;

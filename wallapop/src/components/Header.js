import { ReactComponent as Icon } from "../assets/svgImage.svg";
import { Button } from "./Button";
import { logout } from "../pages/service";
import { useAuth } from "../pages/auth/context";

export default function Header() {
  const { isLogged, onLogout } = useAuth();
  const handleLogout = async () => {
    await logout();
    onLogout();
  };
  return (
    <header>
      <div>
        <div>
          <p>
            <Icon width={52} hegith={50} fill="blue" text="Wallapop" />
            Walla
          </p>
        </div>
        <nav>
          {isLogged ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <Button>Log in</Button>
          )}
        </nav>
      </div>
    </header>
  );
}

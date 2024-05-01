import "./App.css";
import AdvertsPage from "./pages/adverts/advertsPage";
import { useState } from "react";
import { LoginPage } from "./pages/auth/LoginPage";

function App({ isDefaultLogged }) {
  const [isLogged, setIsLogged] = useState(isDefaultLogged);

  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);
  return (
    <section>
      {isLogged ? (
        <AdvertsPage onLogout={handleLogout} isLogged={isLogged} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </section>
  );
}

export default App;

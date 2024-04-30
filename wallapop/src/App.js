import "./App.css";
import AdvertsPage from "./pages/adverts/advertsPage";
import { useState } from "react";
import { LoginPage } from "./pages/auth/LoginPage";

function App({ isDefaultLogged }) {
  const [isLogged, setIsLogged] = useState(isDefaultLogged);

  const handleLogin = () => setIsLogged(true);
  return (
    <section>
      {isLogged ? <AdvertsPage /> : <LoginPage onLogin={handleLogin} />}
    </section>
  );
}

export default App;

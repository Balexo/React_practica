import "./App.css";
import AdvertsPage from "./pages/adverts/advertsPage";
import { useState } from "react";
import { LoginPage } from "./pages/auth/LoginPage";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => setIsLogged(true);
  return (
    <section>
      {isLogged ? <AdvertsPage /> : <LoginPage onLogin={handleLogin} />}
    </section>
  );
}

export default App;

import { Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import AdvertsPage from "./pages/adverts/advertsPage";
import { LoginPage } from "./pages/auth/LoginPage";
import { useAuth } from "./pages/auth/context";
import RequireAuth from "./components/RequireAuth";
import AdvertPage from "./pages/AdvertPage";

function App() {
  //const { isLogged } = useAuth();
  //return <section>{isLogged ? <AdvertsPage /> : <LoginPage />}</section>;

  return (
    <Routes>
      <Route path="/auth/login" element={<LoginPage />} />
      <Route
        path="v1/adverts"
        element={
          <div className="container">
            <RequireAuth>
              <Outlet />
            </RequireAuth>
          </div>
        }
      >
        <Route index element={<AdvertsPage />} />
        <Route path=":advertId" element={<AdvertPage />} />
      </Route>
    </Routes>
  );
}

export default App;

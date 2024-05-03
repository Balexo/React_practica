import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context";

function RequireAuth({ children }) {
  const location = useLocation();
  const { isLogged } = useAuth();

  console.log(location);

  return isLogged ? (
    children
  ) : (
    <Navigate to="/auth/login" state={{ from: location.pathname }} replace />
  );
}

export default RequireAuth;

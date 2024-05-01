import Header from "./Header";
import Footer from "./Footer";
import { children } from "react";

export default function Layout({ children, onLogout, isLogged }) {
  return (
    <div>
      <Header onLogout={onLogout} isLogged={isLogged} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

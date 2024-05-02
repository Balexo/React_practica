import clsx from "clsx";
import { ReactComponent as Icon } from "../assets/svgImage.svg";
import AuthButton from "./AuthButton";

export default function Header({ className }) {
  return (
    <header className={clsx("header", className)}>
      <div className="header-logo">
        <div>
          <p>
            <Icon width={52} hegith={50} fill="blue" text="Wallapop" />
            Walla
          </p>
        </div>
        <nav className="header-nav">
          <AuthButton className="header-button"></AuthButton>
        </nav>
      </div>
    </header>
  );
}

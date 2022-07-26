import "./HeaderLogo.css";
import logo from "./React-icon.png";

export default function HeaderLogo() {
  return (
    <>
    <a href="/">
    <div className="header-logo">
     <img src={logo} alt="logo" />
      <h1>DevNews</h1>
    </div>
    </a>
     </>
  );
}

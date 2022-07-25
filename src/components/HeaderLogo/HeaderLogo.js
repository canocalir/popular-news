import './HeaderLogo.css';
import logo from './React-icon.png';

export default function HeaderLogo() {
  return (
    <div className="header-logo">
      <img src={logo} alt=""/>
        <h1>ReactNews</h1>
    </div>
  )
}

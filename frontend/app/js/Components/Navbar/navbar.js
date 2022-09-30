import React from "react";
import logo from './img/logo_transparent.png'
import style from './css/navbar.module.css';


class Navbar extends React.Component {
  
  render() {
    
    return (
      <nav className={style.nav}>
        <input type="checkbox" />
        <ul className={[style.menu, style.menuRight].join(' ')}>
          <li>
            <a className={style.navMenuA}>Hellu</a>
          </li>
          <li>
            <a className={style.navMenuA}>Hellu</a>
          </li>
          <li>
            <a className={style.navMenuA}>Hellu</a>
          </li>
        </ul>
        {/* end left nav */}
        <div>
          <img src={logo} width="260px" height="100px" alt="logo"/> 
        </div>
      <ul className={`${style.menu}`}>
        <li>
          <a className={style.navMenuA}>Hellu</a>
        </li>
        <li>
          <a className={style.navMenuA}>Hellu</a>
        </li>
        <li>
          <a className={style.navMenuA}>Hellu</a>
          </li>
        </ul>
        <label for="nav-mobile-toggle" class="nav-toggle-label">
            <span></span>
        </label>
        {/* end right nav */}
      </nav>
    );
  }
}
export default Navbar;
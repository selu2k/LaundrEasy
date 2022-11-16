import React from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import navLinks from "../../assets/dummy-data/navLinks";
import "./sidebar.css";
// import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';




const Sidebar = (Token) => {
  function logout() {
    localStorage.removeItem("token");
    window.history.replaceState({}, document.title, "/" + "settings");
    sessionStorage.clear();
    window.location.reload(false);

  }
  // console.log(Token.userid);
  var regex = new RegExp("^[0-9]{2}[A-Z]{3}[0-9]{4}$");
  var res = regex.test(Token.token);
  console.log(res);
  if (!res) {
    return (
      <div className="sidebar">
        <div className="sidebar__top">
          <h2>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 0 24 24" width="26"><path d="M0 0h24v24H0z" fill="none" /><path d="M9.17 16.83c1.56 1.56 4.1 1.56 5.66 0 1.56-1.56 1.56-4.1 0-5.66l-5.66 5.66zM18 2.01L6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-1.99-2-1.99zM10 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM7 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" fill="#f7f7f8" /></svg>
            </span>
            LaundrEasy
          </h2>
        </div>

        <div className="sidebar__content">
          <div className="menu">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink
                  to={navLinks[0].path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }>
                  <i className={navLinks[0].icon}></i>
                  {navLinks[0].display}
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to={navLinks[1].path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }>
                  <i className={navLinks[1].icon}></i>
                  {navLinks[1].display}
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to={navLinks[2].path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }>
                  <i className={navLinks[2].icon}></i>
                  {navLinks[2].display}
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to={navLinks[3].path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }>
                  <i className={navLinks[3].icon}></i>
                  {navLinks[3].display}
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to={navLinks[4].path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }>
                  <i className={navLinks[4].icon}></i>
                  {navLinks[4].display}
                </NavLink>
              </li>

            </ul>
          </div>

          <div className="sidebar__bottom">
            <span>
              <button onClick={logout}><i className="ri-logout-circle-r-line"></i> Logout</button>
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="sidebar">
        <div className="sidebar__top">
          <h2>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 0 24 24" width="26"><path d="M0 0h24v24H0z" fill="none" /><path d="M9.17 16.83c1.56 1.56 4.1 1.56 5.66 0 1.56-1.56 1.56-4.1 0-5.66l-5.66 5.66zM18 2.01L6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-1.99-2-1.99zM10 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM7 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" fill="#f7f7f8" /></svg>
            </span>
            LaundrEasy
          </h2>
        </div>

        <div className="sidebar__content">
          <div className="menu">
            <ul className="nav__list">
              
              <li className="nav__item">
                <NavLink
                  to={navLinks[5].path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }>
                  <i className={navLinks[5].icon}></i>
                  {navLinks[5].display}
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to={navLinks[6].path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }>
                  <i className={navLinks[6].icon}></i>
                  {navLinks[6].display}
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to={navLinks[7].path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }>
                  <i className={navLinks[7].icon}></i>
                  {navLinks[7].display}
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to={navLinks[8].path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }>
                  <i className={navLinks[8].icon}></i>
                  {navLinks[8].display}
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to={navLinks[9].path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }>
                  <i className={navLinks[9].icon}></i>
                  {navLinks[9].display}
                </NavLink>
              </li>

            </ul>
          </div>

          <div className="sidebar__bottom">
            <span>
              <button onClick={logout}><i className="ri-logout-circle-r-line"></i> Logout</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
};

export default Sidebar;

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { link } from "react-router";
import logo from "../images/pertamina.png";
import Icon from "@mdi/react";
import {
  mdiForwardburger,
  mdiDotsVertical,
  mdiChevronDown,
  mdiAccount,
  mdiCog,
  mdiEmail,
  mdiLogout,
} from "@mdi/js";
import "../css/main.css";

const NavbarTop = () => {
  return (
    <nav className="navbar is-fixed-top">
      <div className="navbar-brand">
        <a className="navbar-item is-hidden-desktop jb-aside-mobile-toggle">
          <span className="icon">
            <Icon path={mdiForwardburger} title="menu" size={1} />
          </span>
        </a>
        <div className="navbar-item has-control">
          <div className="control">
            <input placeholder="Search here" className="input has-text-dark" />
          </div>
        </div>
      </div>
      <div className="navbar-brand is-right">
        <a
          className="navbar-item is-hidden-desktop jb-navbar-menu-toggle"
          data-target="navbar-menu"
        >
          <span className="icon">
            <Icon path={mdiDotsVertical} title="more-icon" size={1} />
          </span>
        </a>
      </div>
      <div className="navbar-menu fadeIn animated faster" id="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item has-dropdown has-dropdown-with-icons has-divider has-user-avatar is-hoverable ">
            <a className="navbar-link is-arrowless ">
              <div className="is-user-avatar p-1 is-align-items-center is-inline-flex">
                <img src={logo} alt="John Doe" />
              </div>
              <div className="is-user-name">
                <span>John Doe</span>
              </div>
              <span className="icon pl-1">
                <Icon path={mdiChevronDown} title="ChevronDown" />
              </span>
            </a>
            <div className="navbar-dropdown">
              <a href="profile.html" className="navbar-item">
                <span className="icon-text is-align-items-center">
                  <span className="icon is-small">
                    <Icon path={mdiAccount} title="Profile" />
                  </span>
                  <span className="pl-1">My Profile</span>
                </span>
              </a>
              <a className="navbar-item">
                <span className="icon-text is-align-items-center">
                  <span className="icon is-small">
                    <Icon path={mdiCog} title="Settings" />
                  </span>
                  <span className="pl-1">Settings</span>
                </span>
              </a>
              <a className="navbar-item">
                <span className="icon-text is-align-items-center">
                  <span className="icon is-small">
                    <Icon path={mdiEmail} title="Messages" />
                  </span>
                  <span className="pl-1">Messages</span>
                </span>
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item">
                <span className="icon-text is-align-items-center">
                  <span className="icon is-small">
                    <Icon path={mdiLogout} title="Logout" />
                  </span>
                  <span className="pl-1">Log Out</span>
                </span>
              </a>
            </div>
          </div>
          <a title="Log out" className="navbar-item is-desktop-icon-only">
            <span className="icon is-small">
              <Icon path={mdiLogout} title="Logout" />
            </span>
            <span>Log out</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTop;

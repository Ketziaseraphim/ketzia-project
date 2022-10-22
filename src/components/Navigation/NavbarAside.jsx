import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router";
import logo from "../images/pertamina.png";
import Icon from "@mdi/react";
import { mdiLogout } from "@mdi/js";
import NavbarTop from "./NavbarTop";
import "../css/main.css";
import "../scss/main.scss";

const NavbarAside = () => {
  return (
    <div>
      <NavbarTop />
      <aside className="aside is-placed-left is-expanded">
        <div className="aside-tools">
          <div className="p-1 is-align-items-center is-inline-flex">
            <img
              src={logo}
              alt="Logo"
              width={35}
              height={35}
              className="pr-2"
            />
          </div>
          <div className="aside-tools-label">
            <span>
              <b>Pertashop</b> System
            </span>
          </div>
        </div>
        <div className="menu is-menu-main">
          <p className="menu-label">General</p>
          <ul className="menu-list">
            <li>
              <a href="index.html" className="has-icon">
                <span className="icon">
                  <i className="mdi mdi-desktop-mac"></i>
                </span>
                <span className="menu-item-label">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="index.html" className="has-icon">
                <span className="icon">
                  <i className="mdi mdi-desktop-mac"></i>
                </span>
                <span className="menu-item-label">Users</span>
              </a>
            </li>
            <li>
              <a href="index.html" className="has-icon">
                <span className="icon">
                  <i className="mdi mdi-desktop-mac"></i>
                </span>
                <span className="menu-item-label">Products</span>
              </a>
            </li>
          </ul>
          <p className="menu-label">Laporan</p>
          <ul className="menu-list">
            <li>
              <a href="tables.html" className="has-icon">
                <span className="icon">
                  <i className="mdi mdi-table"></i>
                </span>
                <span className="menu-item-label">Penjualan</span>
              </a>
            </li>
            <li>
              <a href="forms.html" className="has-icon">
                <span className="icon">
                  <i className="mdi mdi-square-edit-outline"></i>
                </span>
                <span className="menu-item-label">Penerimaan BBM</span>
              </a>
            </li>
            <li>
              <a href="profile.html" className="has-icon">
                <span className="icon">
                  <i className="mdi mdi-account-circle"></i>
                </span>
                <span className="menu-item-label">Pengeluaran</span>
              </a>
            </li>
            <li>
              <a className="has-icon has-dropdown-icon">
                <span className="icon">
                  <i className="mdi mdi-view-list"></i>
                </span>
                <span className="menu-item-label">Submenus</span>
                <div className="dropdown-icon">
                  <span className="icon">
                    <i className="mdi mdi-plus"></i>
                  </span>
                </div>
              </a>
              <ul>
                <li>
                  <a href="#void">
                    <span>Sub-item One</span>
                  </a>
                </li>
                <li>
                  <a href="#void">
                    <span>Sub-item Two</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default NavbarAside;

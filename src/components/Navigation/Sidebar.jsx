import React, { useState } from "react";
import CustomRouterLink from "./CustomRouterLink";
import logo from "../images/pertamina.png";
import NavbarTop from "./NavbarTop";
import "../css/main.css";
import "../scss/main.scss";
import "../css/style.css";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
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
          <ul className="menu-list mt-4">
            {SidebarData.map((val, index) => {
              return (
                <>
                  <CustomRouterLink
                    disableRoute={true}
                    to={val.link}
                    className="has-icon p-0 cursor-pointer"
                    key={index}
                  >
                    <li
                      onClick={val.subNav && showSubnav}
                      id={
                        window.location.pathname === val.link ? "is-active" : ""
                      }
                      className="p-4"
                    >
                      <div className="icon-text py-2">
                        <span className="icon">{val.icon}</span>
                        <span className="menu-item-label pl-2 pr-0">
                          {val.title}
                        </span>
                        <div className=" icon">
                          {val.subNav && subnav
                            ? val.iconOpened
                            : val.subNav
                            ? val.iconClosed
                            : null}
                        </div>
                      </div>
                      <ul>
                        {subnav &&
                          val.subNav.length &&
                          val.subNav.map((sub) => {
                            return (
                              <CustomRouterLink to={sub.link}>
                                {sub.icon}
                                <span className="menu-item-label pl-2 pr-0">
                                  {sub.title}
                                </span>
                              </CustomRouterLink>
                            );
                          })}
                      </ul>
                    </li>
                  </CustomRouterLink>
                </>
              );
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

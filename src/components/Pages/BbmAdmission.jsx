import React from "react";
import NavbarAside from "../Navigation/NavbarAside";
import Sidebar from "../Navigation/Sidebar";
import Icon from "@mdi/react";
import * as mdiIcons from "@mdi/js";

const BbmAdmission = () => {
  return (
    <div className="has-aside-left has-aside-mobile-transition has-navbar-fixed-top has-aside-expanded">
      <Sidebar />
      <div className="level mt-1">
        <div className="level-left">
          <div className="level-item column">
            <p className="is-size-5 pl-4 has-text-weight-semibold is-uppercase">
              Penerimaan BBM
            </p>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item column">
            <nav className="breadcrumb is-right" aria-label="user-breadcrumb">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li class="is-active">
                  <a href="#" aria-current="page">
                    Penerimaan
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <section className="is-main-section section">
        <div className="card has-table">
          <header className="card-header align-items-center my-2">
            <p className="card-header-title">
              <span className="icon">
                <Icon path={mdiIcons.mdiImport} />
              </span>
              Users
            </p>
            <div className="card-header">
              <div className="buttons is-right">
                <a
                  href="https://github.com/vikdiesel/admin-one-bulma-dashboard"
                  target="_blank"
                  className="button is-link"
                >
                  <span className="icon">
                    <Icon path={mdiIcons.mdiPlus} />
                  </span>
                  <span>Tambah Data</span>
                </a>
              </div>
            </div>

            <a href="#" className="card-header-icon">
              <span className="icon">
                <Icon path={mdiIcons.mdiReload} />
              </span>
            </a>
          </header>
          <div className="card-content">
            <div className="b-table has-pagination">
              <div className="table-wrapper has-mobile-cards">
                <table className="table is-fullwidth is-striped is-hoverable is-fullwidth">
                  <thead>
                    <tr>
                      <th className="is-checkbox-cell">
                        <label className="b-checkbox checkbox">
                          <input type="checkbox" value="false" />
                          <span className="check"></span>
                        </label>
                      </th>
                      <th>Tgl</th>
                      <th>Produk</th>
                      <th>No. SO</th>
                      <th>Jumlah Kiriman (lt)</th>
                      <th>Loss Stick (cm)</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="is-checkbox-cell">
                        <label className="b-checkbox checkbox">
                          <input type="checkbox" value="false" />
                          <span className="check"></span>
                        </label>
                      </td>

                      <td data-label="Created">
                        <small
                          className="has-text-grey is-abbr-like"
                          title="Oct 25, 2020"
                        >
                          Oct 25, 2020
                        </small>
                      </td>
                      <td data-label="produk">Pertamax</td>
                      <td data-label="noso">123456789</td>
                      <td data-label="jmlkirim">1000</td>
                      <td data-label="lossstik">2</td>

                      <td className="is-actions-cell">
                        <div className="buttons is-right">
                          <button
                            className="button is-small is-primary"
                            type="button"
                          >
                            <span className="icon">
                              <i className="mdi mdi-eye"></i>
                            </span>
                          </button>
                          <button
                            className="button is-small is-danger jb-modal"
                            data-target="sample-modal"
                            type="button"
                          >
                            <span className="icon">
                              <i className="mdi mdi-trash-can"></i>
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BbmAdmission;

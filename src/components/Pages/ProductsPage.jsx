import React from "react";
import Sidebar from "../Navigation/Sidebar";
import Icon from "@mdi/react";
import * as mdiIcons from "@mdi/js";

const ProductsPage = () => {
  return (
    <div className="has-aside-left has-aside-mobile-transition has-navbar-fixed-top has-aside-expanded">
      <Sidebar />
      <div className="level mt-1">
        <div className="level-left">
          <div className="level-item column">
            <p className="is-size-5 pl-4 has-text-weight-semibold is-uppercase">
              Produk
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
                    Produk
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
            <p className="card-header-title icon-text">
              <span className="icon mr-2">
                <Icon path={mdiIcons.mdiPackageVariant} />
              </span>
              Produk
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
                  <span>New Product</span>
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
                      <th></th>
                      <th>Name</th>
                      <th>Harga</th>
                      <th>Phone</th>

                      <th>Password</th>
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
                      <td className="is-image-cell">
                        <div className="image">
                          <img
                            src="https://avatars.dicebear.com/v2/initials/rebecca-bauch.svg"
                            className="is-rounded"
                          />
                        </div>
                      </td>
                      <td data-label="Name">Rebecca Bauch</td>
                      <td data-label="Company">Daugherty-Daniel</td>
                      <td data-label="City">South Cory</td>

                      <td data-label="Created">
                        <small
                          className="has-text-grey is-abbr-like"
                          title="Oct 25, 2020"
                        >
                          Oct 25, 2020
                        </small>
                      </td>
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

export default ProductsPage;

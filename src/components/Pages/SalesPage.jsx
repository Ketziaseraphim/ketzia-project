import React from "react";
import Sidebar from "../Navigation/Sidebar";
import Icon from "@mdi/react";
import * as mdiIcons from "@mdi/js";

const SalesPage = () => {
  return (
    <div className="has-aside-left has-aside-mobile-transition has-navbar-fixed-top has-aside-expanded">
      <Sidebar />
      <div className="level mt-1">
        <div className="level-left">
          <div className="level-item column">
            <p className="is-size-5 pl-4 has-text-weight-semibold is-uppercase">
              Penjualan
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
                  <a href="/penjualan" aria-current="page">
                    Penjualan
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
              <span className="icon mr-2">
                <Icon path={mdiIcons.mdiFinance} />
              </span>
              Penjualan
            </p>
            <div className="card-header">
              <div className="button is-right is-link">
                <span className="icon">
                  <Icon path={mdiIcons.mdiPlus} />
                </span>
                <span>Tambah Data</span>
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
              <div className="table-wrapper table-container has-mobile-cards">
                <table className="table is-fullwidth is-striped is-hoverable">
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
                      <th>Stok Awal</th>
                      <th>Ukuran Awal</th>
                      <th>Kiriman</th>
                      <th>Stok Akhir</th>
                      <th>Ukuran Akhir</th>
                      <th>T. Awal</th>
                      <th>T. Akhir</th>
                      <th>T. Total</th>
                      <th>Penjualan</th>
                      <th>Setoran(Rp.)</th>
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
                      <td data-label="sawal">1086.92</td>
                      <td data-label="ukawal">100</td>
                      <td data-label="kirim">1000</td>
                      <td data-label="sakhir">1597.34</td>
                      <td data-label="ukakhir">150</td>
                      <td data-label="totawal">42926.06</td>
                      <td data-label="totakhir">43415.64</td>
                      <td data-label="tottotal">489.58</td>
                      <td data-label="penjualan">489.58</td>
                      <td data-label="setoran">Rp.6,119,750</td>

                      <td className="is-actions-cell">
                        <div className="buttons is-right">
                          <button
                            className="button is-small is-primary"
                            type="button"
                          >
                            <span className="icon">
                              <Icon path={mdiIcons.mdiEye} />
                            </span>
                          </button>
                          <button
                            className="button is-small is-danger jb-modal"
                            data-target="sample-modal"
                            type="button"
                          >
                            <span className="icon">
                              <Icon path={mdiIcons.mdiTrashCan} />
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

export default SalesPage;

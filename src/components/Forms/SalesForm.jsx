import React, { useState } from "react";
import "../css/style.css";

const SalesForm = () => {
  return (
    <div className="mt-4 is-justify-content-center is-fullwidth columns">
      <div className="column is-three-fifths-desktop is-centered is-justify-content-center has-background-danger-light box tr-round">
        <div className="pt-5 ">
          <form>
            <div className="field column is-fullwidth">
              <label className="label">Produk</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select>
                    <option selected="true" value="" disabled="disabled">
                      Select
                    </option>
                    <option value="Pertamax">Pertamax</option>
                    <option value="Prod2">Produk 2</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="level is-fullwidth">
              <div className="level-left mb-1">
                <div className="level-item mb-0 mr-0 ">
                  <div className="field column">
                    <label className="label">Totalisator Awal</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        pattern="[0-9]+([\,|\.][0-9]+)?"
                        placeholder="11111.11"
                      />
                    </div>
                  </div>
                </div>
                <div className="level-item">
                  <div className="field column">
                    <label className="label">Totalisator Akhir</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        pattern="[0-9]+([\,|\.][0-9]+)?"
                        placeholder="99999.99"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="level is-mobile level-is-shrinkable">
              <div className="level-left">
                <div className="level-item mb-0 mr-0">
                  <div className="field column">
                    <label className="label">Stock Awal (Lt)</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        pattern="[0-9]+([\,|\.][0-9]+)?"
                        placeholder="1111.22 Liter"
                      />
                    </div>
                  </div>
                </div>
                <div className="level-item">
                  <div className="field column">
                    <label className="label">Stick Ukur (Cm)</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        pattern="[0-9]+([\,|\.][0-9]+)?"
                        placeholder="1111.22 cm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="level is-mobile level-is-shrinkable">
              <div className="level-left">
                <div className="level-item mb-0 mr-0">
                  <div className="field column">
                    <label className="label">Stock Akhir (Lt)</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        pattern="[0-9]+([\,|\.][0-9]+)?"
                        placeholder="1111.22 Liter"
                      />
                    </div>
                  </div>
                </div>
                <div className="level-item">
                  <div className="field column">
                    <label className="label">Stick Ukur (Cm)</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        pattern="[0-9]+([\,|\.][0-9]+)?"
                        placeholder="1111.22 cm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="field column mb-0 is-fullwidth">
              <label className="label ">Penjualan (Lt)</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  pattern="[0-9]+([\,|\.][0-9]+)?"
                  placeholder="1111.22 Liter"
                />
              </div>
            </div>

            <div className="field column is-fullwidth">
              <label className="label">Jumlah Setoran (Rp.)</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  pattern="[0-9]+([\,|\.][0-9]+)?"
                  placeholder="1111.22"
                />
              </div>
            </div>

            <div className="field column">
              <div className="control my-2">
                <button
                  type="submit"
                  className="button has-background-danger-dark 
                  has-text-white-ter is-fullwidth"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SalesForm;

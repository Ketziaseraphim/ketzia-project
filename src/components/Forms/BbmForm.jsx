import React, { useState } from "react";
import "../css/style.css";

const BbmForm = () => {
  return (
    <div className="mt-4 is-justify-content-center is-fullwidth columns">
      <div className="column is-three-fifths-desktop is-centered is-justify-content-center has-background-link-light box tr-round">
        <div className="pt-5 ">
          <form>
            <div className="field column is-fullwidth">
              <label className="label">Produk</label>
              <div className="control">
                <div className="select is-fullwidth ">
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

            <div className="field is-fullwidth column mb-3">
              <label className="label">No. SO</label>
              <div className="control">
                <input type="text" className="input" placeholder="1111.22" />
              </div>
            </div>

            <div className="field column is-fullwidth my-3">
              <label className="label">Jumlah Kiriman (Lt)</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  pattern="[0-9]+([\,|\.][0-9]+)?"
                  placeholder="1111.22 Liter"
                />
              </div>
            </div>

            <div className="field column is-fullwidth my-3">
              <label className="label">Loss Stick Kiriman (Cm)</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  pattern="[0-9]+([\,|\.][0-9]+)?"
                  placeholder="1111.22 cm"
                />
              </div>
            </div>

            <div className="field column my-3">
              <div className="control my-2">
                <button type="submit" className="button is-info is-fullwidth">
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

export default BbmForm;

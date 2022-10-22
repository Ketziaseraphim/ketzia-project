import React, { useState } from "react";
import "../css/style.css";

const ExpenseForm = () => {
  return (
    <div className="mt-4 is-justify-content-center is-fullwidth columns">
      <div className="column is-three-fifths-desktop is-centered is-justify-content-center has-background-success-light box tr-round">
        <div className="pt-5">
          <form>
            <div className="field column is-fullwidth">
              <label className="label">Pengeluaran</label>
              <div className="control">
                <textarea
                  className="textarea"
                  cols="50"
                  rows="10"
                  placeholder="Deskripsi pengeluaran disini"
                ></textarea>
              </div>
            </div>

            <div className="field column is-fullwidth">
              <label className="label">Total Pengeluaran</label>
              <div className="control">
                <input type="text" className="input" placeholder="1111.22" />
              </div>
            </div>

            <div className="field column is-fullwidth">
              <label className="label">Saldo Awal</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  placeholder="Rp.1,000,000,-"
                />
              </div>
            </div>

            <div className="field column">
              <div className="control my-5">
                <button
                  type="submit"
                  className="button is-success  is-fullwidth"
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

export default ExpenseForm;

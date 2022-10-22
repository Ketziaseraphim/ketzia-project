import React, { useEffect, useState } from "react";
import SalesForm from "./SalesForm";
import ExpenseForm from "./ExpenseForm";
import BbmForm from "./BbmForm";

const FormEmp = () => {
  const [form, setForm] = useState("pilihForm");

  const [SalesVisible, setSalesVisible] = useState(false);
  const [BbmVisible, setBbmVisible] = useState(false);
  const [ExpenseVisible, setExpenseVisible] = useState(false);

  useEffect(() => {
    form === "sales" ? setSalesVisible(true) : setSalesVisible(false);
    form === "penerimaan" ? setBbmVisible(true) : setBbmVisible(false);
    form === "expense" ? setExpenseVisible(true) : setExpenseVisible(false);
  }, [form]);

  const handleOnChange = (e) => {
    setForm(e.target.value);
  };

  return (
    <div className="hero is-fullheight">
      <div className=" is-justify-content-center">
        <div className="hero-head">
          <h1 className="title is-3 has-text-centered mt-5">Pengisian Form</h1>
          <div className="columns  is-justify-content-center">
            <div className="control mt-5 mx-3 column is-three-fifths-desktop is-align-items-center ">
              <div className="select is-medium is-fullwidth">
                <select value={form} onChange={handleOnChange}>
                  <option selected="true" value="pilihForm" disabled="disabled">
                    Pilih Form
                  </option>
                  <option value="sales">Form Penjualan</option>
                  <option value="penerimaan">Form Penerimaan BBM</option>
                  <option value="expense">Form Pengeluaran</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="p-0 is-justify-content-center is-centered column ">
          {SalesVisible && <SalesForm />}
          {BbmVisible && <BbmForm />}
          {ExpenseVisible && <ExpenseForm />}
        </div>
      </div>
    </div>
  );
};

export default FormEmp;

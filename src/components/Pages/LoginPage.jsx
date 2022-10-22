import React from "react";
import logo from "../images/pertamina.png";
import "../css/style.css";

const LoginPage = () => {
  return (
    <div className="hero is-fullheight">
      <div className="hero-body is-justify-content-center is-align-items-center has-background-warning-light">
        <div className="columns is-flex is-flex-direction-column box rounded p-6">
          <div className="level is-justify-content-center">
            <div className="level-left">
              <div className="level-item">
                <img src={logo} width={90} height={90} alt="logo pertamina" />
              </div>
              <div className="level-item">
                <h3 className="title is-3 is-align-items-center">PERTASHOP</h3>
              </div>
            </div>
          </div>

          <div className="column is-three-fifth ">
            <h1 className="has-text-centered title is-4">Selamat Datang!</h1>
            <h3 className="subtitle is-6 my-1 has-text-centered">
              Silahkan login untuk melanjutkan
            </h3>
          </div>
          <div className="column is-three-fifth">
            <input
              type="text"
              placeholder="Username"
              className="input is-primary"
            />
          </div>
          <div className="column">
            <input
              type="password"
              placeholder="Password"
              className="input is-primary"
            />
          </div>
          <div className="column">
            <button className="button is-primary is-fullwidth" type="submit">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import React, { useState } from "react";
// import PropTypes from 'prop-types';
import { TextField } from "@material-ui/core";

import "./register.scss";
import Select_Input_Mouth from "./components/SelectInputMouth";
import Select_Input_Day from "./components/SelectInputDay";

// Register.propTypes = {

// };

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(([event.target.name] = event.target.value));
  };

  const handleChangePassword = (event) => {
    setPassword(([event.target.name] = event.target.value));
  };

  const handleChangeFirstName = (event) => {
    setFirstName(([event.target.name] = event.target.value));
  };

  const handleChangeLastName = (event) => {
    setLastName(([event.target.name] = event.target.value));
  };

  return (
    <div className="main">
      <div className="container">
        <div className="register__main">
          <div className="register__inner">
            <div className="register__center">
              <div className="register">
                <div className="register__intro">
                  <span className="span-register">create account</span>
                  <br />
                  <span className="span-required">required*</span>
                  <form className="form-register" action="">
                    <div className="register__form">
                      <div className="name">
                        <div className="first-name">
                          <TextField
                            id="input-text-first-name"
                            label="Họ & Tên Lót"
                            value={firstName}
                            onChange={handleChangeFirstName}
                          />
                          <span className="error-input-first-name">
                            Không được để trống
                          </span>
                        </div>
                        <div className="last-name">
                          <TextField
                            id="input-text-last-name"
                            label="Tên"
                            value={lastName}
                            onChange={handleChangeLastName}
                          />
                          <span className="error-input-last-name">
                            Không được để trống
                          </span>
                        </div>
                      </div>
                      <div className="select-input">
                        <div className="select-input-mouth">
                          <Select_Input_Mouth />
                        </div>
                        <div className="select-input-day">
                          <Select_Input_Day />
                        </div>
                      </div>
                      <div className="form-username">
                        <TextField
                          id="input-text-username"
                          label="Địa chỉ Email"
                          value={email}
                          onChange={handleChangeEmail}
                        />
                        <span className="error-input-email">
                          Không được để trống
                        </span>
                      </div>
                      <div className="form-password">
                        <TextField
                          id="input-text-username"
                          label="Mật khẩu"
                          value={password}
                          onChange={handleChangePassword}
                          type="password"
                        />
                        <span className="error-input-password">
                          Không được để trống
                        </span>
                      </div>
                      <div className="register-button">
                        <button className="register__button" type="submit">
                          <span>Đăng nhập</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

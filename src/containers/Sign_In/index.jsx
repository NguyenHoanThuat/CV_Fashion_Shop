import React, { useState } from "react";
// import PropTypes from 'prop-types';
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import "./signIn.scss";

// Sign_In.propTypes = {

// };

function Sign_In() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(([event.target.name] = event.target.value));
  };

  const handleChangePassword = (event) => {
    setPassword(([event.target.name] = event.target.value));
  };

  return (
    <div className="main">
      <div className="container">
        <div className="login__main">
          <div className="login__inner">
            <div className="login__center">
              <div className="sign-in">
                <div className="sign-in__intro">
                  <span className="span-sign-in">sign in to your account</span>
                  <br />
                  <span className="span-required">required*</span>
                  <form className="form-sign-in" action="">
                    <div className="sign-in__form">
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
                      <div className="forgot-password">
                        <div className="forgot-password-center">
                          <Link className="forgot" to="/forgot-password">
                            <span>Quên mật khẩu?</span>
                          </Link>
                        </div>
                      </div>
                      <div className="sign-in-button">
                        <button className="login-button" type="submit">
                          <span>Đăng nhập</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="register">
                <div className="register__intro">
                  <span className="span-register">create an account</span>
                  <br />
                  <span>
                    Tạo một tài khoản để lưu những bộ váy yêu thích của bạn và
                    chia sẻ chúng với bạn bè!
                  </span>
                  <div className="create-account">
                    <div className="button-create-account">
                      <Link className="button-register" to="register">
                        <div className="button-register-center">
                          <span>Tạo một tài khoản mới</span>
                          <ArrowRightAltIcon />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign_In;

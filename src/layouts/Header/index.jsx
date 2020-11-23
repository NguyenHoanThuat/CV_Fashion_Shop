import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

import "./header.scss";

// Header.propTypes = {};

function Header() {
  return (
    <div className="main-header">
      <div className="container">
        <div className="header">
          <div className="logo">
            <div className="logo-center">
              <span className="logo-shop">sherri hill</span>
            </div>
          </div>
          <div className="main-menu">
            <div className="menu-center">
              <ul className="menu">
                <li className="li-menu collection">
                  <Link className="link-menu" to="">
                    <span>collection</span>
                  </Link>
                  <div className="menu--level--2">
                    <div className="menu--level--2--center">
                      <ul className="menu--collection">
                        <li className="list--menu--level--2">
                          <Link to="/collection">
                            <span className="text--menu--2">Collections</span>
                          </Link>
                          <ul className="menu--level--3">
                            <li className="level--3--item">
                              <Link to="/collection/1">
                                <span>Spring 2021</span>
                              </Link>
                            </li>
                            <li className="level--3--item">
                              <Link to="/collection/1">
                                <span>Fall 2020</span>
                              </Link>
                            </li>
                            <li className="level--3--item">
                              <Link to="/collection/1">
                                <span>Spring 2020</span>
                              </Link>
                            </li>
                            <li className="level--3--item">
                              <Link to="/collection/1">
                                <span>Fall 2019</span>
                              </Link>
                            </li>
                            <li className="level--3--item">
                              <Link to="/collection/1">
                                <span>Spring 2019</span>
                              </Link>
                            </li>
                            <li className="level--3--item">
                              <Link to="/collection/1">
                                <span>Fall 2018</span>
                              </Link>
                            </li>
                            <li className="level--3--item">
                              <Link to="/collection/1">
                                <span>Spring 2018</span>
                              </Link>
                            </li>
                            <li className="level--3--item">
                              <Link to="/collection/1">
                                <span>Fall 2017</span>
                              </Link>
                            </li>
                            <li className="level--3--item">
                              <Link to="/collection/1">
                                <span>Spring 2017</span>
                              </Link>
                            </li>
                            <li className="level--3--dash"></li>
                            <li className="level--3--item">
                              <Link to="/collection">
                                <span>All Collection</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="list--menu--level--2">
                          <Link to="/dresses">
                            <span className="text--menu--2">Dresses</span>
                          </Link>
                          <ul className="menu--level--3">
                            <li className="level--3--item">
                              <Link to="/dresses/1">
                                <span>Prom Dresses</span>
                              </Link>
                            </li>
                            <li className="level--3--item">
                              <Link to="/dresses/1">
                                <span>Homecoming</span>
                              </Link>
                            </li>
                            <li className="level--3--item">
                              <Link to="/dresses/1">
                                <span>Cocktail Dresses</span>
                              </Link>
                            </li>
                            <li className="level--3--item">
                              <Link to="/dresses/1">
                                <span>Couture</span>
                              </Link>
                            </li>
                            <li className="level--3--item">
                              <Link to="/dresses/1">
                                <span>Evening Dresses</span>
                              </Link>
                            </li>
                            <li className="level--3--dash"></li>
                            <li className="level--3--item">
                              <Link to="/dresses">
                                <span>All Dresses</span>
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="list--menu--level--2">
                          <Link to="/silhouettes">
                            <span className="text--menu--2">Silhouettes</span>
                          </Link>
                          <ul className="menu--level--3">
                            <li className="level--3--item">
                              <Link to="/silhouettes/1">
                                <span>A-Line</span>
                              </Link>
                            </li>
                            <li className="level--3--item">
                              <Link to="/silhouettes/1">
                                <span>Ball Gown</span>
                              </Link>
                            </li>
                            <li className="level--3--item">
                              <Link to="/silhouettes/1">
                                <span>Empirewaist</span>
                              </Link>
                            </li>
                            <li className="level--3--item">
                              <Link to="/silhouettes/1">
                                <span>Halter</span>
                              </Link>
                            </li>
                            <li className="level--3--item">
                              <Link to="/silhouettes/1">
                                <span>High Neckline</span>
                              </Link>
                            </li>
                            <li className="level--3--item">
                              <Link to="/silhouettes/1">
                                <span>Highslit</span>
                              </Link>
                            </li>
                            <li className="level--3--item">
                              <Link to="/silhouettes/1">
                                <span>Jumpsuit</span>
                              </Link>
                            </li>
                            <li className="level--3--item">
                              <Link to="/silhouettes/1">
                                <span>Longsleeves</span>
                              </Link>
                            </li>
                            <li className="level--3--item">
                              <Link to="/silhouettes/1">
                                <span>Mermaid</span>
                              </Link>
                            </li>
                            <li className="level--3--item">
                              <Link to="/silhouettes/1">
                                <span>Open Back</span>
                              </Link>
                            </li>
                            <li className="level--3--item">
                              <Link to="/silhouettes/1">
                                <span>Oneshoulder</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="list--menu--level--2">
                          <Link to="/jewelry">
                            <span className="text--menu--2">Jewelry</span>
                          </Link>
                        </li>
                      </ul>
                      {/* <div className="banner">
                        <div className="banner--center">
                          <img src={} alt="banner-img" />
                        </div>
                      </div> */}
                    </div>
                  </div>
                </li>
                <li className="li-menu fashion">
                  <Link className="link-menu" to="">
                    <span>fashion week</span>
                  </Link>
                </li>
                <li className="li-menu brand">
                  <Link className="link-menu" to="">
                    <span>the brand</span>
                  </Link>
                </li>
                <li className="li-menu find-store">
                  <Link className="link-menu" to="">
                    <span>find a store</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-icon">
            <div className="header-icon-center">
              <div className="icon-header icon-search">
                <SearchIcon />
              </div>
              <div className="icon-header icon-login">
                <Link className="link-menu" to="/home">
                  <PermIdentityIcon />
                </Link>
                <div className="login-center">
                  <div className="user-login">
                    <Link className="link-menu" to="/home">
                      <span>sign in</span>
                    </Link>
                    <div className="between"></div>
                    <Link className="link-menu" to="/home">
                      <span>register</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="icon-header icon-love">
                <FavoriteBorderIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

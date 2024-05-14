import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="layout-navbar shadow bg-white rounded">
        <div className="container">
          <div className="navbar navbar-expand-lg landing-navbar px-3 px-md-4 ">
            {/* Menu logo wrapper: Start */}
            <div className="navbar-brand app-brand demo d-flex py-0 me-4">
              {/* Mobile menu toggle: Start*/}
              <button
                className="navbar-toggler border-0 px-0 me-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="tf-icons bx bx-menu bx-sm align-middle" />
              </button>
              {/* Mobile menu toggle: End*/}

              <Link to="/">
              <a
                href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/front-pages/landing"
                className="app-brand-link"
              >
                

            <img
              className="logo-light"
              src="img/ls.png"
              alt="logo"
              style={{ width: "200px" }}
            />
              </a>
              </Link>
            </div>
            {/* Menu logo wrapper: End */}
            {/* Menu wrapper: Start */}
            <div
              className="collapse navbar-collapse landing-nav-menu"
              id="navbarSupportedContent"
            >
              <button
                className="navbar-toggler border-0 text-heading position-absolute end-0 top-0 scaleX-n1-rtl"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="tf-icons bx bx-x bx-sm" />
              </button>
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a
                    className="nav-link fw-medium active"
                    aria-current="page"
                    href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/front-pages/landing#landingHero"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fw-medium"
                    href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/front-pages/landing#landingFeatures"
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fw-medium"
                    href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/front-pages/landing#landingTeam"
                  >
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fw-medium"
                    href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/front-pages/landing#landingFAQ"
                  >
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fw-medium"
                    href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/front-pages/landing#landingContact"
                  >
                    Contact us
                  </a>
                </li>
                <li className="nav-item mega-dropdown ">
                  <a
                    href="javascript:void(0);"
                    className="nav-link dropdown-toggle navbar-ex-14-mega-dropdown mega-dropdown fw-medium"
                    aria-expanded="false"
                    data-bs-toggle="mega-dropdown"
                    data-trigger="hover"
                  >
                    <span>Pages</span>
                  </a>
                  <div className="dropdown-menu p-4">
                    <div className="row gy-4">
                      <div className="col-12 col-lg">
                        <div className="h6 d-flex align-items-center mb-2 mb-lg-3">
                          <div className="avatar avatar-sm flex-shrink-0 me-2">
                            <span className="avatar-initial rounded bg-label-primary">
                              <i className="bx bx-grid-alt" />
                            </span>
                          </div>
                          <span className="ps-1">Other</span>
                        </div>
                        {/* add page slug in $activeRoutes array, defined Beginning of the page to add active class to the nav item */}
                        <ul className="nav flex-column">
                          <li className="nav-item ">
                            <a
                              className="nav-link mega-dropdown-link"
                              href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/front-pages/pricing"
                            >
                              <i className="bx bx-radio-circle me-2" />
                              <span>Pricing</span>
                            </a>
                          </li>
                          <li className="nav-item ">
                            <a
                              className="nav-link mega-dropdown-link"
                              href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/front-pages/payment"
                            >
                              <i className="bx bx-radio-circle me-2" />
                              <span>Payment</span>
                            </a>
                          </li>
                          <li className="nav-item ">
                            <a
                              className="nav-link mega-dropdown-link"
                              href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/front-pages/checkout"
                            >
                              <i className="bx bx-radio-circle me-2" />
                              <span>Checkout</span>
                            </a>
                          </li>
                          <li className="nav-item ">
                            <a
                              className="nav-link mega-dropdown-link"
                              href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/front-pages/help-center"
                            >
                              <i className="bx bx-radio-circle me-2" />
                              <span>Help Center</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-12 col-lg">
                        <div className="h6 d-flex align-items-center mb-2 mb-lg-3">
                          <div className="avatar avatar-sm flex-shrink-0 me-2">
                            <span className="avatar-initial rounded bg-label-primary">
                              <i className="bx bx-lock-open" />
                            </span>
                          </div>
                          <span className="ps-1">Auth Demo</span>
                        </div>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a
                              className="nav-link mega-dropdown-link"
                              href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/auth/login-basic"
                              target="_blank"
                            >
                              <i className="bx bx-radio-circle me-2" />
                              Login (Basic)
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link mega-dropdown-link"
                              href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/auth/login-cover"
                              target="_blank"
                            >
                              <i className="bx bx-radio-circle me-2" />
                              Login (Cover)
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link mega-dropdown-link"
                              href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/auth/register-basic"
                              target="_blank"
                            >
                              <i className="bx bx-radio-circle me-2" />
                              Register (Basic)
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link mega-dropdown-link"
                              href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/auth/register-cover"
                              target="_blank"
                            >
                              <i className="bx bx-radio-circle me-2" />
                              Register (Cover)
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link mega-dropdown-link"
                              href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/auth/register-multisteps"
                              target="_blank"
                            >
                              <i className="bx bx-radio-circle me-2" />
                              Register (Multi-steps)
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link mega-dropdown-link"
                              href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/auth/forgot-password-basic"
                              target="_blank"
                            >
                              <i className="bx bx-radio-circle me-2" />
                              Forgot Password (Basic)
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link mega-dropdown-link"
                              href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/auth/forgot-password-cover"
                              target="_blank"
                            >
                              <i className="bx bx-radio-circle me-2" />
                              Forgot Password (Cover)
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link mega-dropdown-link"
                              href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/auth/reset-password-basic"
                              target="_blank"
                            >
                              <i className="bx bx-radio-circle me-2" />
                              Reset Password (Basic)
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link mega-dropdown-link"
                              href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/auth/reset-password-cover"
                              target="_blank"
                            >
                              <i className="bx bx-radio-circle me-2" />
                              Reset Password (Cover)
                            </a>
                          </li>
                        </ul>

                      </div>
                      <div className="col-12 col-lg">
                        <div className="h6 d-flex align-items-center mb-2 mb-lg-3">
                          <div className="avatar avatar-sm flex-shrink-0 me-2">
                            <span className="avatar-initial rounded bg-label-primary">
                              <i className="bx bx-image-alt" />
                            </span>
                          </div>
                          <span className="ps-1">Other</span>
                        </div>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a
                              className="nav-link mega-dropdown-link"
                              href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/pages/misc-error"
                              target="_blank"
                            >
                              <i className="bx bx-radio-circle me-2" />
                              Error
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link mega-dropdown-link"
                              href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/pages/misc-under-maintenance"
                              target="_blank"
                            >
                              <i className="bx bx-radio-circle me-2" />
                              Under Maintenance
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link mega-dropdown-link"
                              href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/pages/misc-comingsoon"
                              target="_blank"
                            >
                              <i className="bx bx-radio-circle me-2" />
                              Coming Soon
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link mega-dropdown-link"
                              href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/pages/misc-not-authorized"
                              target="_blank"
                            >
                              <i className="bx bx-radio-circle me-2" />
                              Not Authorized
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link mega-dropdown-link"
                              href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/auth/verify-email-basic"
                              target="_blank"
                            >
                              <i className="bx bx-radio-circle me-2" />
                              Verify Email (Basic)
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link mega-dropdown-link"
                              href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/auth/verify-email-cover"
                              target="_blank"
                            >
                              <i className="bx bx-radio-circle me-2" />
                              Verify Email (Cover)
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link mega-dropdown-link"
                              href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/auth/two-steps-basic"
                              target="_blank"
                            >
                              <i className="bx bx-radio-circle me-2" />
                              Two Steps (Basic)
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link mega-dropdown-link"
                              href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/auth/two-steps-cover"
                              target="_blank"
                            >
                              <i className="bx bx-radio-circle me-2" />
                              Two Steps (Cover)
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 d-none d-lg-block">
                        <div className="bg-body nav-img-col p-2">
                          <img
                            src="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo/assets/img/front-pages/misc/nav-item-col-img.png"
                            alt="nav item col image"
                            className="w-100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link fw-medium"
                    href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1"
                    target="_blank"
                  >
                    Admin
                  </a>
                </li>
              </ul>
            </div>
            <div className="landing-menu-overlay d-lg-none" />
            {/* Menu wrapper: End */}
            {/* Toolbar: Start */}
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              {/* Style Switcher */}
              <li className="nav-item dropdown-style-switcher dropdown me-2 me-xl-0">
                <a
                  className="nav-link dropdown-toggle hide-arrow"
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                >
                  <i className="bx bx-sm bx-sun" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-styles">
                  <li>
                    <a
                      className="dropdown-item"
                      href="javascript:void(0);"
                      data-theme="light"
                    >
                      <span className="align-middle">
                        <i className="bx bx-sun me-2" />
                        Light
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="javascript:void(0);"
                      data-theme="dark"
                    >
                      <span className="align-middle">
                        <i className="bx bx-moon me-2" />
                        Dark
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="javascript:void(0);"
                      data-theme="system"
                    >
                      <span className="align-middle">
                        <i className="bx bx-desktop me-2" />
                        System
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* / Style Switcher*/}
              {/* navbar button: Start */}
              <Link to="/login">
              <li style={{marginLeft:"20px"}}>
                <a
                  href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/auth/login-cover"
                  className="btn btn-primary"
                  target="_blank"
                >
                  <span className="tf-icons bx bx-user me-md-1" />
                  <span className="d-none d-md-block">Login</span>
                </a>
              </li>
              </Link>

              <Link to="/register">
              <li style={{marginLeft:"20px"}}>
                <a
                  href="https://demos.themeselection.com/sneat-bootstrap-html-laravel-admin-template/demo-1/auth/login-cover"
                  className="btn btn-primary"
                  target="_blank"
                >
                  <span className="tf-icons bx bx-user me-md-1" />
                  <span className="d-none d-md-block">Register</span>
                </a>
              </li>
              </Link>

              
              <li class="nav-item navbar-dropdown dropdown-user dropdown" style={{marginLeft:"20px"}}>
            <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
              <div class="avatar avatar-online">
                <img src="../../assets/img/avatars/1.png" alt="" class="w-px-40 h-auto rounded-circle"/>
              </div>
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <a class="dropdown-item" href="pages-account-settings-account.html">
                  <div class="d-flex">
                    <div class="flex-shrink-0 me-3">
                      <div class="avatar avatar-online">
                        <img src="../../assets/img/avatars/1.png" alt="" class="w-px-40 h-auto rounded-circle"/>
                      </div>
                    </div>
                    <div class="flex-grow-1">
                      <span class="fw-medium d-block">John Doe</span>
                      <small class="text-muted">Admin</small>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <div class="dropdown-divider"></div>
              </li>
              <Link to="/parent">
              <li>
                <a class="dropdown-item" href="pages-profile-user.html">
                  <i class="bx bx-user me-2"></i>
                  <span class="align-middle">My Profile</span>
                </a>
              </li>
              </Link>
              <li>
                <a class="dropdown-item" href="pages-account-settings-account.html">
                  <i class="bx bx-cog me-2"></i>
                  <span class="align-middle">Settings</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="pages-account-settings-billing.html">
                  <span class="d-flex align-items-center align-middle">
                    <i class="flex-shrink-0 bx bx-credit-card me-2"></i>
                    <span class="flex-grow-1 align-middle">Billing</span>
                    <span class="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                  </span>
                </a>
              </li>
              <li>
                <div class="dropdown-divider"></div>
              </li>
              <li>
                <a class="dropdown-item" href="pages-faq.html">
                  <i class="bx bx-help-circle me-2"></i>
                  <span class="align-middle">FAQ</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="pages-pricing.html">
                  <i class="bx bx-dollar me-2"></i>
                  <span class="align-middle">Pricing</span>
                </a>
              </li>
              <li>
                <div class="dropdown-divider"></div>
              </li>
              <li>
                <a class="dropdown-item" href="auth-login-cover.html" target="_blank">
                  <i class="bx bx-power-off me-2"></i>
                  <span class="align-middle">Log Out</span>
                </a>
              </li>
            </ul>
              </li>
             
              {/* navbar button: End */}
            </ul>
            {/* Toolbar: End */}
          </div>
        </div>
      </nav>
    </div>
  )
}

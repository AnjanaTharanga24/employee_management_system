import React from 'react'

export default function ParentSidebar() {
  return (
    <div>
          <aside
              id="layout-menu"
              className="layout-menu menu-vertical menu bg-menu-theme"
            >
              <div className="app-brand demo">
                <a href="/" className="app-brand-link">
                  <span className="app-brand-logo demo">
                    <img
                      className="logo-light"
                      src="img/ls.png"
                      alt="logo"
                      style={{ width: "200px" }}
                    />
                  </span>
                </a>
                <a
                  href="javascript:void(0);"
                  className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
                >
                  <i className="bx bx-chevron-left bx-sm align-middle" />
                </a>
              </div>

              <div className="menu-inner-shadow" />
              <ul className="menu-inner py-1">
                {/* Dashboard */}
                <li className="menu-item active mt-3">
                  <a href="/parent" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-home-circle" />
                    <div data-i18n="Analytics">Dashboard</div>
                  </a>
                </li>
                {/* Layouts */}
                <li className="menu-item">
                  <a
                    href="javascript:void(0);"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons bx bx-layout" />
                    <div data-i18n="Layouts">Layouts</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a href="layouts-without-menu.html" className="menu-link">
                        <div data-i18n="Without menu">Without menu</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="layouts-without-navbar.html"
                        className="menu-link"
                      >
                        <div data-i18n="Without navbar">Without navbar</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="layouts-container.html" className="menu-link">
                        <div data-i18n="Container">Container</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="layouts-fluid.html" className="menu-link">
                        <div data-i18n="Fluid">Fluid</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="layouts-blank.html" className="menu-link">
                        <div data-i18n="Blank">Blank</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-header small text-uppercase">
                  <span className="menu-header-text">Pages</span>
                </li>
                <li className="menu-item">
                  <a
                    href="/parent/children"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons bx bx-user" />{" "}
                    <div data-i18n="Account Settings">Children</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="/parent/bank-payment"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons bx bx-money" />
                    <div data-i18n="Authentications">Bank Payment</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="/parent/online-bank"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons bx bx-credit-card" />
                    <div data-i18n="Misc">Online Bank</div>
                  </a>
                </li>

                <li className="menu-item">
                  <a
                    href="/parent/my-qr"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons bx bx-qr-scan" />
                    <div data-i18n="Misc">My QR</div>
                  </a>
                </li>
                {/* Components */}
                <li className="menu-header small text-uppercase">
                  <span className="menu-header-text">Components</span>
                </li>
                {/* Cards */}
                <li className="menu-item">
                  <a href="cards-basic.html" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-collection" />
                    <div data-i18n="Basic">Cards</div>
                  </a>
                </li>
                {/* User interface */}
                <li className="menu-item">
                  <a
                    href="javascript:void(0)"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons bx bx-box" />
                    <div data-i18n="User interface">User interface</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a href="ui-accordion.html" className="menu-link">
                        <div data-i18n="Accordion">Accordion</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-alerts.html" className="menu-link">
                        <div data-i18n="Alerts">Alerts</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-badges.html" className="menu-link">
                        <div data-i18n="Badges">Badges</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-buttons.html" className="menu-link">
                        <div data-i18n="Buttons">Buttons</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-carousel.html" className="menu-link">
                        <div data-i18n="Carousel">Carousel</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-collapse.html" className="menu-link">
                        <div data-i18n="Collapse">Collapse</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-dropdowns.html" className="menu-link">
                        <div data-i18n="Dropdowns">Dropdowns</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-footer.html" className="menu-link">
                        <div data-i18n="Footer">Footer</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-list-groups.html" className="menu-link">
                        <div data-i18n="List Groups">List groups</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-modals.html" className="menu-link">
                        <div data-i18n="Modals">Modals</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-navbar.html" className="menu-link">
                        <div data-i18n="Navbar">Navbar</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-offcanvas.html" className="menu-link">
                        <div data-i18n="Offcanvas">Offcanvas</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="ui-pagination-breadcrumbs.html"
                        className="menu-link"
                      >
                        <div data-i18n="Pagination & Breadcrumbs">
                          Pagination &amp; Breadcrumbs
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-progress.html" className="menu-link">
                        <div data-i18n="Progress">Progress</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-spinners.html" className="menu-link">
                        <div data-i18n="Spinners">Spinners</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-tabs-pills.html" className="menu-link">
                        <div data-i18n="Tabs & Pills">Tabs &amp; Pills</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-toasts.html" className="menu-link">
                        <div data-i18n="Toasts">Toasts</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-tooltips-popovers.html" className="menu-link">
                        <div data-i18n="Tooltips & Popovers">
                          Tooltips &amp; popovers
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="ui-typography.html" className="menu-link">
                        <div data-i18n="Typography">Typography</div>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* Extended components */}
                <li className="menu-item">
                  <a
                    href="javascript:void(0)"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons bx bx-copy" />
                    <div data-i18n="Extended UI">Extended UI</div>
                  </a>
                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a
                        href="extended-ui-perfect-scrollbar.html"
                        className="menu-link"
                      >
                        <div data-i18n="Perfect Scrollbar">
                          Perfect scrollbar
                        </div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="extended-ui-text-divider.html"
                        className="menu-link"
                      >
                        <div data-i18n="Text Divider">Text Divider</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="icons-boxicons.html" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-crown" />
                    <div data-i18n="Boxicons">Boxicons</div>
                  </a>
                </li>
                {/* Forms & Tables */}
                <li className="menu-header small text-uppercase">
                  <span className="menu-header-text">Forms &amp; Tables</span>
                </li>
                {/* Forms */}
                <li className="menu-item">
                  <a
                    href="javascript:void(0);"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons bx bx-detail" />
                    <div data-i18n="Form Elements">Form Elements</div>
                  </a>
                </li>
              </ul>
            </aside>
    </div>
  )
}

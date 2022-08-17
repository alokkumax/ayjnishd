import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <>
      {/* <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="sidebar">
              <a className="active" href="#home">
                Home
              </a>
              <a href="#news">News</a>
              <a href="#contact">Contact</a>
              <a href="#about">About</a>
            </div>
          </div>
          <div className="col-sm">
            <div className="content">
              <h2>Responsive Sidebar Example</h2>
              <p>
                This example use media queries to transform the sidebar to a top
                navigation bar when the screen size is 700px or less.
              </p>
              <p>
                We have also added a media query for screens that are 400px or
                less, which will vertically stack and center the navigation
                links.
              </p>
              <h3>Resize the browser window to see the effect.</h3>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 sidebar-bg">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2  min-vh-100">
              {/* <a
                href="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline fixfontcolor">Menu</span>
              </a> */}
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0">
                    <i className="fs-4 bi-house"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline fixfontcolor">CI Candidacy</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#submenu1"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle"
                  >
                    <i className="fs-4 bi-speedometer2"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline fixfontcolor">How To Apply</span>{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-table"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline fixfontcolor linkactive">CIS Enrollment</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#submenu2"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle "
                  >
                    <i className="fs-4 bi-bootstrap"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline fixfontcolor">Pre & Post CIS</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#submenu3"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle"
                  >
                    <i className="fs-4 bi-grid"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline fixfontcolor">CI Processor</span>{" "}
                  </a>
                </li>
              </ul>
              <hr />
              {/* <div className="dropdown pb-4">
                <a
                  href="#"
                  className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="hugenerd"
                    width="30"
                    height="30"
                    className="rounded-circle"
                  />
                  <span className="d-none d-sm-inline fixfontcolor mx-1">loser</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li>
                    <a className="dropdown-item" href="#">
                      New project...
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <div className="col py-3">
          <iframe
            src="https://drive.google.com/file/d/1HoiFrEAS_RqanjiwbUfj3Ywgh-R5T1jy/preview"
            className="pdf_iframe"
            allow="autoplay"
          ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;

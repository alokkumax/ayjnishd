import React from "react";
import Link from "next/link";
const SideBar = () => {
  return (
    <div className="container">
    <section id="sidebar">
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light sidebarbg"
        style={{width: "280px"}}
      >
        <Link
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto  text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            {/* <use xlink:href="#bootstrap" /> */}
          </svg>
          <span className="fs-4 alinkfix">AYJNISHD</span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link href="#" className="nav-link sidebaractive" aria-current="page">
              <svg className="bi me-2" width="16" height="16">
                {/* <use xlink:href="#home" /> */}
              </svg>
              CI 
            </Link>
          </li>
          <li>
            <Link href="#" className="nav-link alinkfix ">
              <svg className="bi me-2" width="16" height="16">
                {/* <use xlink:href="#speedometer2" /> */}
              </svg>
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="#" className="nav-link alinkfix ">
              <svg className="bi me-2" width="16" height="16">
                {/* <use xlink:href="#table" /> */}
              </svg>
              Orders
            </Link>
          </li>
          <li>
            <Link href="#" className="nav-link alinkfix ">
              <svg className="bi me-2" width="16" height="16">
                {/* <use xlink:href="#grid" /> */}
              </svg>
              Products
            </Link>
          </li>
          <li>
            <Link href="#" className="nav-link alinkfix ">
              <svg className="bi me-2" width="16" height="16">
                {/* <use xlink:href="#people-circle" /> */}
              </svg>
              Customers
            </Link>
          </li>
        </ul>
        {/* <hr /> */}
        {/* <div className="dropdown">
          <Link
            href="#"
            className="d-flex align-items-center  text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </Link>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <Link className="dropdown-item" href="#">
                New project...
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Settings
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Profile
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" href="#">
                Sign out
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </section></div>
  );
};

export default SideBar;

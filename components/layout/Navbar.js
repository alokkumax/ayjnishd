import {React,useContext, useEffect} from "react";
import Image from "next/image";
import logo from "../../images/logo-sih.png";
// import bootstrap from 'bootstrap'
import { AiOutlineSound } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";

export default function Navbar() {
  
  //Google Translator Code Here:
  useEffect(() => {
    var addScript = document.createElement('script');
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
}, [])
var duplicate_google_translate_counter = 0;
const googleTranslateElementInit = () => {
    if (duplicate_google_translate_counter == 0) {
      new google.translate.TranslateElement({pageLanguage: 'en',includedLanguages : "en,hi,mr,te,ta"}, 'google_translate_element');
   }
   duplicate_google_translate_counter++;
}
//Google function ends here

  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Image src={logo} width={120} alt="" height={50} />
          <h1 className="navbar-brand mx-3 text-dark" href="#">
            AYJNISHD
          </h1>
          <button
            className="navbar-toggler text-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            <HiMenu className="navbar-toggler-icon" />
          </button>
          <div
            className=" collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      ADIP Scheme
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Guidance And Support
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Institute{" "}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Regional Centres{" "}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Copyright Scheme
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Apply
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      CI Candidacy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      How to Apply{" "}
                    </a>
                  </li>
                  {/* <li><hr className="dropdown-divider"/></li> */}
                  <li>
                    <a className="dropdown-item" href="#">
                      CI Surgery Enrollment{" "}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Pre &amp; POst CI Surgery
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      CI Processor Manual
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Login
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Request for Audiologist
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Empanallment of Hospitals{" "}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Surgical Report
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Activation &amp; Mapping
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Check Application Status
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Check Application Details
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Feedback
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Others
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Report of Events
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Duration of Therapy
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Languages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Hindi
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Marathi
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Telugu
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Tamil
                    </a>
                  </li>
                </ul>
              </li>
              {/* Google Translate ID: */}
              <div id="google_translate_element" ></div>
              {/* google div ends here */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <AiOutlineSound />
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { ImLinkedin2 } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";


const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col sm">
              <h5 className="footerparahead">
                <b>More To Explore</b>
              </h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  {/* <Link href="https://socialjustice.nic.in/">
                    <a target="_blank" href="">
                      <p className="nav-link p-0 text-muted">
                        Ministry of Social justice and empowerment
                      </p>
                    </a>
                  </Link> */}
                  <Link
                    href="https://socialjustice.nic.in/"
                    rel="noopener noreferrer"
                  >
                    <a
                      className="nav-link p-0 text-muted links-footer"
                      id=""
                      target="_blank"
                    >
                      Ministry of Social justice and empowerment
                    </a>
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    href="http://adipcochlearimplant.in/index.aspx/"
                    rel="noopener noreferrer"
                  >
                    <a
                      className="nav-link p-0 text-muted links-footer"
                      id=""
                      target="_blank"
                    >
                      AYJNISHD
                    </a>
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="/check">
                    <p className="nav-link p-0 text-muted links-footer">
                      Check your hearing
                    </p>
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="/">
                    <p className="nav-link p-0 text-muted links-footer">
                      Jobs of Hearing Impaired
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col sm">
              <h5 className="footerparahead">
                <b>Quick Links</b>
              </h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link href="/ci-forms">
                    <p className="nav-link p-0 text-muted links-footer">
                      Terms & Conditions
                    </p>
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="/">
                    <p className="nav-link p-0 text-muted links-footer">
                      Privacy Policy
                    </p>
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="/apply">
                    <p className="nav-link p-0 text-muted links-footer">
                      Apply
                    </p>
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="/login">
                    <p className="nav-link p-0 text-muted links-footer">
                      Login
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col sm">
              <h5 className="footerparahead">
                <b>
                  You Are Visitor Number
                  <br />
                  5462132
                </b>
              </h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link href="/contact/feedback">
                    <p className="nav-link p-0 text-muted links-footer">
                      Feedback
                    </p>
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="/contact">
                    <p className="nav-link p-0 text-muted links-footer">
                      Contact Us
                    </p>
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link href="/others/guidance">
                    <p className="nav-link p-0 text-muted links-footer">
                      Guidance & Support
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col sm">
              <p className="footerparahead" id="iconsize">
                <Link href="https://twitter.com/ayjnishdd?lang=en">
                  <a id="" target="_blank">
                    <BsTwitter color="white"/>
                  </a>
                </Link>
                &nbsp;&nbsp;
                <Link href="#">
                  <a id="" target="_blank">
                  <ImLinkedin2 color="white"/>
                  </a>
                </Link>
                &nbsp;&nbsp;
                <Link href="https://www.facebook.com/ayjnishdd/">
                  <a id="" target="_blank">
                  <ImFacebook color="white"/>
                  </a>
                </Link>
                &nbsp;&nbsp;
              </p>
            </div>
            <div className="col sm">
              <p className="footerparahead">
                A product of{" "}
                <b>
                  <i>AYJNISHD</i>
                </b>{" "}
                design by : OrganiCod3rs
              </p>
            </div>
            <div className="col sm">
              <p className="footerparahead">
                © 2015 Coachler Implant under ADIP Scheme of GOI.
                <br />
                All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import React from "react";
import cardimg from "../../images/hero-vector-act.png";
import Image from "next/image";
import Link from 'next/link'
// import styles from "../styles/CiApplication.module.css"
const CiApplication = () => {
  return (
    <>
      <section id="appbody">
        <h3 className="heading ">Start your CI Application Here</h3>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12">
              <center>
                <h3 className="stepbut">Step-1</h3>
              </center>
              <div className="card">
                <Image
                  className="card-img-top"
                  src={cardimg}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <br />
                  <h5 className="card-title">Start Your Application</h5>
                  <p className="card-text">
                    This is the second part of the SMM starter pack series of
                    articles. If you made it this far, you must be willing to
                    learn about promoting business through social media.
                  </p>
                  <div className="fixapplybut">
                    <a href="/ci-forms" className="applybut">
                      Apply Here
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12">
              <center>
                <h3 className="stepbut">Step-2</h3>
              </center>
              <div className="card">
                <Image
                  className="card-img-top"
                  src={cardimg}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <br />
                  <h5 className="card-title">Waitlisted for CI Surgery</h5>
                  <p className="card-text">
                    This is the second part of the SMM starter pack series of
                    articles. If you made it this far, you must be willing to
                    learn about promoting business through social media.
                  </p>
                  <div className="fixapplybut">
                    {/* <Link to="/" className="applybut">
                      Check Here
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-12">
              <center>
                <h3 className="stepbut">Step-3</h3>
              </center>
              <div className="card">
                <Image
                  className="card-img-top"
                  src={cardimg}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <br />
                  <h5 className="card-title">Cases Scheduled for CI Surgery</h5>
                  <p className="card-text">
                    This is the second part of the SMM starter pack series of
                    articles. If you made it this far, you must be willing to
                    learn about promoting business through social media.
                  </p>
                  <div className="fixapplybut">
                    {/* <Link to="/" className="applybut">
                      Check Here
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12">
              <center>
                <h3 className="stepbut">Step-4</h3>
              </center>
              <div className="card">
                <Image
                  className="card-img-top"
                  src={cardimg}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <br />
                  <h5 className="card-title">
                    Details of cases undergone
                  </h5>
                  <p className="card-text">
                    This is the second part of the SMM starter pack series of
                    articles. If you made it this far, you must be willing to
                    learn about promoting business through social media.
                  </p>
                  <div className="fixapplybut">
                    {/* <Link to="/" className="applybut">
                      See All Cases
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CiApplication;

import React from "react";
import cardimg from "../../images/hero-vector-act.png";
import task from "../../images/task.svg";
import time from "../../images/time.png";
import list from "../../images/list.png";
import app from "../../images/app.png";
import destination from "../../images/destination.svg";
import checkup from "../../images/checkup.png";
import scheduleImg from "../../images/schedule.svg";
import Image from "next/image";
import Link from "next/link";
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
                    src={app}
                    alt="Card image cap"
                  />
                <div className="card-body">
                  <br />
                  <h5 className="card-title">Start Your Application</h5>
                  <p className="card-text">
                  Fill up the Online form under revised ADIP Scheme and guidelines – 2014`&apos;` under Enrollment for Cochlear Implant Surgery and attach the scanned copy of supporting documents OR download the Application form from the same link &amp; send the filled Application with all the required supporting documents to <Link href="/contact/contactus"><span className="btn-sih-link">here</span></Link>
                  </p>
                  <div className="fixapplybut">
                    <Link href="/ci-forms" className="applybut">
                      <button className="btn btn-sih-other">
                        Apply Here ...
                      </button>
                    </Link>
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
                  src={time}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <br />
                  <h5 className="card-title">Cases Scheduled</h5>
                  <p className="card-text">
                  Click to view the new provisional list of identified beneficiaries along with their demographic
                  details for Cochlear implantation under CSR initiative of REC Foundation. The process of assigning
                  hospital, issuing of approval letter and dispatch of implants is underway. At present 50 beneficiaries
                  are identified. 
                  </p>
                  <div className="fixapplybut">
                    <Link href="/ci-forms" className="applybut">
                      <button className="btn btn-sih-other">
                        Check Here ...
                      </button>
                    </Link>
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
                  src={list}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <br />
                  <h5 className="card-title">Details of cases undergone</h5>
                  <p className="card-text">
                  Details of cases undergone Cochlear Implant Surgery
                  ( MIS Reports which are only for internal use are Password protected ). Click on the link to view summary of all cases statewise or yearwise subjected by ADIP and CSR. You can also check Post Rehabilitation/Intervention by ADIPCI yearwise.
                  </p>
                  <div className="fixapplybut">
                    <Link href="/ci-forms" className="applybut">
                      <button className="btn btn-sih-other">
                        Check Here ...
                      </button>
                    </Link>
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
                  src={checkup}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <br />
                  <h5 className="card-title">Pre and Post CI Surgery</h5>
                  <p className="card-text">
                    Click here to see an overview of Cochlear Implant, components or working, who can benefit from it or contraindications for it. Other than that click to see process, advantages, riska and limitations of CI. You can also check whether your child is a good candidate for the same or not, by clicking here.
                  </p>
                  <div className="fixapplybut">
                    <Link href="/ci-forms" className="applybut">
                      <button className="btn btn-sih-other">
                        Check Here ...
                      </button>
                    </Link>
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

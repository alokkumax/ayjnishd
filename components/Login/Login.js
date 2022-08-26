import React from "react";
import Link from "next/link"
const Login = (props) => {
  return (
    <>
      <center>
        <div className="title">
          <h3>{props.title}</h3>
        </div>
        
        <form id="loginformcss">
          <div className="mb-3">
            <label htmlFor="regno" className="form-label">
              Unique Registration Number
            </label>
            <input type="number" className="form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Applicant&apos;s Name
            </label>
            <input type="text" className="form-control" required />
          </div>
          <center>
            <Link href={props.next}>
            <a type="submit" id="submitbut" className="btn btn-primary">
              Login
            </a>
            </Link>
          </center>
        </form>
      </center>
    </>
  );
};

export default Login;

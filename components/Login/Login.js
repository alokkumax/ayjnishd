import React from "react";

const Login = () => {
  return (
    <>
      <center>
        <form id="loginformcss">
          <div className="mb-3">
            <label for="regno" className="form-label">
              Unique Registration Number
            </label>
            <input type="number" className="form-control" required />
          </div>
          <div className="mb-3">
            <label for="name" className="form-label">
              Your Name
            </label>
            <input type="text" className="form-control" required />
          </div>
          <center>
            <button type="submit" id="submitbut" className="btn btn-primary">
              Submit
            </button>
          </center>
        </form>
      </center>
    </>
  );
};

export default Login;

import React from "react";

import MainSignInImage from "../../images/singin-main/group-18.png";
import "./login-page.styles.css";

const LoginPage = () => {
  return (
    <div className="container-fluid login-page">
      <header className="container-fluid row justify-content-between header-cont">
        <div className="col-2 logo-and-name">Peek A Meet</div>
        <div className="col-3 row">
          <button
            className="btn btn-link btn-sm col"
            style={{ color: "white" }}
          >
            Sign In{" "}
          </button>
          <button
            className="btn btn-light btn-sm col"
            style={{ color: "green" }}
          >
            Sign Up
          </button>
        </div>
      </header>
      <div className="container login-page-main">
        <div className="row">
          <div className="col-md-7">
            <img style={{ width: "100%" }} src={MainSignInImage} alt="" />
          </div>
          <div className="col-md-5">
            <div className="row right-section-ele">
              PeekaMEET lets you network more effectively to achieve your
              business and career goals
            </div>
            <div className="row right-section-ele">
              <span
                style={{
                  background: "rgba(241, 124, 43, 0.18)",
                  color: "#f17c2b",
                }}
                className="col badge rounded-pill"
              >
                Jobseeker
              </span>
              <span
                style={{
                  background: "rgba(150, 54, 143, 0.18)",
                  color: "#96368f",
                }}
                className="col badge rounded-pill"
              >
                Jobseeker
              </span>
              <span
                style={{
                  background: "rgba(26, 150, 145, 0.18)",
                  color: "#1a9691",
                }}
                className="col badge rounded-pill"
              >
                Enterpreneaur
              </span>
              <span
                style={{
                  background: "rgba(230, 49, 131, 0.18)",
                  color: "#e63183",
                }}
                className="col badge rounded-pill"
              >
                Mompreneaur
              </span>
            </div>
            <div className="row right-section-ele">
              <span
                style={{
                  background: "rgba(241, 124, 43, 0.18)",
                  color: "#f17c2b",
                }}
                className="col badge rounded-pill"
              >
                Internship Seeker
              </span>
              <span
                style={{
                  background: "rgba(150, 54, 143, 0.18)",
                  color: "#96368f",
                }}
                className="col badge rounded-pill text-center"
              >
                Environmental Change Maker
              </span>
            </div>
            <div style={{ fontSize: "18px" }} className="row right-section-ele">
              Build and manage your network with PEEKaMEET
            </div>
            <div className="row right-section-ele">
              <form action="">
                <div>
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="name@example.com"
                  ></input>
                </div>
                <div>
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                  ></input>
                </div>
                <button style={{margin:"10px 0"}} type="submit" class="btn btn-success">
                  Success
                </button>
              </form>
            </div>
            <div className="row right-section-ele">
              <input
              style={{marginLeft:0}}
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label style={{marginLeft:20}} class="form-check-label" htmlFor="flexCheckDefault">
                Remember Me
              </label>
              <a href="/abc">Forgot Password</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import MainSignInImage from "../../images/singin-main/group-18.png";

import "./login-main.styles.css";

const LoginMain = () => {
  return (
    <div className="login-page-main">
      <div className="login-page-main__image">
        <img style={{ width: "100%" }} src={MainSignInImage} alt="" />
      </div>
      <div className="login-page-main__contentAndForm">
        <div className="login-page-main__contentAndForm_basicInfo">
          <div className="login-page-main__contentAndForm_basicInfo-text">
            <div className="basicInfo_bold">PeekaMEET</div> lets you network
            more effectively to achieve your business and career goals
          </div>
          <div className="login-page-main__contentAndForm_basicInfo__chips">
            <div className="chip chip-1">Freelancer</div>
            <div className="chip chip-2">Job Seeker</div>
            <div className="chip chip-3">Enterpreneaur</div>
            <div className="chip chip-4">Mompreneur</div>
            <div className="chip chip-5">Internship Seeker</div>
            <div className="chip chip-6">Environmental Change Maker</div>
          </div>
          <div
            className="login-page-main__contentAndForm_basicInfo-text"
            style={{ marginBottom: "30px" }}
          >
            Build and manage your network with PEEKaMEET
          </div>
        </div>
        <div className="login-page-main__contentAndForm_basicInfo__form">
          <form action="">
            <div style={{ marginBottom: "16px" }}>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
              ></input>
            </div>
            <button type="submit" className="btn btn-success signin_button">
              SignIn
            </button>
          </form>
          <div className="form_last_elements">
            <input
              style={{ marginLeft: 0 }}
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              style={{ marginLeft: 20 }}
              class="form-check-label"
              htmlFor="flexCheckDefault"
            >
              Remember Me
            </label>
            <a style={{color:"black",textDecoration:"underline"}} href="/abc">Forgot Password</a>
          </div>
          <div style={{textAlign:"center", marginTop:"16px"}}>
            Don't have an account? <a style={{color:"black",textDecoration:"underline",fontWeight:"bold"}} href="/signup">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginMain;


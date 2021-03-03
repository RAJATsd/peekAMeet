import React from "react";

import LoginHeaderComponent from '../../components/login-header/login-header.component';
import LoginMainComponent from '../../components/login-main/login-main.component';
import LoginFooterComponent from '../../components/login-footer/login-footer.component';
import "./login-page.styles.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <LoginHeaderComponent />
      <LoginMainComponent />
      <LoginFooterComponent />
    </div>
  );
};

export default LoginPage;

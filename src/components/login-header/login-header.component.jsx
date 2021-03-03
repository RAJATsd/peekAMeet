import {ReactComponent as NavLogo} from '../../images/nav-logo/menu-line.svg';

import './login-header.styles.css';

const LoginHeader = () => {
  return (
    <header className="header-cont">
        <div className="header-cont-row between">
            <div className="header-cont-row1__logo">
                PeekAMEET
            </div>
            <div className="header-cont-row1__navlogo">
                <NavLogo/>
            </div>
        </div>
        <div className="header-cont-row center">
            <button className="header-cont-row__button green">Sign In</button>
            <button className="header-cont-row__button white">Sign Up</button>
        </div>
    </header>
  );
};

export default LoginHeader;
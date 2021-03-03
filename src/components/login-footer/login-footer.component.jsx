import "./login-footer.styles.css";

import InstaLogo from "../../images/instagram-fill_2021-02-28/instagram-fill.png";
import YoutubeLogo from "../../images/youtube-fill_2021-02-28/youtube-fill.png";
import FbLogo from "../../images/facebook-box-fill_2021-02-28/facebook-box-fill.png";
import TwitterLogo from "../../images/twitter-fill_2021-02-28/twitter-fill.png";

const LoginFooter = () => {
  return (
    <div className="login-footer">
      <div className="login-footer__name">PeekaMEET@2020</div>
      <div className="login-footer-logos">
        Follow us:  
        <img src={InstaLogo} alt="" />
        <img src={YoutubeLogo} alt="" />
        <img src={FbLogo} alt="" />
        <img src={TwitterLogo} alt="" />
      </div>
      <a href="faq">FAQs</a>
      <a href="t&c">Terms & Conditions</a>
      <a href="Privacy">Privacy Policy</a>
      <a href="about">About PEEKaMEET</a>
      <a href="press">Press</a>
      <a href="contact">Contact Us</a>
      <a href="perks">Perks</a>
      <a href="blog">Blog</a>
    </div>
  );
};

export default LoginFooter;

import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-conatainer">
        <img className="logo-img" alt="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About-Us</li>
          <li>Contact-us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

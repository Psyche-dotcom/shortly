import { Close, MenuOutlined } from "@mui/icons-material";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(true);
  const toggleClose = () => setOpen(false);
  return (
    <nav>
      <div className="Nav Container">
        <div className="Nav_logo">
          <img src="./images/logo.svg" alt="logo" />
          <ul className="desktop Nav_item">
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </div>
        <div className="desktop btn-section">
          <button className="login">Login</button>
          <button>Sign Up</button>
        </div>
        <div className="mobile">
          {open ? (
            <Close onClick={toggleClose} className="ham" />
          ) : (
            <MenuOutlined onClick={toggleOpen} className="ham" />
          )}
        </div>
      </div>
      {open && (
        <nav className="mobileNav">
          <ul className="mobile">
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <div className="mobile">
            <div className="line"></div>
            <button className="login">Login</button>
            <button>Sign Up</button>
          </div>
        </nav>
      )}
    </nav>
  );
};

export default Navbar;

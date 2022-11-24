import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const lisnter = () => {
      if (window.scrollY > 150) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", lisnter);
    return () => {
      window.removeEventListener("scroll", lisnter);
    };
  }, []);
  return (
    <div className={scroll ? "nav scroll" : "nav"}>
      <div>
        <img
          className="netflix-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
      </div>
      <div>
        <img
          className="netflix-avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
          alt="Avatar logo"
        />
      </div>
    </div>
  );
}

export default Navbar;

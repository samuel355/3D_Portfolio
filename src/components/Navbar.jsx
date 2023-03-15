import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full, flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link 
          className="flex items-center gap-2"
          to={"/"}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0)
          }}
          >
            <p className="text-white text-[18px] font-bold cursor-pointer">Sobal</p>
          <img src={logo} className="w-9 h-9 object-contain" alt="logo" />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
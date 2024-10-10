import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Image from "../../designLayouts/Image";
import { navBarList } from "../../../constants";
import Flex from "../../designLayouts/Flex";
import { emptyCart } from "../../../assets/images/index";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const ResponsiveMenu = () => {
      if (window.innerWidth >= 667) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
    return () => window.removeEventListener("resize", ResponsiveMenu);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="w-full h-20 mb-5 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      <nav className="h-full px-4 md:px-[100px] max-w-container mx-auto relative flex items-center justify-between">
        <Link to="/">
          <Image className="w-100 md:w-32 object-cover" imgSrc={"https://uetcl.go.ug/wp-content/uploads/2024/04/UETCL-PNG-Logo.png"} />
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl text-gray-700 focus:outline-none"
          >
            &#9776;
          </button>
        </div>
        <div
          className={`absolute md:relative top-20 left-0 md:top-auto md:left-auto w-full md:w-auto bg-white md:bg-transparent ${
            showMenu ? "block" : "hidden"
          } md:block bg-opacity-100 `}
        >
          <motion.ul
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center w-full md:w-auto z-50 p-0 gap-2"
          >
            {navBarList.map(({ _id, title, link }) => (
              <NavLink
                key={_id}
                className="flex font-bold text-blue hover:font-black justify-center items-center px-4 md:px-12 text-base md:text-lg text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                to={link}
                state={{ data: location.pathname.split("/")[1] }}
              >
                <li>{title}</li>
              </NavLink>
            ))}
          </motion.ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

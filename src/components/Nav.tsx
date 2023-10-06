import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import logo from '../assets/d-logo.png';
import { useState } from "react";

const Nav: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const topBarVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: 45, translateY: 11 },
  };

  const middleBarVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const bottomBarVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: -45, translateY: -5 },
  };

  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        stiffness: 300,
      },
    },
  };

  return (
    <nav className="flex flex-col lg:flex-row bg-green-600 items-start lg:items-center justify-between w-full">
        
        <div className="flex justify-between items-center w-full lg:w-auto px-4 py-2">
            <motion.li
                whileTap={{ translateY: 1, scale: 0.9 }}
                whileHover={{ translateY: -3 }}
                className="list-none"
            >
                <NavLink to='/'><img className="w-12" src={logo} alt="home-button" /></NavLink>
            </motion.li>

            {/* Nav Links for Desktop */}
            <ul className="hidden lg:flex lg:space-x-4 lg:py-0 py-2 ml-4">
                <motion.li
                    whileTap={{ translateY: 1, scale: 0.9 }}
                    whileHover={{ translateY: -3 }}
                    className="my-4"
                >
                    <NavLink to='/about'>About</NavLink>
                </motion.li>
                <motion.li
                    whileTap={{ translateY: 1, scale: 0.9 }}
                    whileHover={{ translateY: -3 }}
                    className="m-4"
                >
                    <NavLink to='/skills'>Skills</NavLink>
                </motion.li>
                <motion.li
                    whileTap={{ translateY: 1, scale: 0.9 }}
                    whileHover={{ translateY: -3 }}
                    className="m-4"
                >
                    <NavLink to='/experience'>Experience</NavLink>
                </motion.li>
                <motion.li
                    whileTap={{ translateY: 1, scale: 0.9 }}
                    whileHover={{ translateY: -3 }}
                    className="m-4"
                >
                    <NavLink to='/contact'>Contact</NavLink>
                </motion.li>
            </ul>

            {/* Hamburger for Mobile/Tablet */}
            <div className="lg:hidden cursor-pointer" onClick={() => setIsMobileOpen(!isMobileOpen)}>
                <motion.div
                    className="w-6 h-1 bg-white mb-1"
                    variants={topBarVariants}
                    initial="closed"
                    animate={isMobileOpen ? "open" : "closed"}
                ></motion.div>
                <motion.div
                    className="w-6 h-1 bg-white mb-1"
                    variants={middleBarVariants}
                    initial="closed"
                    animate={isMobileOpen ? "open" : "closed"}
                ></motion.div>
                <motion.div
                    className="w-6 h-1 bg-white"
                    variants={bottomBarVariants}
                    initial="closed"
                    animate={isMobileOpen ? "open" : "closed"}
                ></motion.div>
            </div>

        </div>

        {/* Nav Links for Mobile/Tablet */}
        <motion.ul 
        variants={menuVariants}
        initial="closed"
        animate={isMobileOpen ? "open" : "closed"}
        className={`lg:hidden flex flex-col ${!isMobileOpen && 'hidden'} px-3 overflow-hidden`}>
            <motion.li
                whileTap={{ translateY: 1, scale: 0.9 }}
                whileHover={{ translateY: -3 }}
                className="m-4 lg:hidden"
            >
                <NavLink to='/about'>About</NavLink>
            </motion.li>
            <motion.li
                whileTap={{ translateY: 1, scale: 0.9 }}
                whileHover={{ translateY: -3 }}
                className="m-4 lg:hidden"
            >
                <NavLink to='/skills'>Skills</NavLink>
            </motion.li>
            <motion.li
                whileTap={{ translateY: 1, scale: 0.9 }}
                whileHover={{ translateY: -3 }}
                className="m-4 lg:hidden"
            >
                <NavLink to='/experience'>Experience</NavLink>
            </motion.li>
            <motion.li
                whileTap={{ translateY: 1, scale: 0.9 }}
                whileHover={{ translateY: -3 }}
                className="m-4 lg:hidden"
            >
                <NavLink to='/contact'>Contact</NavLink>
            </motion.li>
        </motion.ul>
    </nav>
  )
}

export default Nav;

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import logo from '../assets/d-logo.png';

const Nav = () => {
  return (
    <nav className="flex bg-indigo-700 h-10 items-center">
        <ul className="flex justify-start">
        <motion.li
            whileTap={{ translateY: 1, scale: 0.9 }}
            whileHover={{ translateY: -3 }}
          >
            <NavLink to='/'><img className="w-9" src={logo} /></NavLink>
        </motion.li>
        <motion.li
            whileTap={{ translateY: 1, scale: 0.9 }}
            whileHover={{ translateY: -3 }}
          >
            <NavLink to='/about'>About</NavLink>
        </motion.li>
        <motion.li
            whileTap={{ translateY: 1, scale: 0.9 }}
            whileHover={{ translateY: -3 }}
          >
            <NavLink to='/skills'>Skills</NavLink>
        </motion.li>
        <motion.li
            whileTap={{ translateY: 1, scale: 0.9 }}
            whileHover={{ translateY: -3 }}
          >
            <NavLink to='/experience'>Experience</NavLink>
        </motion.li>
        <motion.li
            whileTap={{ translateY: 1, scale: 0.9 }}
            whileHover={{ translateY: -3 }}
          >
            <NavLink to='/contact'>Contact</NavLink>
        </motion.li>
        </ul>
    </nav>
  )
}

export default Nav
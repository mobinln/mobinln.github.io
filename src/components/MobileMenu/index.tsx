import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import classes from "./MobileMenu.module.css";

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <motion.div
      initial="closed"
      transition={{ bounce: 0 }}
      animate={open ? "open" : "closed"}
      variants={{
        open: { y: 0 },
        closed: { y: "-100%" },
      }}
      className={classes.menu}
    >
      <div className={classes.top}>
        <h3 className="playfair-text">Mobin</h3>
        <div onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
      </div>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? classes.active : undefined)} onClick={onClose}>
            Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="portfolio"
            className={({ isActive }) => (isActive ? classes.active : undefined)}
            onClick={onClose}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="contact" className={({ isActive }) => (isActive ? classes.active : undefined)} onClick={onClose}>
            Contact
          </NavLink>
        </li>
      </ul>
    </motion.div>
  );
}

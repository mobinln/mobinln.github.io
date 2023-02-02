import MobileMenu from "components/MobileMenu";
import { useState } from "react";
import MediaQuery from "react-responsive";
import { NavLink, Outlet } from "react-router-dom";

import { breakpoints } from "styles/constants";
import classes from "./main.module.css";

export default function MainLayout() {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    document.body.classList.add("modal-open");
    setOpen(true);
  };

  const handleCloseMenu = () => {
    document.body.classList.remove("modal-open");
    setOpen(false);
  };

  return (
    <>
      <MediaQuery maxHeight={breakpoints.sm}>
        <MobileMenu open={open} onClose={handleCloseMenu} />
      </MediaQuery>
      <div className={classes.wrapper}>
        <div className={classes.card}>
          <header>
            <h3 className="playfair-text">Mobin</h3>
            <MediaQuery maxHeight={breakpoints.sm}>
              <div onClick={handleOpenMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </div>
            </MediaQuery>
            <MediaQuery minWidth={breakpoints.sm}>
              <nav>
                <NavLink to="/" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                  Me
                </NavLink>
                <NavLink to="portfolio" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                  Portfolio
                </NavLink>
                <NavLink to="contact" className={({ isActive }) => (isActive ? classes.active : undefined)}>
                  Contact
                </NavLink>
              </nav>
            </MediaQuery>
          </header>
          <main>
            <Outlet />
          </main>
          <footer>
            <p>
              Created with ❤ by
              <a href="https://github.com/mobinln" target="_blank" rel="noopener noreferrer">
                mobinln
              </a>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

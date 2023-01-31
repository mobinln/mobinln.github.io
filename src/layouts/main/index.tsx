import { NavLink, Outlet } from "react-router-dom";
import classes from "./main.module.css";

export default function MainLayout() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <header>
          <h3 className="playfair-text">Mobin</h3>
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
  );
}

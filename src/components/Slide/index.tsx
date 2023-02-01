import { ReactNode } from "react";
import classes from "./slide.module.css";

import img from "assets/images/leaf_fall.jpg";

export default function Slide({ children, title }: { title: string; children: ReactNode }) {
  return (
    <div className={classes.slide}>
      <h3>{title}</h3>
      <img src={img} alt="A closeup of a leaf in fall" />
      {children}
    </div>
  );
}

import { ReactNode } from "react";
import classes from "./slide.module.css";

export default function Slide({ children, title, img }: { title: string; children: ReactNode; img: string }) {
  return (
    <div className={classes.slide}>
      <h3>{title}</h3>
      <img src={img} alt="A closeup of a leaf in fall" />
      {children}
    </div>
  );
}

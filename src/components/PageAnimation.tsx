import { ReactNode } from "react";
import { motion } from "framer-motion";

const pageVariants = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "-5%",
  },
};

export default function PageAnimation({ children }: { children: ReactNode }) {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={pageVariants} style={{ display: "flex" }}>
      {children}
    </motion.div>
  );
}

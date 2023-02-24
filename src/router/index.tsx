import React from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import MainLayout from "layouts/main";
import PageAnimation from "components/PageAnimation";

import Me from "pages/me";
import Contact from "pages/contact";
import Portfolio from "pages/portfolio";

export default function Router() {
  const location = useLocation();
  const element = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <PageAnimation>
              <Me />
            </PageAnimation>
          ),
        },
        {
          path: "portfolio",
          element: (
            <PageAnimation>
              <Portfolio />
            </PageAnimation>
          ),
        },
        {
          path: "contact",
          element: (
            <PageAnimation>
              <Contact />
            </PageAnimation>
          ),
        },
      ],
    },
  ]);

  if (!element) {
    return null;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}

import { useLocation, useRoutes } from "react-router-dom";
import MainLayout from "layouts/main";

import Index from "pages/me";
import { AnimatePresence } from "framer-motion";
import PageAnimation from "components/PageAnimation";
import React from "react";

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
              <Index />
            </PageAnimation>
          ),
        },
        {
          path: "portfolio",
          element: (
            <PageAnimation>
              <div>Portfolio</div>
            </PageAnimation>
          ),
        },
        {
          path: "contact",
          element: (
            <PageAnimation>
              <div>Contact</div>
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

import "./Layout.css";

import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

const Navbar = lazy(() => import("../navbar/Navbar"));
const Footer = lazy(() => import("../footer/Footer"));
const Loading = lazy(() => import("../fallback/Loading"));

const Layout = () => (
  <main className="layout">
    <Suspense
      fallback={
        <nav>
          <Loading message="Ladataan navbaaar..." />
        </nav>
      }
    >
      <Navbar />
    </Suspense>
    <div className="layout-content">
      <Outlet />
    </div>
    <Suspense
      fallback={
        <footer>
          <Loading message="Ladataan footer..." />
        </footer>
      }
    >
      <Footer />
    </Suspense>
  </main>
);

export default Layout;

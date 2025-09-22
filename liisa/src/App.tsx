import { lazy, Suspense, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/shared/fallback/Loading";
import { useBreakpoint } from "./hooks/useBreakpoint";
import { useMobileMenu } from "./hooks/useMobileMenu";

const Layout = lazy(() => import("./components/shared/layout/Layout"));
const LandingPage = lazy(() => import("./pages/landing/LandingPage"));
const TaidePage = lazy(() => import("./pages/taide/TaidePage"));
const TyopajatPage = lazy(() => import("./pages/tyopajat/TyopajatPage"));
const EsityksetPage = lazy(() => import("./pages/esitykset/EsityksetPage"));
const BioPage = lazy(() => import("./pages/bio/BioPage"));
const YhteystiedotPage = lazy(
  () => import("./pages/yhteystiedot/YhteystiedotPage")
);

function App() {
  const { closeMenu } = useMobileMenu();
  const isMobile = useBreakpoint(900);

  useEffect(() => {
    if (!isMobile) {
      closeMenu();
    }
  }, [isMobile, closeMenu]);

  console.log("RENDER");

  return (
    <Suspense fallback={<Loading message="" extraClass="loading-100" />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/taide" element={<TaidePage />} />
          <Route path="/tyopajat" element={<TyopajatPage />} />
          <Route path="/esitykset" element={<EsityksetPage />} />
          <Route path="/bio" element={<BioPage />} />
          <Route path="/yhteystiedot" element={<YhteystiedotPage />} />
          <Route
            path="/loading"
            element={<Loading extraClass="loading-100" />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

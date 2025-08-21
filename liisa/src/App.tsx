import { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/shared/fallback/Loading";

const Layout = lazy(() => import("./components/shared/layout/Layout"));
const LandingPage = lazy(() => import("./pages/landing/LandingPage"));

function App() {
  return (
    <Suspense fallback={<Loading extraClass="loading-100" />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
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

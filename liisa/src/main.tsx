import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { MobileMenuProvider } from "./contexts/MobileMenuContext.ts";

createRoot(document.getElementById("root")!).render(
  <MobileMenuProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MobileMenuProvider>
);

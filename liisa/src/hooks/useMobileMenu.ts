import { use } from "react";
import {
  MobileMenuContext,
  type MobileMenuContextType,
} from "../contexts/MobileMenuContext";

export const useMobileMenu = (): MobileMenuContextType => {
  const context = use(MobileMenuContext);

  if (!context) {
    throw new Error("useMobileMenu must be used within a MobileMenuProvider");
  }

  return context;
};

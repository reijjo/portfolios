import {
  createContext,
  createElement,
  useCallback,
  useState,
  type ReactNode,
} from "react";

export interface MobileMenuContextType {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  openMenu: () => void;
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(
  undefined
);

interface MobileMenuProviderProps {
  children: ReactNode;
}

export const MobileMenuProvider = ({ children }: MobileMenuProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback((): void => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback((): void => {
    setIsOpen(false);
  }, []);

  const openMenu = useCallback((): void => {
    setIsOpen(true);
  }, []);

  const value: MobileMenuContextType = {
    isOpen,
    toggleMenu,
    closeMenu,
    openMenu,
  };

  return createElement(MobileMenuContext.Provider, { value }, children);
};

export { MobileMenuContext };

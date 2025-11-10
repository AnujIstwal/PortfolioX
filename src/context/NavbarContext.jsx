import { useState } from "react";
import { NavbarContext } from "./NavbarContextFile";

export function NavbarProvider({ children }) {
  const [activePage, setActivePage] = useState("home");
  return (
    <NavbarContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </NavbarContext.Provider>
  );
}

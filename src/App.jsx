import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import { useState } from "react";
import Sidbar from "./components/Sidebar";

function App() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuOpen() {
    setIsMenuOpen((isOpen) => !isOpen);
  }

  function handleOpenMenu(menu) {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  }
  return (
    <main>
      <Nav
        openMenu={openMenu}
        onHandle={handleOpenMenu}
        onHandleMenu={handleMenuOpen}
        isMenuOpen={isMenuOpen}
      />
      {isMenuOpen && <Sidbar openMenu={openMenu} onHandle={handleOpenMenu} />}

      <HeroSection openMenu={openMenu} />
    </main>
  );
}

export default App;

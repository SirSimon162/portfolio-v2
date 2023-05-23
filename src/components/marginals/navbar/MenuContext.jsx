import { createContext } from 'react';

//context to control nav opening

const MenuContext = createContext({
  menuOpen: null,
  toggleMenuOpen: null,
});

export default MenuContext
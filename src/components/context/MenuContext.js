// MenuContext.js
import React, { createContext, useState } from 'react';

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [activeIndex,setActiveIndex]=useState(0)

  return (
    <MenuContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;

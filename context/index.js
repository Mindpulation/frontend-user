import React, { useState } from "react";

export const MenuContext = React.createContext({});

export default function Context({children}){

  const [staMenu, setStaMenu] = useState(false)

  return(
    <MenuContext.Provider value={[staMenu, setStaMenu]}>
      {children}
    </MenuContext.Provider>
  )

}


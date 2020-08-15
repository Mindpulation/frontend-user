import React, { useState } from "react";

export const MenuContext = React.createContext({});
export const MCheckoutContext = React.createContext({});

export default function Context({children}){

  const [staMenu, setStaMenu] = useState(false)
  const [staModalCheckout, setStaModalCheckout] = useState(false)

  return(
    <MCheckoutContext.Provider value={[staModalCheckout, setStaModalCheckout]}> 
      <MenuContext.Provider value={[staMenu, setStaMenu]}>
        {children}
      </MenuContext.Provider>
    </MCheckoutContext.Provider>
  )

}


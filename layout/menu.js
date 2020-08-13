import Nav from "../component/nav/nav.js";
import Altmenu from "../component/nav/altmenu.js";

import s from '../styles/layout/Menu.module.css'

const LMenu = ({children}) => {
  return(
    <div>   
      <Nav className={s.containerNav}></Nav>         
      <Altmenu className={s.containerAlt}></Altmenu>
      <div className={s.containerBod}>
        {children}
      </div>            
    </div>
  );
}

export default LMenu;
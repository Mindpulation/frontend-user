import Nav from "../component/nav/nav.js";
import Altmenu from "../component/nav/altmenu.js";

import s from '../styles/layout/DashMenu.module.css'

const DLMenu = ({children}) => {
  return(
    <React.Fragment>   
      <Nav className={s.containerNav}></Nav>         
      <Altmenu className={s.containerAlt}></Altmenu>
      <div className={s.containerBod}>
        {children}
      </div>            
    </React.Fragment>
  );
}

export default DLMenu;
import Nav from "../component/nav/nav.js";
import Altmenu from "../component/nav/altmenu.js";

import s from '../styles/layout/Menu.module.css'

const LMenu = ({children}) => {
  return(
    <div>      
      <Nav></Nav>
      <div className={s.containerBod}>
        {children}
      </div>
      <Altmenu></Altmenu>
    </div>
  );
}

export default LMenu;
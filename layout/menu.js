import Nav from "../component/nav/nav.js";

import s from '../styles/layout/Menu.module.css'

const LMenu = ({children}) => {
  return(
    <div>      
      <Nav></Nav>
      <div className={s.containerBod}>
        {children}
      </div>
    </div>
  );
}

export default LMenu;
import Head from "next/head";

import s from '../../styles/Menu.module.css'
import { useContext } from "react";

import {MenuContext} from "../../context/index.js";

const Menu = () => {

  const [staMenu,] = useContext(MenuContext);

  if(staMenu === true){
    return(    
      <div>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>    
        <div className={s.boxMenu}>          
          <div className={s.txtContainerBold}>
            Masuk
          </div>        
          <div className={s.txtContainer}>
            Daftar
          </div>
          <div className={s.lineHr}></div>
        </div>        
      </div>
    )
  }

  else{
    return(
      <div></div>
    )
  }

}

export default Menu;
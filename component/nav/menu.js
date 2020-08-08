import Head from "next/head";

import s from '../../styles/component/nav/Menu.module.css'
import { useContext } from "react";

import {MenuContext} from "../../context/index.js";
import Link from "next/link";

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
          
          <Link href="/login">
            <div className={s.txtContainerBold}>Log in</div>
          </Link>        
          
          <Link href="/register">
            <div className={s.txtContainer}>Sign up</div>
          </Link>

          <div className={s.lineHr}></div>
          
          <div className={s.txtContainer}>
            Your saved
          </div>
          
          <div className={s.txtContainer}>
            Look at the cart
          </div>
          
          <div className={s.txtContainer}>
            Help
          </div>
          
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
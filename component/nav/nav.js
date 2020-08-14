import { useContext } from 'react';

import Link from 'next/link'
import Head from "next/head";

import s from '../../styles/component/nav/Nav.module.css'

import Menu from './menu'

import { MenuContext } from "../../context/index.js";

import { FaUserCircle, FaSearch } from "react-icons/fa";
import { MdMenu } from "react-icons/md";


const Nav = () => {  

  const [staMenu,setStaMenu] = useContext(MenuContext);

  return(

    <div>

      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>      

      <div className={s.wrapNav}>

        <header className={s.header}>

          <span className={s.logo}>LOGO</span>

          <nav className={s.nav}>
            <div className={s.wrapSearch}>
              <input className={s.inputSearch} placeholder={"Mau cari apa hari ini?"}></input>            
              <button className={s.btnSearch}><FaSearch className={s.icon} size={"1.3em"} ></FaSearch></button>
            </div>
          </nav>

          <div>
            <div className={s.btnProfile} onClick={()=>{setStaMenu(!staMenu)}} >
              <MdMenu className={s.icon} size={"1.2em"}></MdMenu>
              <FaUserCircle className={s.icon} size={"1.5em"}></FaUserCircle>
            </div>            
            <Menu></Menu> 
          </div>

        </header>

      </div>           
        
    </div>


  )

}

export default Nav;
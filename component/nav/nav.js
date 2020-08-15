import { useContext } from 'react';

import Head from "next/head";

import s from '../../styles/component/nav/Nav.module.css'

import Menu from './menu'

import { MenuContext } from "../../context/index.js";

import { FaUserCircle, FaSearch } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

import { useRouter } from "next/router";


const Nav = () => {  

  const router = useRouter();

  let cari = new String();

  const atSearch = (payload = new String()) => {    
    if(payload != ""){router.push("/search/[name]", "/search/"+payload);}    
  }

  const atKeyup = (e, payload) => {
    if(e.key === "Enter"){
      atSearch(payload);
    }
  }

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
              <input className={s.inputSearch} onChange={(e)=>{cari = e.target.value}}  onKeyUp={(e)=>{atKeyup(e, cari)}} placeholder={"Mau cari apa hari ini?"}></input>            
              <button className={s.btnSearch} onClick={()=>{atSearch(cari)}}><FaSearch className={s.icon} size={"1.3em"} ></FaSearch></button>
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
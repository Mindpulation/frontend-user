import Link from 'next/link'
import Head from "next/head";

import s from '../../styles/Nav.module.css'

import { FaUserCircle, FaSearch } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

const Nav = () => {

  return(

    <div>

      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <header className={s.header}>

        <span className={s.logo}>LOGO</span>

        <nav className={s.nav}>
          <div className={s.wrapSearch}>
            <input className={s.inputSearch} placeholder={"Mau cari apa hari ini?"}></input>            
            <button className={s.btnSearch}><FaSearch className={s.icon} size={"1.3em"} ></FaSearch></button>
          </div>
        </nav>

        <Link href="/">
          <div className={s.btnProfile}>
            <MdMenu className={s.icon} size={"1.2em"}></MdMenu>
            <FaUserCircle className={s.icon} size={"1.5em"}></FaUserCircle>
          </div>
        </Link>

      </header>
        
    </div>


  )

}

export default Nav;
import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Verify.module.css';

import { useState } from 'react';

const Verif = () => {

  const [kode, setKode] = useState("");  
  
  const [k1, setK1] = useState("");
  const [k2, setK2] = useState("");
  const [k3, setK3] = useState("");
  const [k4, setK4] = useState("");
  const [k5, setK5] = useState("");
  const [k6, setK6] = useState("");

  const atOnChange = (e,i) => {

    if(i === 0){
      setK1(e.value);
    }

    else if(i === 1){
      setK2(e.value);
    }

    else if(i === 2){
      setK3(e.value);
    }

    else if(i === 3){
      setK4(e.value);
    }

    else if(i === 4){
      setK5(e.value);
    }

    else if(i === 5){
      setK6(e.value);
    }

  }

  const atOnKeyUp = (e) => {    

    if(e.value.length === e.maxLength){
      let n = e.nextElementSibling;
      if(n === null){
        return false;
      }
      else{
        n.focus();
      }
    }        
  }

  const atClick = () => {
    let one = k1.concat(k2).concat(k3).concat(k4).concat(k5).concat(k6);
    console.log(one);
  }

  return(

    <div className={styles.containerFull}>
      
      <Head>
        <title>KotakJualan-Verify</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <header className={styles.header}>
        <h1>Kotakjualan</h1>
      </header>
      
      <main className={styles.main}>
      
        <div className={styles.card}>
          
          <div className={styles.headsign}>

            <div className={styles.colCenter}>
              <label>Masukan Kode Verifikasi</label>
              <p>Untuk memverifikasi email anda. Kami telah mengirim kode verifikasi ke </p>
            </div>

          </div>

          <div className={styles.colCenter}>
            
            <span className={styles.span}>Kode Verifikasi</span>
            <div className={styles.rowCenter}>
              <input onKeyUp={(e)=>{atOnKeyUp(e.target)}} onChange={(e)=>{atOnChange(e.target,0)}} className={styles.input} maxLength="1" autoComplete="off"></input>
              <input onKeyUp={(e)=>{atOnKeyUp(e.target)}} onChange={(e)=>{atOnChange(e.target,1)}} className={styles.input} maxLength="1" autoComplete="off"></input>
              <input onKeyUp={(e)=>{atOnKeyUp(e.target)}} onChange={(e)=>{atOnChange(e.target,2)}} className={styles.input} maxLength="1" autoComplete="off"></input>
              <input onKeyUp={(e)=>{atOnKeyUp(e.target)}} onChange={(e)=>{atOnChange(e.target,3)}} className={styles.input} maxLength="1" autoComplete="off"></input>
              <input onKeyUp={(e)=>{atOnKeyUp(e.target)}} onChange={(e)=>{atOnChange(e.target,4)}} className={styles.input} maxLength="1" autoComplete="off"></input>
              <input onKeyUp={(e)=>{atOnKeyUp(e.target)}} onChange={(e)=>{atOnChange(e.target,5)}} className={styles.input} maxLength="1" autoComplete="off"></input>
            </div>
            
          </div>
          
          <div className={styles.rowCenter}>
            <button className={styles.button} onClick={()=>{atClick()}} >Lanjut</button>
            <span className={styles.span}>
              Belum mendapatkan email?  
              <Link href="#"><a className={styles.Link}> Kirim Ulang</a></Link>
            </span>
          </div>      

        </div>
        
      </main>

    </div>

  );

}

export default Verif;
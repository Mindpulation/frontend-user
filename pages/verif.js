import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Verify.module.css';

import { useState } from 'react';

const Verif = () => {

  const [kode, setKode] = useState();  

  // atOnChange = () => {    
  //   document.getElementsByTagName("input");
  // }

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
              <input className={styles.input} maxLength="1" autoComplete="off"></input>
              <input className={styles.input} maxLength="1" autoComplete="off"></input>
              <input className={styles.input} maxLength="1" autoComplete="off"></input>
              <input className={styles.input} maxLength="1" autoComplete="off"></input>
              <input className={styles.input} maxLength="1" autoComplete="off"></input>
              <input className={styles.input} maxLength="1" autoComplete="off"></input>
            </div>
            
          </div>
          
          <div className={styles.rowCenter}>
            <button className={styles.button}>Lanjut</button>
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
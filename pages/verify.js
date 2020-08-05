import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Verify.module.css';

const verify = () => (
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
            <h3>Verifikasi Account</h3>
            <p>Kami telah mengirim email kode verifikasi</p>
            <p>Belum mendapatkan email? <Link href="#"><a className={styles.Link}>Kirim Ulang</a></Link></p>
          </div>

        </div>

        <div className={styles.row}>
          
          <div className={styles.col}>
            <input className={styles.input} placeholder="Kode Verifikasi"></input>
            <span className={styles.span}>Masukan Kode verifikasi</span>
          </div>
          
        </div>
        
        <div className={styles.rowCenter}>
          <button className={styles.button}>Lanjut</button>
        </div>      

      </div>
      
    </main>

  </div>
);

export default verify;
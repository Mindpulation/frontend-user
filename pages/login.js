import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Login.module.css';

const login = () => (
  <div className={styles.containerFull}>
    
    <Head>
      <title>KotakJualan-Login</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    
    <header className={styles.header}>
      <h1>Kotakjualan</h1>
    </header>
    
    <main className={styles.main}>
    
      <div className={styles.card}>
        
        <div className={styles.headsign}>
          <h4>Log in</h4>
          <Link href="/register"><a className={styles.BoldLink}>Sign up</a></Link>
        </div>

        <div className={styles.row}>
          
          <div className={styles.col}>
            <label>Email</label>
            <input className={styles.input}></input>
            <span className={styles.span}>contoh : example@mail.dot</span>
          </div>
          
          <div className={styles.col}>
            <label>Password</label>
            <input className={styles.input} type={"password"} ></input>
            <span className={styles.span}>Masukan password</span>
          </div>

        </div>
        
        <Link href="/"><a className={styles.LinkForget}>Lupa Sandi?</a></Link>
        
        <div className={styles.rowCenter}>
          <button className={styles.button}>Masuk</button>
        </div>      

      </div>
      
    </main>

  </div>
);

export default login;
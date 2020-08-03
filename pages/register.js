import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Login.module.css';

const register = () => (
  <div className={styles.containerFull}>
    
    <Head>
      <title>KotakJualan-Register</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    
    <header className={styles.header}>
      <h1>Kotakjualan</h1>
    </header>

    <main className={styles.main}>
    
      <div className={styles.card}>
    
        <div className={styles.headsign}>
          <h4>
            Sign up
          </h4>
          <Link href="/login"><a className={styles.BoldLink}>Log in</a></Link>
        </div>

        <div className={styles.row}>
        
          <div className={styles.col}>
            <label>Username</label>
            <input className={styles.input}></input>
            <span className={styles.span}>Masukan username</span>
          </div>
        
          <div className={styles.col}>
            <label>Email</label>
            <input className={styles.input} type={"email"} ></input>
            <span className={styles.span}>contoh : example@mail.dot</span>
          </div>
        
          <div className={styles.col}>
            <label>Password</label>
            <input className={styles.input} type={"password"} ></input>
            <span className={styles.span}>Masukan password</span>
          </div>
        
        </div>
        
        <div className={styles.rowCenter}>
          <button className={styles.button}>Selanjutnya</button>
        </div>
        
        <div className={styles.row}>                  
          
          <p className={styles.agree}>
            Saya menyetujui             
            <a className={styles.Link}> EULA</a> dan                        
            <a className={styles.Link}> Privacy Policy</a>           
          </p>

        </div>
        
      </div>
    </main>

  </div>
);

export default register;
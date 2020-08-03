import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Login.module.css';

const login = () => (
  <div className={styles.containerFull}>
    <Head>
      <title>KotakJualan-Login</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className={styles.header}>
      <h1>KotakJualan</h1>
    </header>
    <main className={styles.main}>
    <div className={styles.card}>
      <div className={styles.headsign}>
        <h3>
          Masuk
        </h3>
        <a className={styles.BoldLink}><Link href="/register">Daftar</Link></a>
      </div>

      <form>
        <div className={styles.row}>
          <div className={styles.col}>
            <label>Email</label>
            <input className={styles.input}></input>
            <span className={styles.span}>contoh : example@mail.dot</span>
          </div>
          <div className={styles.col}>
            <label>Password</label>
            <input className={styles.input}></input>
            <span className={styles.span}>masukan password</span>
          </div>
        </div>
        <a className={styles.LinkForget}><Link href="/">Lupa Sandi?</Link></a>
        <div className={styles.rowCenter}>
          <button className={styles.button}>Masuk</button>
        </div>
      </form>
    </div>
    </main>

  </div>
);

export default login;
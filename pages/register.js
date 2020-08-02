import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Login.module.css';

const register = () => (
  <div className={styles.containerFull}>
    <Head>
      <title>KotakJualan-Register</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className={styles.header}>
      <h1>KotakJualan</h1>
    </header>
    <main className={styles.main}>
      <div className={styles.card}>
        <div className={styles.headsign}>
          <h3>
            Daftar
          </h3>
          <a className={styles.BoldLink}><Link href="/login">Masuk</Link></a>
        </div>

        <form>
          <div className={styles.row}>
            <div className={styles.col}>
              <label>Username</label>
              <input className={styles.input}></input>
              <span className={styles.span}>masukan username</span>
            </div>
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
          <div className={styles.rowCenter}>
            <button className={styles.button}>Daftar</button>
          </div>
          <div className={styles.row}>
            <input type="checkbox" />
            <p className={styles.agree}>
              Saya menyetujui 
              <a className={styles.Link}>
                <Link href="#">EULA</Link>
              </a> dan
              <a className={styles.Link}>
                <Link href="#">Privacy Policy</Link>
              </a>
            </p>
          </div>
        </form>
      </div>
    </main>

  </div>
);

export default register;
import Head from 'next/head';
import styles from '../styles/Sign.module.css';

const Signin = () => (
    <div className={styles.container}>
        <Head>
            <title>KotakJualan-Signup</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <h1>
                KotakJualan
            </h1>
            
            <div className={styles.card}>
                <div className={styles.row}>
                    <h3>
                        Masuk
                    </h3>
                </div>

                <form>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <label>Email</label>
                            <input className={styles.input}></input>
                        </div>
                        <div className={styles.col}>
                            <label>Password</label>
                            <input className={styles.input}></input>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    </div>
);

export default Signin;
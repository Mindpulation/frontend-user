import Head from 'next/head';
import Link from 'next/link';
import Styles from '../../styles/page/Profile.module.css';

const Profile = () => (
  <div className={Styles.FuContainer}>
    <Head>
      <title>MyProfile</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <div className={Styles.Header}></div>

    <div className={Styles.Container}>
      <div className={Styles.Desktop}>

        <div className={Styles.Side}>
          <div className={Styles.CardProfile}>
            <div className={Styles.col}>

              <img alt="foto profile"></img>

              <Link href="#"><a>Update Photo</a></Link>

              <div className={Styles.SpecialUser}>
                <p className={Styles.bold}>Verified Account<span> ✔</span></p>
                <p>Kamu belum menjadi premium member</p>
                <button>Be Premium !</button>
              </div>

              <div className={Styles.linehr}></div>

              <div className={Styles.CardSaldo}>
                <div className={Styles.col}>
                  
                  <p>Dompet</p>

                  <div className={Styles.ColSaldo}>
                    <p>Saldo</p>
                    <div className={Styles.Saldo}>
                      <span>Sisa Saldo</span>
                      <span>Rp 500.000</span>
                    </div>
                    <button>Top Up</button>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        <div className={Styles.Main}> 
          <div className={Styles.col}>
            <div className={Styles.MainHead}>
              
            </div>
          </div>
        </div>
        
      </div>
      <div className={Styles.Mobile}>

        <div className={Styles.Side}>
          <div className={Styles.CardProfile}>
            <div className={Styles.col}>

              <img alt="foto profile"></img>

              <Link href="#"><a>Update Photo</a></Link>

              <div className={Styles.SpecialUser}>
                <p className={Styles.bold}>Verified Account<span> ✔</span></p>
                <p>Kamu belum menjadi premium member</p>
                <button>Be Premium !</button>
              </div>

              <div className={Styles.linehr}></div>

              <div className={Styles.CardSaldo}>
                <div className={Styles.col}>
                  
                  <p>Dompet</p>

                  <div className={Styles.ColSaldo}>
                    <p>Saldo</p>
                    <div className={Styles.Saldo}>
                      <span>Sisa Saldo</span>
                      <span>Rp 500.000</span>
                    </div>
                    <button>Top Up</button>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        <div className={Styles.Main}>

        </div>

      </div>
    </div>

  </div>
)

export default Profile;
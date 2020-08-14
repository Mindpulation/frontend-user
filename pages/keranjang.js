import Head from 'next/head';
import { useContext } from "react";
import Styles from "../styles/page/Cart.module.css";
import Modalorder from "../component/modal/order.js";
import { MCheckoutContext } from "../context/index.js";

const Keranjang = () => {

  const [staModalCheckout] = useContext(MCheckoutContext);

  let component;

  if(staModalCheckout === false)  {
    component = <div></div>
  }
  else{
    component = <Modalorder></Modalorder>
  }

  return(
    <div>
      {component}

      <Head>
        <title>{'name product'}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <div className={Styles.FuContainer}>
        <div className={Styles.Main}>
          <div className={Styles.MainCon}>

            <div className={Styles.Content}>
              
            </div>

            <div className={Styles.Side}>
              <div className={Styles.BoxCard}>
                <div className={Styles.Card}>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export  default Keranjang;
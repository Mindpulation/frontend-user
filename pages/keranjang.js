import Head from 'next/head';
import { useContext } from "react";
import Styles from "../styles/page/Cart.module.css";
import Modalorder from "../component/modal/order.js";
import { MCheckoutContext } from "../context/index.js";
import { IoMdTrash } from "react-icons/io";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { BsDashSquareFill } from "react-icons/bs";

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

            <div className={Styles.ConHeader}>
              <h1>Review Your Cart</h1>
            </div>

            <div className={Styles.LineHr}></div>

            <div className={Styles.Content}>

              <div className={Styles.SideContent}>

                <div className={Styles.GroupList}>

                  <div className={Styles.TittleGroup}>
                    <h1>Nama Toko</h1>
                  </div>

                  <div className={Styles.ItemList}>

                    <div className={Styles.Item}>
                      <div className={Styles.InfoItem}>
                        <h1>Product Name hjjsacc kjsack kscbmm asckb</h1>
                        <p>IDR 500.000</p>
                      </div>
                      <div className={Styles.ItemAct}>
                        <button>
                          <IoMdTrash/>
                        </button>
                        <div className={Styles.ItemQty}>
                          <button><BsFillPlusSquareFill/></button>
                          <input type="number"></input>
                          <button><BsDashSquareFill/></button>
                        </div>
                      </div>
                    </div>

                    <div className={Styles.Item}>
                      <div className={Styles.InfoItem}>
                        <h1>Product Name</h1>
                        <p>IDR 50.000</p>
                      </div>
                      <div className={Styles.ItemAct}>
                        <button>
                          <IoMdTrash/>
                        </button>
                        <div className={Styles.ItemQty}>
                          <button><BsFillPlusSquareFill/></button>
                          <input type="number"></input>
                          <button><BsDashSquareFill/></button>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

                <div className={Styles.GroupList}>

                  <div className={Styles.TittleGroup}>
                    <h1>Nama Toko</h1>
                  </div>

                  <div className={Styles.ItemList}>

                    <div className={Styles.Item}>
                      <div className={Styles.InfoItem}>
                        <h1>Product Name</h1>
                        <p>IDR 50.000</p>
                      </div>
                      <div className={Styles.ItemAct}>
                        <button>
                          <IoMdTrash/>
                        </button>
                        <div className={Styles.ItemQty}>
                          <button><BsFillPlusSquareFill/></button>
                          <input type="number"></input>
                          <button><BsDashSquareFill/></button>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              <div className={Styles.Side}>
                <div className={Styles.BoxCard}>
                  <div className={Styles.Card}>

                    <div className={Styles.Preview}>
                      <img src="/image/dash2.webp"></img>
                      <div className={Styles.PreviewDetail}>
                        <h1>Product Namei oasdkj jkadkk njasd</h1>
                        <p>IDR 50.000</p>
                      </div>
                    </div>

                    <div className={Styles.Linehr}></div>

                    <div className={Styles.ConPreview}>
                      <h1>Summary Bill</h1>
                      <div>
                        <p>Total Bill</p>
                        <p>IDR 150.000</p>
                      </div>
                    </div>

                    <div className={Styles.CheckOut}>
                      <button>CheckOut</button>
                    </div>
                    

                  </div>
                </div>
              </div>

              <div className={Styles.Footer}>
                
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export  default Keranjang;
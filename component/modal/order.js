import styles from '../../styles/page/Modal.module.css';
import {AiOutlineLeft} from 'react-icons/ai'
import {FiShoppingBag} from 'react-icons/fi'
import {RiWallet2Line} from 'react-icons/ri'
import {RiCloseLine} from 'react-icons/ri'
import { useContext } from "react";
import { MCheckoutContext } from "../../context/index.js";


const Modalorder = () => {

    const [staModalCheckout, setStaModalCheckout] = useContext(MCheckoutContext);


    return(
        <div className={styles.outer}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.cardBody}>
                        <div className={styles.topBar}>
                            <button className={styles.closeBar} onClick={()=>setStaModalCheckout(false)}>
                                <RiCloseLine></RiCloseLine>
                            </button>
                            
                            <FiShoppingBag></FiShoppingBag>
                        </div>
                        <h3 className={styles.title}>Summary</h3>
                        <div className={styles.itemList}>
                            <div className={styles.itemOrder}>
                                <img className={styles.imgOrder} src="/image/adidas.webp"></img>
                                <div className={styles.totalOrder}>
                                    <h4 className={styles.itemTitle}>Adidas Superstar</h4>
                                    <div className={styles.itemTotal}> Total :  1 </div>
                                    <h3 className={styles.itemPrice}>IDR. 105K</h3>
                                </div>
                            </div>
                            <div className={styles.itemOrder}>
                                <img className={styles.imgOrder} src="/image/adidas.webp"></img>
                                <div className={styles.totalOrder}>
                                    <h4 className={styles.itemTitle}>Adidas Superstar</h4>
                                    <div className={styles.itemTotal}> Total :  1 </div>
                                    <h3 className={styles.itemPrice}>IDR. 105K</h3>
                                </div>
                            </div>
                            <div className={styles.itemOrder}>
                                <img className={styles.imgOrder} src="/image/adidas.webp"></img>
                                <div className={styles.totalOrder}>
                                    <h4 className={styles.itemTitle}>Adidas Superstar</h4>
                                    <div className={styles.itemTotal}> Total :  1 </div>
                                    <h3 className={styles.itemPrice}>IDR. 105K</h3>
                                </div>
                            </div>
                            <div className={styles.itemOrder}>
                                <img className={styles.imgOrder} src="/image/adidas.webp"></img>
                                <div className={styles.totalOrder}>
                                    <h4 className={styles.itemTitle}>Adidas Superstar</h4>
                                    <div className={styles.itemTotal}> Total :  1 </div>
                                    <h3 className={styles.itemPrice}>IDR. 105K</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardBottom}>
                        <div className={styles.cardBody}>
                            <div className={styles.subtotal}>
                                <h4>Subtotal</h4>
                                <h4 className={styles.totalPrice}>IDR. 105.000,00</h4>
                            </div>
                            <hr className={styles.line}></hr>
                            <div className={styles.payment}>
                                <div className={styles.subtitle}>
                                    <p>CURRENT METHOD</p>
                                </div>

                                <label className={styles.checkboxStyle} id="checkboxStyle">
                                    <div className={styles.cardPayment}>
                                        <div className={styles.images}>
                                            <RiWallet2Line></RiWallet2Line>
                                        </div>
                                        <div className={styles.titlePayment}>
                                            <h4 className={styles.itemPayment}>Using Payroll</h4>
                                        </div>
                                        <div className={styles.radio}>
                                            <input type="radio" name="pilih" value="payroll" id="payroll" />
                                        </div>
                                    </div>
                                </label>

                                <div >
                                    <button className={styles.button} type="submit">Finish Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Modalorder;
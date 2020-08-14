import styles from '../../styles/page/Modal.module.css';
import {AiOutlineLeft} from 'react-icons/ai'
import {AiFillShopping} from 'react-icons/ai'

const Modalorder = () => {
    return(
        <div className={styles.outer}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.cardBody}>
                        <div className={styles.topBar}>
                            <AiOutlineLeft></AiOutlineLeft>
                            <AiFillShopping></AiFillShopping>
                        </div>
                        <h3 className={styles.title}>Ringkasan</h3>
                        <div className={styles.itemList}>
                            <div className={styles.itemOrder}>
                                <img className={styles.imgOrder} src="/image/adidas.webp"></img>
                                <div className={styles.totalOrder}>
                                    <h4>Adidas Superstar KW Super</h4>
                                    <label className={styles.total}> Total :  1 </label>
                                </div>
                                <label></label>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardBottom}>
                        <div className={styles.cardBody}>
                            <div className={styles.subtotal}>
                                <div>Subtotal</div>
                                <div>IDR. 105.000,00</div>
                            </div>

                            <div className={styles.payment}>
                                <div className={styles.title}>
                                    <p>CURRENT METHOD</p>
                                </div>

                                <label className={styles.checkboxStyle} id="checkboxStyle">
                                    <div className={styles.cardPayment}>
                                        <div className={styles.images}>
                                            <img src="/image/gopay.png" />
                                        </div>
                                        <div className={styles.title}>
                                            <p>GOPAY</p>
                                            <p className={styles.deskripsi}>Default Method</p>
                                        </div>
                                        <div className={styles.radio}>
                                            <input type="radio" name="pilih" value="gopay" id="gopay" />
                                        </div>
                                    </div>
                                </label>

                                <div className={styles.button}>
                                    <button type="submit">Finish Order</button>
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
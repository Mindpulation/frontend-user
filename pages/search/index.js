
import Head from 'next/head';

import Link from 'next/link';

import styles from '../../styles/page/Search.module.css';

import { FaStar } from "react-icons/fa";


const SearchPage = () => (
    <div className={styles.container}>
        <Head>
            <title>KotakJualan - SearchPage</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <div className={styles.search}>
            <div className={styles.date}>
                250+ Sold - Aug 14 - Sep 2020
            </div>
            <div className={styles.searchTitle}>
               <h2>Search - Air Conditioner</h2>
            </div>

            <div className={styles.allProducts}>
                
        

                <div className={styles.cardProducts}>
                    <div className={styles.containerProd}>
                            <div className={styles.best}>
                                {/* Eg: best seller */}
                            </div>
                            <div className={styles.images}>
                                <img src="../image/rate2.webp" />
                            </div>
                            <div className={styles.star}>
                                <FaStar className={styles.rating}/> 
                                <span className={styles.ratingDetail}>4 (10)</span>
                            </div>
                            <div className={styles.deskripsi}>
                           <span> Samsung - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</span>
                            </div>
                            <div className={styles.idr}>
                                IDR. 50,0000
                            </div>
                        </div>
                </div>

                <div className={styles.cardProducts}>
                    <div className={styles.containerProd}>
                        <div className={styles.best}>
                            {/* Eg: best seller */}
                        </div>
                        <div className={styles.images}>
                            <img src="../image/rate2.webp" />
                        </div>
                        <div className={styles.star}>
                            <FaStar className={styles.rating}/>
                            <span className={styles.ratingDetail}>4 (10)</span>
                        </div>
                        <div className={styles.deskripsi}>
                          <span> Samsung - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</span>
                        </div>
                        <div className={styles.idr}>
                            IDR. 50,000
                        </div>
                    </div>
                </div>

                <div className={styles.cardProducts}>
                    <div className={styles.containerProd}>
                        <div className={styles.best}>
                            {/* Eg: best seller */}
                        </div>
                        <div className={styles.images}>
                            <img src="../image/rate2.webp" />
                        </div>
                        <div className={styles.star}>
                            <FaStar className={styles.rating}/>
                            <span className={styles.ratingDetail}>4 (10)</span>
                        </div>
                        <div className={styles.deskripsi}>
                           <span> Samsung - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</span>
                        </div>
                        <div className={styles.idr}>
                            IDR. 50,000
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
       
    </div>
);

export default SearchPage;
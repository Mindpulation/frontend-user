
import Head from 'next/head';
import Menu from "../../layout/menu.js";
import { FaStar } from "react-icons/fa";
import s from '../../styles/page/Search.module.css';


const SearchPage = () => {    
    
  return(

    <Menu>

      <Head>
        <title>KotakJualan - Search Page</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={s.search}>
        
        <div className={s.date}>
          <span>250+ Sold - Aug 14 - Sep 2020</span>            
        </div>

        <div className={s.searchTitle}>
            <span>Search - Air Conditioner</span>
        </div>

        <div className={s.allProducts}>                        

          <div className={s.cardProducts}>
            <div className={s.containerProd}>

              <div className={s.best}>
                {/* Eg: best seller */}
              </div>

              <div className={s.images}>
                <img src="../image/rate2.webp" />
              </div>
                    
              <div className={s.star}>
                <FaStar className={s.rating}/> 
                <span className={s.ratingDetail}>4 (10)</span>
              </div>

              <div className={s.deskripsi}>
                <span> Samsung - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</span>
              </div>
              
              <div className={s.idr}>
                IDR. 50,0000
              </div>

            </div>
          </div>

          <div className={s.cardProducts}>
            <div className={s.containerProd}>

              <div className={s.best}>
                {/* Eg: best seller */}
              </div>

              <div className={s.images}>
                <img src="../image/rate2.webp" />
              </div>
                    
              <div className={s.star}>
                <FaStar className={s.rating}/> 
                <span className={s.ratingDetail}>4 (10)</span>
              </div>

              <div className={s.deskripsi}>
                <span> Samsung - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</span>
              </div>
              
              <div className={s.idr}>
                IDR. 50,0000
              </div>

            </div>
          </div>

          <div className={s.cardProducts}>
            <div className={s.containerProd}>
              
              <div className={s.best}>
                {/* Eg: best seller */}
              </div>

              <div className={s.images}>
                <img src="../image/rate1.webp" />
              </div>

              <div className={s.star}>
                <FaStar className={s.rating}/> 
                <span className={s.ratingDetail}>4 (10)</span>
              </div>

              <div className={s.deskripsi}>
                <span> Samsung - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</span>
              </div>

              <div className={s.idr}>
                IDR. 150,0000
              </div>

            </div>
          </div>

          <div className={s.cardProducts}>
            <div className={s.containerProd}>
              
              <div className={s.best}>
                {/* Eg: best seller */}
              </div>

              <div className={s.images}>
                <img src="../image/rate2.webp" />
              </div>

              <div className={s.star}>
                <FaStar className={s.rating}/>
                <span className={s.ratingDetail}>4 (10)</span>
              </div>

              <div className={s.deskripsi}>
                <span> Samsung - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</span>
              </div>

              <div className={s.idr}>
                IDR. 500,000
              </div>

            </div>
          </div>

          <div className={s.cardProducts}>
            <div className={s.containerProd}>
                
                <div className={s.best}>
                  {/* Eg: best seller */}
                </div>
                
                <div className={s.images}>
                  <img src="../image/rate1.webp" />
                </div>
                
                <div className={s.star}>
                  <FaStar className={s.rating}/>
                  <span className={s.ratingDetail}>4 (10)</span>
                </div>
                
                <div className={s.deskripsi}>
                  <span> Samsung - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</span>
                </div>

                <div className={s.idr}>
                  IDR. 25,000
                </div>

            </div>
        
          </div>
                
        </div>
        
      </div>      

    </Menu>      

  );
}

export default SearchPage;
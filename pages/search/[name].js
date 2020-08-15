
import Head from 'next/head';
import { useRouter } from "next/router";

import Menu from "../../layout/menu.js";

import { FaStar } from "react-icons/fa";

import s from '../../styles/page/Search.module.css';

const date = new Date();

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const getFullDate = () => {
  return `${months[date.getMonth()]} ${date.getDate()}  ${date.getFullYear()}`
}

const SearchPage = () => {    
    
  let now = getFullDate();

  let param = new String();

  const router = useRouter();

  const query = router.query;

  if(query.name != undefined){
    param = query.name;
  }  

  return(

    <Menu>

      <Head>
        <title>KotakJualan - Search Page</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={s.search}>
        
        <div className={s.date}>
          <span>250+ Result - {now}</span>            
        </div>

        <div className={s.searchTitle}>
          <span>Search - {param}</span>
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
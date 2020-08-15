
import Head from 'next/head';
import useSWR from "swr";
import Menu from "../../layout/menu.js";
import s from '../../styles/page/Search.module.css';

import { useRouter } from "next/router";
import { FaStar } from "react-icons/fa";
import { getSearchBarang } from '../../controller/req.js'

const date = new Date();
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const getFullDate = () => {return `${months[date.getMonth()]} ${date.getDate()}  ${date.getFullYear()}`}

export const Card = () => {

  let data = new Array();

  const router = useRouter();
  const query = router.query;

  let param = new String();
  
  if(query.name != undefined){
    param = query.name;                    
  }      

  const tmp = useSWR(`http://103.27.206.22:3000/v1/api/barang/cari/${param}`, getSearchBarang);    
  data = tmp.data;  

  return(
    <div className={s.allProducts}>
    {            
      data.map((e, i)=>
      
      <div className={s.cardProducts} key={i}>
        <div className={s.containerProd}>

          <div className={s.best}>
            {/* Eg: best seller */}            
          </div>

          <div className={s.images}>
            <img src="../image/rate2.webp" />
          </div>
                
          <div className={s.star}>
            <FaStar className={s.rating}/> 
            <span className={s.ratingDetail}>{e.rating} ({e.stok})</span>
          </div>

          <div className={s.deskripsi}>
            <span> Samsung - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</span>
          </div>
          
          <div className={s.idr}>
            IDR. {e.price}
          </div>

        </div>
      </div>    

      )
    } 

    </div>
  )
}

const SearchPage = () => {        

  let data = null;

  let comp

  const router = useRouter();
  const query = router.query;

  let now = getFullDate();
  let param = new String();

  if(query.name != undefined){
    param = query.name;                    
  }      

  const tmp = useSWR(`http://103.27.206.22:3000/v1/api/barang/cari/${param}`, getSearchBarang);  
  
  data = tmp.data;  

  if(data == null || data === undefined){
    comp = <div></div>
  }
  else{
    comp = <Card></Card>
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

        <div>                                  
          {comp}
        </div>
        
      </div>      

    </Menu>      

  );
}

export default SearchPage;
import Head from "next/head";

import s from "../../styles/page/Altprod.module.css";

import { BsStarFill} from "react-icons/bs";

const Nameprod = () => {
  return(
    <div>
    <Head>
      <title>Kotakjualan - Product</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />       
    </Head>

    <div className={s.container}>
      
      <div className={s.Gallery}>
        <div className={s.GalleryCon}>
          <div className={s.GalleryGrid}>

            <div className={s.Grid}>
              <img src="/image/dash1.webp"></img>
            </div>
            <div className={s.Grid}>
              <img src="/image/dash2.webp"></img>
            </div>
            <div className={s.Grid}>
              <img src="/image/dash3.webp"></img>
            </div>
            <div className={s.Grid}>
              <img src="/image/dash4.webp"></img>
            </div>
            <div className={s.Grid}>
              <img src="/image/dash5.webp"></img>
            </div>

          </div>
        </div>
      </div>

      <div className={s.bod}>
        
        <div className={s.col60}>
          
          <div className={s.txthead}>
            <span>Laptop Asus</span>
          </div>
          
          <div className={s.txtdes}>
            <BsStarFill className={s.icon}></BsStarFill>
            <span className={s.rate}>4.96</span>
            <span className={s.qrate}>(155)</span>
          </div>

          <hr className={s.hr}></hr>

          <div className={s.post}>              
            
            <div className={s.user}>              
              <div className={s.txtname}>
                <span>Product post by Rezaaaa</span>
              </div>                
              <span className={s.ci}>Kota Bekasi, Indonesia</span>
            </div>

            <div className={s.poto}>
              <img src="/image/dash3.webp" alt="Profile Toko"/>
            </div>

          </div>            

          <div className={s.txtdet}>
            <span>
              Newly remodeled studio suite, private entrance, located in the Parkside/Upper Sunset area of San Francisco. Studio suite is attached to an occupied family home. Close to restaurants and shops in the West Portal area. Stern Grove Park in walking distance. Ocean Beach, Golden Gate Park, and San Francisco Zoo all within one mile. Transportation on Muni or the street car to anywhere in the city just one block away. Parking in the neighborhood is easy with 24 hour street parking down the street.

              The space
              Enter privately into your own unit of a family home. Unit has a queen size bed and full bath with shower. Kitchenette includes microwave, Keurig coffee machine, toaster oven, refrigerator, silverware, cups, plates, utensils.

              Guest access
              Use of entire in law unit

              Other things to note
              -Public transportation to get anywhere in SF or Bay Area 1 block away.
              -24 hour parking (free) 1 block away
              - Stern Grove .3
              -TPC Harding Park golf course 1.4
              -SFSU 1.4
              -SF Zoo 1.5
              -Twin Peaks 1.7
              -Market street 1.9
              -Golden Gate Park 1.9
              -Olympic club golf course 2.4
              -USF 2.8
              -Cliff house 3.2
              -Lombard Street 4.0
              -Union square 5.0
              -Golden Gate Bridge 5.3
              -AT&T Park 5.4
              -North beach 5.5
              -Pier 39 5.9

              License number
              1095258
            </span>
          </div>

          <div className={s.btn}>
            <button>Read More</button>
          </div>

        </div>

        <div className={s.col40}>

          <div className={s.con}>
            <div className={s.card}>
              
              <div className={s.txtprice}>
                <span className={s.txtcur}>IDR. </span>
                50,000,000
              </div>                          
              
              <div className={s.txtinput}>
                <input type="number" placeholder="Mau berapa?"/>
              </div>
              
              <div className={s.btnAdd}>
                <button>Add to Cart</button>
              </div>

            </div>
          </div>
        </div>
      
      </div>

    </div>
    </div>    
  )
}

export default Nameprod;
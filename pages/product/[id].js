import { useRouter } from "next/router";
import Head from 'next/head';
import Styles from '../../styles/page/Product.module.css';

const Product = () => {

  let add = 0

  const router = useRouter();

  const query = router.query;  

  if(query.id != undefined){
    console.log(query.id);
  }

  const addFunc = () => {
    add++;
    console.log(add);
  }  

  return(
    <div>
      <Head>
        <title>{'name product'}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={Styles.FuContainer}>
        {/* full container */}
        <div className={Styles.Header}>
          <div className={Styles.HeaderCon}>
            <h1>Judul Product</h1>
            <div className={Styles.SubDetail}>
              <span>Ulasan</span>•
              <span>Nama Toko</span>•
              <span>Lokasi Toko</span>
            </div>
          </div>
        </div>
        
        <div className={Styles.Gallery}>
          <div className={Styles.GalleryCon}>
            <div className={Styles.GalleryGrid}>

              <div className={Styles.Grid}>
                <img src="/image/pexels-format-1029757.jpg"></img>
              </div>
              <div className={Styles.Grid}>
                <img src="/image/pexels-hasan-albari-1229861.jpg"></img>
              </div>
              <div className={Styles.Grid}>
                <img src="/image/pexels-mateusz-dach-450035.jpg"></img>
              </div>
              <div className={Styles.Grid}>
                <img src="/image/pexels-negative-space-169573.jpg"></img>
              </div>
              <div className={Styles.Grid}>
                <img src="/image/pexels-pixabay-40185.jpg"></img>
              </div>

            </div>
          </div>
        </div>
        
        <div className={Styles.Main}>
          {/* 60% & 40% */}
          <div className={Styles.row}>

            <div className={Styles.Content}>
              {/* 60% */}a
            </div>
            <div className={Styles.Side}>
              {/* 40% card box sticky position */}a
            </div>

          </div>
        </div>
      </div>
    </div>
  )

}

export default Product;
import { useRouter } from "next/router";
import Head from 'next/head';
import Styles from '../../styles/page/Product.module.css';
import { BsStarFill} from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { BsDashSquareFill } from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";

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
            <h1>Tittle Product</h1>
            <div className={Styles.SubDetail}>
              <span>(3)
                <div className={Styles.ReviewStar}>
                  <BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/>
                </div>
              </span>|
              <span>Nama Toko</span>|
              <span>Lokasi Toko</span>
            </div>
          </div>
        </div>
        
        <div className={Styles.Gallery}>
          <div className={Styles.GalleryCon}>
            <div className={Styles.GalleryGrid}>

              <div className={Styles.Grid}>
                <img src="/image/dash1.webp"></img>
              </div>
              <div className={Styles.Grid}>
                <img src="/image/dash2.webp"></img>
              </div>
              <div className={Styles.Grid}>
                <img src="/image/dash3.webp"></img>
              </div>
              <div className={Styles.Grid}>
                <img src="/image/dash4.webp"></img>
              </div>
              <div className={Styles.Grid}>
                <img src="/image/dash5.webp"></img>
              </div>

            </div>
          </div>
        </div>
        
        <div className={Styles.Main}>
          {/* 60% & 40% */}
          <div className={Styles.MainCon}>
            <div className={Styles.row}>

              {/* Content */}
              <div className={Styles.Content}>

                <div className={Styles.ConHeader}>
                  <div className={Styles.row}>
                    <div className={Styles.ConTittle}>
                      <h1>Tittle Product</h1>
                      <div className={Styles.ConSubTittle}>
                        <span>Name shop</span>
                        <span>| Location shop</span>
                        <span> Location shop</span>
                      </div>
                    </div>
                    <div className={Styles.ConProfile}>
                      <img src="/image/dash3.webp" alt="Profile Toko"/>
                    </div>
                  </div>
                </div>
                <div className={Styles.LineHr}></div>
                
                <div className={Styles.ConDesc}>
                  <h1>Product Description</h1>

                  {/* Filled Description Product */}
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
                <div className={Styles.LineHr}></div>

                <div className={Styles.ConReview}>

                  <div className={Styles.ReviewHead}>
                    <h1>Product Review</h1>
                  </div>

                  {/* Filled Review */}
                  <div className={Styles.ColReview}>
                    <div className={Styles.TittleReview}>
                      <div className={Styles.ReviewProfile}>
                        <img src="/image/dash3.webp" alt="Profile Toko"/>
                      </div>
                      <div className={Styles.SubTittleReview}>
                        <p>Amar
                          <div className={Styles.ReviewStar}>
                            <BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStar/>
                          </div>
                        </p>
                        <span>11 Agustus 2020</span>
                      </div>
                    </div>
                    <div className={Styles.Review}>
                      <span>Ini hanya komentar pertama</span>
                    </div>
                  </div>

                  <div className={Styles.ColReview}>
                    <div className={Styles.TittleReview}>
                      <div className={Styles.ReviewProfile}>
                        <img src="/image/dash3.webp" alt="Profile Toko"/>
                      </div>
                      <div className={Styles.SubTittleReview}>
                        <p>Amar
                          <div className={Styles.ReviewStar}>
                            <BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/>
                          </div>
                        </p>
                        <span>11 Agustus 2020</span>
                      </div>
                    </div>
                    <div className={Styles.Review}>
                      <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</span>
                    </div>
                  </div>
                  
                  <div className={Styles.ColReview}>
                    <div className={Styles.TittleReview}>
                      <div className={Styles.ReviewProfile}>
                        <img src="/image/dash3.webp" alt="Profile Toko"/>
                      </div>
                      <div className={Styles.SubTittleReview}>
                        <p>Amar
                          <div className={Styles.ReviewStar}>
                            <BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/>
                          </div>
                        </p>
                        <span>11 Agustus 2020</span>
                      </div>
                    </div>
                    <div className={Styles.Review}>
                      <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</span>
                    </div>
                  </div>
                
                </div>
                <div className={Styles.LineHr}></div>

              </div>
              
              <div className={Styles.Side}>
                <div className={Styles.BoxCard}>
                  <div className={Styles.Card}>

                    <div className={Styles.Product}>
                      <p>Review</p>
                      <div className={Styles.ProductReview}>
                        <span>(3)</span>
                        <div className={Styles.ReviewStar}>
                          <BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/>
                        </div>
                      </div>
                    </div>

                    <div className={Styles.Price}>
                      <p>Price</p>
                      <div className={Styles.ProductPrice}>
                        <span>IDR 50.000</span>
                      </div>
                    </div>

                    <div className={Styles.Qty}>
                      <p>Qty</p>
                      <div className={Styles.ProductQty}>
                        <button><BsFillPlusSquareFill/></button>
                        <input type="number"></input>
                        <button><BsDashSquareFill/></button>
                      </div>
                    </div>

                    <div className={Styles.Submit}>
                      <button>
                        <span>Add to Cart</span>
                        <TiShoppingCart/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
        <div className={Styles.FootBar}>
          <div className={Styles.FootBarCon}>

            <div className={Styles.row}>

              <div className={Styles.FootTittle}>
                <h1>Tittle Product</h1>
                <div className={Styles.FootSubTittle}>
                  <span>(3)
                    <div className={Styles.ReviewStar}>
                      <BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/>
                    </div>
                  </span>|
                  <span>IDR 50.000</span>
                </div>
              </div>
              <div className={Styles.FootAct}>
                <button>
                  <span>Add to Cart</span>
                  <TiShoppingCart/>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )

}

export default Product;
import { useState } from "react";
import { FaStar } from "react-icons/fa";

import Menu from "../layout/menu";

import s from '../styles/page/Dash.module.css';

export const Pulsa = () => {
  return(
    <div className={s.inputValue}>
      <div className={s.col50} style={{paddingRight:'5px'}} >
        <div className={s.txtDefine}>
          <span>No Handphone</span>
        </div>
        <input type="number" placeholder="08180123456789"></input>
      </div>
      <div className={s.col50}>
        <div className={s.txtDefine}>
          <span>Nominal</span>
        </div>
        <select>
          <option>Choose..</option>
        </select>
      </div>
    </div>
  )
}

export const Paket = () => {
  return(
    <div className={s.inputValue}>
      <div className={s.col50} style={{paddingRight:'5px'}} >
        <div className={s.txtDefine}>
          <span>No Handphone</span>
        </div>
        <input type="number" placeholder="08180123456789"></input>
      </div>
      <div className={s.col50}>
        <div className={s.txtDefine}>
          <span>Paket</span>
        </div>
        <select>
          <option>Choose..</option>
        </select>
      </div>
    </div>
  )
}

export const Tagihan = () => {
  return(
    <div className={s.inputValue}>      
      <div className={s.col100}>
        <div className={s.txtDefine}>
          <span>No Meter / ID Pel</span>
        </div>
        <input type="number" placeholder="112223344455"></input>
      </div>    
    </div>
  )
}

export const Token = () => {
  return(
    <div className={s.inputValue}>      
      <div className={s.col50} style={{paddingRight:'5px'}} >
        <div className={s.txtDefine}>
          <span>No Meter</span>
        </div>
        <input type="number" placeholder="112223344455"></input>
      </div>
      <div className={s.col50}>
        <div className={s.txtDefine}>
          <span>Nominal</span>
        </div>
        <select>
          <option>Choose..</option>
        </select>
      </div>
    </div>
  )
}

export const Pln = () => {

  const [selpln, setselpln] = useState(1);

  let component;

  if(selpln == 1){    
    component = <Token></Token>
  }else if(selpln == 2){    
    component = <Tagihan></Tagihan>
  }

  return(
    <div className={s.inputValue}>
      <div className={s.col100}>
        <div className={s.txtDefine}>
          <span>Jenis Produk</span>
        </div>
        <select onChange={(e)=>{setselpln(e.target.value)}}>          
          <option value="1">Token Listrik</option>
          <option value="2">Tagihan Listrik</option>
        </select>
      </div>
      <div>
        {component}
      </div>      
    </div>
  )
}

const Home = () => {
  
  const [selacc, setSelAcc] = useState("Pulsa");

  let component;

  let acc = new Array();  
  acc = ["Pulsa", "Paket Data", "Listrik PLN"];

  if(selacc === "Pulsa"){    
    component = <Pulsa></Pulsa>
  }
  else if(selacc === "Paket Data"){
    component = <Paket></Paket>
  }
  else if(selacc === "Listrik PLN"){
    component = <Pln></Pln>
  }
  else{component=<div></div>}

  return(

    <Menu>
    
      <div className={s.parent}>
        
        <div className={s.row1}>
          
          <div className={s.col1}>
            <div className={s.box}>
              
              <div className={s.txtHead}>
                <span>TOP-UP</span>                
              </div>

              <div className={s.txtDes}>
                <span>Permudah pembayaran-mu dengan menggunakan <i>quick access</i></span>
              </div>              

              <div className={s.select}>
                
                <div className={s.txtDefine}>
                  <span>Access</span>
                </div>
                
                <select onChange={(e)=>{setSelAcc(e.target.value)}}>                  
                  {acc.map((e,i)=><option key={i} value={e}>{e}</option>)}
                </select>

              </div>

              <div>
                {component}
              </div>              

              <div className={s.btn}>
                <button>Beli</button>.
              </div>

            </div>
          </div>
          
          <div className={s.col2}>
            <img className={s.img} src="/image/dash1.webp" alt="image"></img>
          </div>

        </div>

        <div className={s.row2}>
          
          <div className={s.colHead}>
            <span>Top-rated product mercant</span>
            <div className={s.txtdes}>
              <span>Let 380,000+ real reviews from past guests help you find the perfect product</span>          
            </div>
          </div>        

          <div className={s.colcard}>            

            <div className={s.card}>                        

              <div className={s.container}>                

                <div className={s.photoProd}>
                  <img src="/image/rate1.webp"/>
                </div>
                
                <div className={s.txtRate}>
                  <FaStar className={s.star}></FaStar>
                  <span>4.90</span>
                </div>
                
                <div className={s.txtcomment}>
                  <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in lacinia urna, vitae consectetur mi. Mauris vel porttitor purus, eget laoreet mi. Pellentesque a orci purus. Cras mattis viverra justo. 
                  </span>
                </div>                                

              </div>              

            </div>

            <div className={s.card}>                        

              <div className={s.container}>                

                <div className={s.photoProd}>
                  <img src="/image/rate2.webp" />
                </div>
                
                <div className={s.txtRate}>
                  <FaStar className ={s.star}></FaStar>
                  <span>4.52</span>
                </div>
                
                <div className={s.txtcomment}>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in lacinia urna, vitae consectetur mi. Mauris vel porttitor purus, eget laoreet mi. Pellentesque a orci purus. Cras mattis viverra justo. 
                  </span>
                </div>
                                

              </div>              

            </div>

            <div className={s.card}>                        

              <div className={s.container}>                

                <div className={s.photoProd}>
                  <img src="/image/rate1.webp" />
                </div>
                
                <div className={s.txtRate}>
                  <FaStar className={s.star}></FaStar>
                  <span>4.22</span>
                </div>
                
                <div className={s.txtcomment}>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in lacinia urna, vitae consectetur mi. Mauris vel porttitor purus, eget laoreet mi. Pellentesque a orci purus. Cras mattis viverra justo. 
                  </span>
                </div>                                

              </div>              

            </div>

          </div>

          <div className={s.btn}>
            <button>Show all</button>
          </div>

        </div>

        <div className={s.row3}>

          <div className={s.colHead3}>
            <span></span>
            <div className={s.txtDes3}>
              <span></span>
            </div>
          </div>

          <div className={s.colBod}>
            
            <div className={s.conBod}>
              
              <div className={s.imgBod}>
                <img></img>
              </div>
              
              <div className={s.txtex}>
                <span></span>
                <span></span>
              </div>

              <div className={s.txtname}>
                <span></span>
              </div>

              <div className={s.txtname}>
                <span></span>
              </div>

            </div>

            <div className={s.btn}>
              <button>Show All</button>
            </div>

          </div>

        </div>

      </div>

    </Menu>

  )
}

export default Home;
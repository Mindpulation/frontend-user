import Menu from "../layout/menu";

import s from '../styles/page/Dash.module.css';

const Home = () => {
  return(
    <Menu>
      <div className={s.parent}>
        
        <div className={s.row1}>
          
          <div className={s.col1}>
            <div className={s.box}>
              Hello
            </div>
          </div>
          
          <div className={s.col2}>
            <img className={s.img} src="/image/dash1.webp" alt="image"></img>
          </div>

        </div>

        <div className={s.row2}>



        </div>

      </div>
    </Menu>
  )
}

export default Home;
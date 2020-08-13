import { FiCoffee, FiHeart, FiBox, FiUser }  from 'react-icons/fi'

import s from "../../styles/component/nav/Altmenu.module.css";

const Altmenu = () => {

    return(
      <div className={s.containerNavBottom}>
        
        <div className={s.itemNavBottom}>
          <FiCoffee></FiCoffee>
        </div>

        <div className={s.itemNavBottom}>
          <FiHeart></FiHeart>
        </div>

        <div className={s.itemNavBottom}>
          <FiBox></FiBox>
        </div>

        <div className={s.itemNavBottom}>
          <FiUser></FiUser>
        </div>

      </div>
    )

}

export default Altmenu;
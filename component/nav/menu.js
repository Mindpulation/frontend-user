import s from '../../styles/Menu.module.css'

const Menu = () => {

  return(
    
    <div>

      <div className={s.boxMenu}>
        
        <div className={s.txtContainer}>
          Log in
        </div>
        
        <div className={s.txtContainer}>
          Sign up
        </div>

        <br></br>

      </div>

    </div>

  )

}

export default Menu;
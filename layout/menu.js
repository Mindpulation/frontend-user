import Nav from "../component/nav/nav.js";
import Altmenu from "../component/nav/altmenu.js";

const LMenu = ({children}) => {
  return(
    <React.Fragment>   
      <Nav></Nav>         
      <Altmenu></Altmenu>
      <div>
        {children}
      </div>            
    </React.Fragment>
  );
}

export default LMenu;
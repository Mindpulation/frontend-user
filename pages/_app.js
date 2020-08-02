import '../styles/globals.css'

import Context from "../context/index";

function MyApp({ Component, pageProps }) {

  return(      
    <Context>
      <Component {...pageProps} />
    </Context>  
  )
}

export default MyApp

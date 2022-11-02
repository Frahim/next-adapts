import '../styles/globals.css'
import HeaderComponent from '../component/comon/header'
import Footer from '../component/comon/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <HeaderComponent/>
    <Component {...pageProps}/>
    <Footer/>
     </>
  )  
  
}

export default MyApp

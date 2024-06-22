import Header from "../header/Header"
import Footer from "../footer/Footer"
import Backdrop from "../module/backdrop/Backdrop"
import UserModal from "../userModal/UserModal"

export default function Layout({children}){
    return(
        <>
          <div>
            {/* <Backdrop/> */}
            <UserModal/>
          </div>       
         <Header/>      
          {children}      
         <Footer/>         
        </>
    )
}
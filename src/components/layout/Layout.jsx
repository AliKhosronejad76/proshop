import Header from "../header/Header"
import Footer from "../footer/Footer"
import Backdrop from "../module/backdrop/Backdrop"
import UserModal from "../userModal/UserModal"
import ShopingDrawer from "../shopingDrawer/ShopingDrawer"


export default function Layout({children}){
    return(
        <>
          <div>
            {/* <Backdrop/> */}
            <ShopingDrawer/>
            <UserModal/>
          </div>       
         <Header/>      
          {children}      
         <Footer/>         
        </>
    )
}
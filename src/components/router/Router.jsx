import { Route , Routes } from "react-router-dom"
import HomePage from "../../pages/HomePage"
import ShopPage from "../../pages/ShopPage"

export default function Router(){
    return(
        <Routes>
            <Route index path="/" element={<HomePage/>} />
            <Route path="/shop"  element={<ShopPage/>}  />
        </Routes>
    )
}
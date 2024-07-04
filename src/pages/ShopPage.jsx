import Aside from "../components/shoppage/aside/Aside"
import Main from "../components/shoppage/main/Main"


export default function ShopPage(){
      return(
            <div className="bg-[#f0f0f1] pt-4 px-7 flex">
                <Aside/>
                <Main/>  
            </div>
      )
}
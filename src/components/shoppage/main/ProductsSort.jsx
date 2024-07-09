import { FaSortAmountDown } from "react-icons/fa"
import SortItem from "./SortItem"


export default function ProductsSort(){
      return(
            <div className="bg-white rounded-xl py-2 px-4 flex">
                  <div className="flex items-center ">
                        <FaSortAmountDown className="text-xl"/>
                        <span className="text-lg text-bold mr-3 ">ترتیب بر اساس :</span>
                  </div>

                  <div className="flex items-center mr-3">
                        <SortItem name="بیش فرض"/>
                        <SortItem name="جدیدترین"/>
                        <SortItem name="محبوب ترین"/>
                        <SortItem name="گران ترین"/>
                        <SortItem name="ارزان ترین"/>
                        

                  </div>
               
            </div>
      )
}
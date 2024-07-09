import FilterItem from "./FilterItem"

export default function FilterBox(){
      return(
            <div className=" w-full bg-[#fff] rounded-xl px-6 py-3 mb-6">
                 <FilterItem title="محصولات تخفیف دار"/>  
                 <FilterItem title="فقط محصولات موجود"/>             
            </div>
      )
}
import FilterBox from "./filterBox/FilterBox"
import ProductsCategory from "./productscategory/ProductsCategory"
import BrandsFilterBox from "./brandsfilterbox/BrandsFilterBox"
import PriceFilter from "./pricefilter/PriceFilter"

export default function Aside(){
      return(
            <aside className="w-[25%] px-5">
                  <FilterBox/>
                  <ProductsCategory/>   
                  <BrandsFilterBox /> 
                  <PriceFilter/>              
            </aside>
      )
}
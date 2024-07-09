import StoriesRow from "../components/stories/StoriesRow"
import Banner from "../components/banner/Banner"
import GroupingSection from "../components/groupingSection/GroupingSection"
import Bestselling from "../components/besetselling/Bestselling"
import PopularBrandsSection from "../components/popularbrandssection/PopularBrandsSection"
import ArticleSection from "../components/articlesection/ArticleSection"
import SpecialProducts from "../components/SpecialProducts/SpecialProducts"
import NewProducts from "../components/newProductsSection/NewProducts"
import ProductsSort from "../components/shoppage/main/ProductsSort"
import FilterBox from "../components/shoppage/aside/filterBox/FilterBox"
export default function HomePage(){
    return(
        <>
            <StoriesRow/>           
            <Banner/>
            <GroupingSection/>
            <SpecialProducts/>
            <Bestselling/>
            <PopularBrandsSection />
            <NewProducts/>
            <ArticleSection/>
            <ProductsSort/>
            <FilterBox/>
        </>
    )
}
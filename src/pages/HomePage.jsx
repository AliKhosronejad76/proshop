import StoriesRow from "../components/stories/StoriesRow"
import Banner from "../components/banner/Banner"
import GroupingSection from "../components/groupingSection/GroupingSection"
import Bestselling from "../components/besetselling/Bestselling"
import PopularBrandsSection from "../components/popularbrandssection/PopularBrandsSection"
import ArticleSection from "../components/articlesection/ArticleSection"


export default function HomePage(){
    return(
        <>
            <StoriesRow/>           
            <Banner/>
            <GroupingSection/>
            <Bestselling/>
            <PopularBrandsSection />
            <ArticleSection/>
        </>
    )
}
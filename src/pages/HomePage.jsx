import StoriesRow from "../components/stories/StoriesRow"
import Banner from "../components/banner/Banner"
import GroupingSection from "../components/groupingSection/GroupingSection"
import Bestselling from "../components/besetselling/Bestselling"
import PopularBrandsSection from "../components/popularbrandssection/PopularBrandsSection"
import ScrollTopSection from "../components/scrolltop/ScrollTopSection"
export default function HomePage(){
    return(
        <>
            <StoriesRow/>           
            <Banner/>
            <GroupingSection/>
            <Bestselling/>
            <PopularBrandsSection />
            <ScrollTopSection/>
        </>
    )
}
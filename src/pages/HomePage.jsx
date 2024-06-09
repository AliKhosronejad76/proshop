import StoriesRow from "../components/stories/StoriesRow"
import Banner from "../components/banner/Banner"
import GroupingSection from "../components/groupingSection/GroupingSection"
import Bestselling from "../components/besetselling/Bestselling"
export default function HomePage(){
    return(
        <>
            <StoriesRow/>           
            <Banner/>
            <GroupingSection/>
            <Bestselling/>
        </>
    )
}
import MultipleSlider from "../module/multipleslider"
import { tabsData , mobileSliderData , cameraSliderData , watchsSliderData, fashionSliderData } from "../../sliderData"
export default function NewProducts(){
    return(
        <div className="bg- mt-12 mb-6">
            <MultipleSlider 
                title={"جدیدترین ها در هر دسته"}
                tabsData={tabsData}
                sliderOneData={mobileSliderData}
                sliderTwoData={cameraSliderData}
                sliderTreeData={watchsSliderData}
                sliderFourData={fashionSliderData}
            />
        </div>
    )
}
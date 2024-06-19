import MultipleSlider from "../module/multipleslider/index"
import { cameraSliderData, fashionSliderData, tabsData } from "../../sliderData"
import { mobileSliderData , watchsSliderData } from "../../sliderData"

export default function SpecialProducts(){
    return(
        <div className="bg-[#f0f0f1] pt-8 pb-12">
            
            <MultipleSlider 
             title={"محصولات ویژه"}
             tabsData={tabsData}
             sliderOneData={mobileSliderData}
             sliderTwoData={cameraSliderData}
             sliderTreeData={watchsSliderData}
             sliderFourData={fashionSliderData}
            />

        </div>
    )
}
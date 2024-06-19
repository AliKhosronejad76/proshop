import SliderTabs from "./SliderTabs"

export default function Header({title , tabsData , setSliderIndex , sliderIndex }){
    return(
        <div className="flex items-center justify-between px-7">
            <h1 className="text-xl text-bold">{title}</h1>
            <SliderTabs tabsData={tabsData}  sliderIndex={sliderIndex} setSliderIndex={setSliderIndex}/>
            <div className="w-[45%] h-[2px] bg-[#cdd3d7] px-8"></div>
        
            <a href="#" className="text-lg transition-all duration-500 hover:text-sky-400">
                مشاهده همه
            </a>
        </div>
    )
}
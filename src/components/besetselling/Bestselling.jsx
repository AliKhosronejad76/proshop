import { FaFireFlameCurved } from "react-icons/fa6"
import Column from "./Column"
import Row from "../module/Row"
import ZoomBanner from "../module/ZoomBanner"

export default function Bestselling(){
    return(
        <div className="pt-8 ">
            <div className="flex items-center w-max mx-auto pb-6">
                <FaFireFlameCurved className="text-4xl text-red-700"/>
                <h2 className="mr-2 text-2xl">پرفروش‌ترین کالاها</h2>
            </div>

            <div className="w-[78%] mx-auto flex border border-[#e2e2e2] rounded-xl px-4   [&>:nth-child(1)]:border-l [&>:nth-child(1)]:border-[#e2e2e2]  [&>:nth-child(2)]:border-l  [&>:nth-child(2)]:border-[#e2e2e2]">
                <Column/>
                <Column/>
                <Column/>

            </div>
            <Row>
                <ZoomBanner width={"49%"} img={"img/home-banner-b3.webp"}/>
                <ZoomBanner width={'49%'} img={"img/home-banner-b4.webp"} />
            </Row>
        </div>
    )
}
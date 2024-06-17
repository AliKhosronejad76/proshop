import FooterMenus from "./footerMenus/FooterMenus"
import FooterInfo from "./footerinfo/FooterInfo"
import FooterButtom from "./FooterButtom"
import ScrollTopSection from "../scrolltop/ScrollTopSection"
export default function Footer(){
    return(
        <footer className="bg-[#f7fafd] ">
            <ScrollTopSection/>
            <FooterMenus/>
            <FooterInfo/>  
            <FooterButtom/>
        </footer>
    )
}
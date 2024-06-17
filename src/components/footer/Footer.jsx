import FooterMenus from "./footerMenus/FooterMenus"
import FooterInfo from "./footerinfo/FooterInfo"
import FooterButtom from "./FooterButtom"

export default function Footer(){
    return(
        <footer className="bg-[#f7fafd]   border-t border-[#cfd8dc]">
            <FooterMenus/>
            <FooterInfo/>  
            <FooterButtom/>
        </footer>
    )
}
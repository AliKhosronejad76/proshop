import ContactUs from "./Contactus"
import SocialNetwork from "./SocialNetwork"
import CustomerServices from "./CustomerServices"
import ProshopServices from "./ProshopServices"

export default function FooterMenus(){
    return(
        <div className="flex justify-between py-16">
            <ContactUs/>
            <CustomerServices/>
            <ProshopServices/>
            <SocialNetwork/>
        </div>
    )
}
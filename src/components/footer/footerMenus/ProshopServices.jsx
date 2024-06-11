import FooterColTitle from "../../module/FooterColTitle"
import ListItemLink from "../../module/ListItemLink"

export default function ProshopServices(){
    return(
        <div>
         
            <FooterColTitle title="خدمات پروشاپ رویال" />
            <ul>
                <ListItemLink href="#" linkText={"همکاری با سازمان‌ها"}/>
                <ListItemLink href="#" linkText={"فرصت‌های شغلی"}/>
                <ListItemLink href="#" linkText={"تماس با پروشاپ"}/>
                <ListItemLink href="#" linkText={"درباره پروشاپ"}/>
                
            </ul>
        
        </div>
    )
}
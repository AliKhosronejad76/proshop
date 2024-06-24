import ProductsCatItems from "../../module/ProductsCatItems"
import ProductsLinkBox from "../../module/ProductLinkBox"
import { FaLaptop } from "react-icons/fa"
import { ImDrive } from "react-icons/im"

export default function DigitalMenu({data}){
    return(
        <div className="flex justify-between">
            <div className="w-[75%] flex justify-between">
                {data.map(( item , index )=> <ProductsCatItems key={index} data={item}/>)}
            </div>
            <div className="flex flex-col">
                <ProductsLinkBox 
                icon={<FaLaptop/>} 
                title="انواع لپ تاپ " 
                desc="وارد کننده انواع لب تاب با برند ها معروف مثل ایسوس با گارانتی سه ساله" 
                />

                <ProductsLinkBox 
                 icon={<ImDrive/>}
                 title="انواع هارد"
                 desc="وارد کننده انواع هارد های اینترنال و اکسترنال با گارانتی شرکتی سه ساله"

                />
            </div>
        </div>
    )
}
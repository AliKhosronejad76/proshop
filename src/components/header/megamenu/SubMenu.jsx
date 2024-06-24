import DigitalMenu from "./DigitalMenu"
import FashionMenu from "./FashionMenu"
import ProductsMenu from "./ProductsMenu"
export default function SubMenu({ show , setShow , type , data }){
   console.log({type , data })
    return(
        <div className={`${show ? "opacity-1 translate-y-[-10px] " : "opacity-0 invisible" } bg-white absolute w-screen h-[70vh] top-[60px]  left-10 right-[0px] z-[2000] pt-6 px-9 transition-[transform_opacity] [duration:600ms_1000ms]`}>
             {type === "digital" && <DigitalMenu data={data}/>}
             {type === "fashion" && <FashionMenu data={data}/>}
        </div>
    )
}


// state ? "w-full" : w-[0px]

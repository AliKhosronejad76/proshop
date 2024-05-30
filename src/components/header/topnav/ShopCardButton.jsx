import { TbShoppingBag } from "react-icons/tb"
export default function ShopCardButton(){
    return(
        <button className=" mx-4 bg-transparent flex items-center justify-center">
            <TbShoppingBag className="text-5xl p-2.5 transition-hover duration-700 linear hover:text-green-600" />
        </button>
        

    )
}
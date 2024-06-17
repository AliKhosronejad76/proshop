import { FaAngleUp } from "react-icons/fa6"

export default function ScrollToTopButton(){
    const handler = ()=>{
        window.scrollTo(0,0)
        
    }
    return(
        <button className="flex" onClick={handler}>
            <div className="bg-gray-400 text-white text-base flex items-center justify-center rounded-md w-[30px] h-[30px]">
                <FaAngleUp/>          
            </div>
            <span className="text-gray-400 text-2xl transition-all duration-500 hover:text-sky-600 mr-3">بازگشت به بالا</span>
        </button>
    )
}
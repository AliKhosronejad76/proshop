import { useDrawerContext } from "../../context/DrawerContextProvider"
import { FaTimes } from "react-icons/fa"


export default function  ShopingDrawer(){
    const { drawer , setDrawer } = useDrawerContext()
    console.log({ drawer , setDrawer})
    return(
        <div className={`${drawer ? "translate-x-[0px] " : "translate-x-[-500px] " } fixed z-[120] top-0 bottom-0 left-0 h-screen w-[370px] bg-white transition duration-700 linear`}>
            <div className="px-4 py-5 flex items-center justify-end text-3xl text-gray-400">
                <button onClick={()=>setDrawer(false)}>
                    <FaTimes/>
                </button>
            </div>
            <div className="py-4 px-4">
                <h1 className="pb-3 text-bold border-b border-gray-300">محصولات داخل سبد خرید</h1>
            </div>
            <div>
                    {/* products */}
                    <p className="text-center">هیچ محصولی وجود ندارد</p>
            </div>
        </div>
    )
}
import { useState } from "react"


export default function ToggleButton(){
      const [ check , setCheck ] = useState(false)

      return(
            <div onClick={()=>setCheck(!check)} className={` ${check  ? "bg-sky-400" : "bg-[#f2f4f5]" } cursor-pointer transition duration-100 relative w-[45px] h-[25px] border border-[#78919d] rounded-xl `}>
               <div className={`${check ? "left-0 bg-white" : "right-0 bg-[#78919d]" } transition duration-200 absolute h-full w-[20px]  rounded-full`}>

               </div>
            </div>
      )
}
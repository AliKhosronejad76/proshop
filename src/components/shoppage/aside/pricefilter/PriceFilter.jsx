import { useState } from "react"
import FilterItem from "./FilterItem"
import { FaAngleDown } from "react-icons/fa"
import { FaAngleUp } from "react-icons/fa"

export default function PriceFilter(){
      const [ show , setShow ]  = useState(false)
      
      return(
            <div className={`bg-white rounded-xl py-4 px-3 transiton duration-700 linear`}>
                  <button onClick={()=>setShow(!show)} className="flex justify-between  w-full items-center py-3">
                        <span className="text-bold border-r-4 border-sky-500  pr-3">محدوده قیمت </span>
                        {show ? <FaAngleUp className="transition duration-1000 ease-out"/> : <FaAngleDown className="transition duration-1000 ease-out" />}
                  </button>
                  <div className={`${show ? "max-h-auto overflow-visible" : "overflow-hidden max-h-[0px]" } transition  duration-700 linear`} >
                       <FilterItem name="کم تر از یک میلیون تومان"/>
                       <FilterItem name="کم تر از 3 میلیون تومان"/>
                       <FilterItem name="کم تر از 6 ملیون تومان"/>
                       <FilterItem name="کم تر از 10 ملیون تومان"/>

                  </div>
            </div>
      )
}
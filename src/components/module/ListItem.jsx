export default function ListItem ({ text , icon }){
    return(
        <li className="text-[#7e96a2] text-sm flex  py-2">
            <div className="flex items-center text-[#7e96a2] h-full">
             {icon}
            </div>
           <span className="mr-3 text-[#7e96a2]">
             {text}
           </span>
        </li>
    )
}
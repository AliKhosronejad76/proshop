import { GoDot } from "react-icons/go"
export default function ListItemLink({linkText , href }){
    return(
        <li className="flex text-[#7e96a2] py-2">
            <GoDot/>
            <a href={href} className="mr-3">
                {linkText}
            </a>
        </li>
    )
}
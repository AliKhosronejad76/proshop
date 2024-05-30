import { FaRegUser } from "react-icons/fa"
export default function LoginButton(){
    return(
        <button className="flex items-center mx-4 text-base">
            <FaRegUser className="ml-2" />
            <span>ورود/ثبت نام</span>
        </button>
    )
}
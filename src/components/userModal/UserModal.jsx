import { useState } from "react"
import { FaUserCheck } from "react-icons/fa"
import { FaUserPlus } from "react-icons/fa"
import { FaTimes } from "react-icons/fa"
import { useUserModal } from "../../context/UserModalProvider"
import Button from "./Button"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"


export default function UserModal(){
    const [ form , setform ] = useState("register")
    const {  display , setDisplay } = useUserModal()
    console.log(display)
    const close = ()=> setDisplay(false)
    return(
        <div className={`${display ? " translate-y-[54px] opacity-100" : " opacity-0" }   h-[64vh] w-[60%] left-[20%] right-[20%] top-[50px] absolute bg-white z-30 rounded-md transition-[transform_opacity] [duration:900ms_1200ms]`}>
            <div className=" flex items-center justify-end text-2xl px-6 py-2 text-gray-700">
                <button onClick={close}>
                    <FaTimes/>
                </button>
            </div>
            <div className=" h-[60px] flex w-full ">
                <Button form={form} type={"login"} text={"ورود"} icon={<FaUserCheck/>}   onClick={()=>setform("login")}/>
                <Button  form={form} type="register" text={"ثبت نام"} icon={<FaUserPlus/>} onClick={()=>setform("register")}/>               
            </div>  
            <div className="bg-white w-full h-full ">
                {form === "login" && <LoginForm/>}
                {form === "register" && <RegisterForm/>}  
            </div>
               
        </div>
    )
}
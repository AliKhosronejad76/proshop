import { useState } from "react"
export default function RegisterForm(){
    const [ username , setUserName ] = useState("")
    const [ password , setPassword ] = useState("")
    return(
        <form  className="pt-8 px-8 transition duration-700">
            <h6 className="text-lg mb-5">عضویت</h6>
            <div className="flex flex-col">
                <label className="mb-1" htmlFor="username">نام کاربری یا آدرس ایمیل</label>
                <input className="px-3 border-2 my-4 h-[40px] rounded-md outline-none transition-all duration-600 text-gray-800 focus:border-gray-300" type="text" id="username" value={username} onChange={(e)=>setUserName(e.target.value)}/>
            </div>
            <div className="flex flex-col">
                <label className="mb-1" htmlFor="password">گذزواژه</label>
                <input className="px-3 border-2 my-4 h-[40px] rounded-md outline-none transition-all duration-600 text-gray-800 focus:border-gray-300 " type="text"  id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>

            <button className="bg-sky-400 w-[100px] h-[44px] rounded-sm text-white transition hover:duration-900 hover:bg-sky-300 mt-8">
                    عضویت
                </button>
        </form>
    )
}
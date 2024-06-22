import  { useState } from "react"

export default function LoginForm(){
  const [ username , setUserName ] = useState("")
  const [ password , setPassword ] = useState("")
  const [ checkBox , setCheckBox ] = useState(false)
    return(
        <form className="pt-8 px-8 transition duration-700">
            <h6 className="text-lg mb-5">ورود</h6>
            <div className="flex flex-col">
                <label className="mb-1" htmlFor="username">نام کاربری یا آدرس ایمیل</label>
                <input className="px-3 border-2 my-4 h-[40px] rounded-md outline-none transition-all duration-600 text-gray-800 focus:border-gray-300" type="text" id="username" value={username} onChange={(e)=>setUserName(e.target.value)}/>
            </div>

            <div className="flex flex-col">
                <label className="mb-1" htmlFor="password">گذزواژه</label>
                <input className="px-3 border-2 my-4 h-[40px] rounded-md outline-none transition-all duration-600 text-gray-800 focus:border-gray-300 " type="text"  id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div className="flex justify-between items-center">
                <div className="flex-col">
                    <div className="py-3 ">
                        <input type="checkbox" value={checkBox} onChange={(e)=>setCheckBox(e.target.checked)} className="transition duration-900"/>
                        <span className="mr-4 ">مرا به خاطر بسپار</span>
                    </div>
                    <a href="#" className="text-sky-600  mt-8">گذرواژه خود را فراموش کرده اید؟</a>
                </div>

                <button className="bg-sky-400 w-[100px] h-[44px] rounded-sm text-white transition hover:duration-900 hover:bg-sky-300">
                    ورود
                </button>
            </div>
        </form>
    )
}
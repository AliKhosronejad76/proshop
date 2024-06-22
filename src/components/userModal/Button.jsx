export default function Button({text , icon , onClick , form , type }){
    return(
        <button className={`${form === type ? "text-sky-500 border-b-2 border-sky-500 ":"text-gray-700"} flex items-center justify-center  w-[50%] transition duration-700`} onClick={onClick} >
            <div className="text-2xl">
                {icon}
            </div>
            <span className="text-lg mr-3">{text}</span>
        </button>    
        )
}
import ProductsBox from "../ProductsBox"

export default function SubList({ hover , setHover , data }){
    return(
        <div 
         onMouseEnter={()=>setHover(true)}
         onMouseLeave={()=>setHover(false)}

        className={`${hover ? "visible" : "invisible" } w-screen h-screen  px-8 pt-4 absolute bottom-0 right-[150px] left-0 bottom-0 z-20 flex bg-white`}
        >
            {data?.map(item=> <ProductsBox data={item}/>)}
        </div>
    )
}
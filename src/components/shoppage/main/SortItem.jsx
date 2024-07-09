export default function SortItem({ name }){
      return(
            <div className="block mx-3 text-center w-[90px] h-full py-1 cursor-pointer hover:bg-red-500  rounded-md text-gray-700 ">
                  <p>
                        {name}       
                  </p>
            </div>
      )
}
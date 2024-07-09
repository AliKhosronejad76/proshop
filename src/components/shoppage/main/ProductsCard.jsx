import AddToCardButton from "../../module/AddToCardButton"
export default function ProductsCard(){
      return(
                  <div className=" w-[23%] mb-6 bg-white mx-2 border border-[#e6e6e6] rounded-2xl">
                      <img src={"/img/mobileslider/a20-22.jpg"} alt="" className="rounded-2xl "/>
                      <p className="mt-3 text-center text-sm text-gary-400">عنوان محصول </p>
                     
                      <div className="flex px-4 justify-between items-center mt-6 pb-4">
                          <AddToCardButton 
                            bgColor={"#eceff1"} 
          
                          />
                          <span className="text-sm ">1,234,500تومان</span>
                      </div>
                 
                  </div>

      )
}
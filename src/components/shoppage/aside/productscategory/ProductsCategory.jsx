import CheckItem from "./CheckItem"
export default function ProductsCategory(){
      return(
            <div className="w-full rounded-xl bg-white py-2 px-3 ">
                  <div className="py-3">
                        <h3 className="border-r-4 border-sky-500 pr-2"> دسته بندی محصولات</h3>
                  </div>                  

                  <ul className="mt-3 px-3">
                     <li>
                         <CheckItem title="تجهیزات عکاسی" />
                     </li>
                     <li>
                         <CheckItem title="ساعت مچی " />
                     </li>
                     <li>
                         <CheckItem title="گوشی موبایل"/>
                     </li>
                     <li>
                         <CheckItem title="گوشی مدرن"/>
                     </li>
                     <li>
                         <CheckItem title="مد و بوشاک" />
                     </li>
                  </ul>
            </div>
      )
}
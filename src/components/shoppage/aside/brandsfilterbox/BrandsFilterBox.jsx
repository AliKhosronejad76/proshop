import List from "./List"

export default function BrandsFilterBox(){
      return(
            <div className="box bg-white rounded-xl mt-5 mb-3 py-4 px-3">
                  <div className="pb-4 ">
                        <h3 className="pr-3 border-r-4 border-sky-400">
                              بر اساس سازنده (برند)
                        </h3>
                  </div>
                  <List/>            
            </div>
      )
}
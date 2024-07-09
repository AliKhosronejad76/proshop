export default function FilterItem({name}){
      return(
            <div className="py-2 flex items-center text-gray-500 text-sm">
                  <input type="checkbox" />
                  <span className="mr-3">{name}</span>
            </div>
      )
}
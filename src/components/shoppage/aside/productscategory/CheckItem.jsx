export default function CheckItem({title}){
      return(
            <div className="flex items-center mb-4">
                  <input type="checkbox" 
                   className="transition duration-200"
                  />
                  <p className="mr-2 text-sm">{title}</p>
            </div>
      )
}
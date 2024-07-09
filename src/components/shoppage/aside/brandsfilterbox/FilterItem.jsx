export default function FilterItem({name}){
      return(
            <li className="py-1 text-gray-400">
                  <input type="checkbox" />
                  <label className="mr-2  ">
                        {name}
                  </label>
            </li>
      )
}
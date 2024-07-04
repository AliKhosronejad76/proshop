import ToggleButton from "./ToggleButton"

export default function FilterItem({title}){
      return( 
            <div className="flex py-4">
                  <ToggleButton/>
                  <p className="mr-3 text-bold text-lg">{title}</p>
            </div>
      )
}
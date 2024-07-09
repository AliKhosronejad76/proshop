import FilterItem from "./FilterItem"
import "../../../../index.css"
export default function List(){
      return(
            <ul className="overflow-y-scroll px-3 max-h-[200px]">
                  <FilterItem name="cannon" />
                  <FilterItem name="fosil" />
                  <FilterItem name="jmary" />
                  <FilterItem name="LCC Walkiki" />
                  <FilterItem name="Lumix"/>
                  <FilterItem name="Nikon"/>
                  <FilterItem name="ابل"/>
                  <FilterItem name="Lumix"/>
                  <FilterItem name="Nikon"/>
                  <FilterItem name="ابل"/>


            </ul>
      )
}
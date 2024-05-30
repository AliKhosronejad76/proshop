import FavButton from "./FavButton"
import OffButton from "./OffButton"

export default function Navbar(){
    return(
        <nav className="sticky top-0 px-5 py-2.5 bg-white flex items-center justify-between shadow-2xl">
            <div>

            </div>
            <div className="flex text-gray-700">
                <FavButton/>
                <OffButton/>
            </div>
        </nav>
    )
} 
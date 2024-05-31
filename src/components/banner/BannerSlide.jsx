export default function BannerSlide({img}){
    return(
        <div classname="relative">
            <a href="#">
              <img src={img} className="object-contain"/>
            </a>
        </div>
    )
}
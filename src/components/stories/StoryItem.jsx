export default function StoryItem(){
    return(
        <div className="mx-2 w-[90px] h-[90px] rounded-full border-2 border-[#ce4097] flex flex-col items-center cursor-pointer">
            <img src="/img/blog-7-150x150.webp" alt="ss" className="rounded-full object-cover p-1"/>
            <p className="text-center text-sm py-2 px-1">عنوان داستان ...</p>
        </div>
    )
}
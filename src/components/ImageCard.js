import { useState } from "react";
function ImageCard({ image, category, title, description }) {
    const [liked, setLiked] = useState(false);
    return (
        <div className={`relative grid grid-rows-2 my-5 w-full max-w-sm rounded-2xl bg-white shadow-md overflow-hidden"`}>
            <img className="w-full h-48 object-cover rounded-t-2xl" src={image} alt={title}></img>
            <button
                onClick={() => setLiked(!liked)}
                className="heart_btn absolute top-4 right-6 w-fit bg-white rounded-full px-2 py-1"
            >
                <i
                    className={`fa-heart text-xs md:text-xl ${liked ? "fa-solid text-red-500" : "fa-regular"
                        }`}
                ></i>
            </button>
            <div className="mx-4 my-2">
                <span className={`rounded-full bg-green-950 px-2 py-1 text-sm font-semibold text-white`}>{category}</span>
                <h2 className="text-green-900 text-sm md:text-lg font-semibold mt-2">{title}</h2>
                <p className="text-green-950 text-sm">{description}</p>
                <span className="text-xs md:text-sm">View More <i class="fa-solid fa-arrow-right-long"></i></span>
            </div>
        </div>

    )
}
export default ImageCard
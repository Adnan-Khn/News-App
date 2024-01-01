"use client"

import { useRouter } from "next/navigation";

type Props={
    article:Article;
}
function ReadMoreButton({article}:Props) {
    const router = useRouter()
    const handleClick = ()=>{
        const queryString = Object.entries(article).map(
            ([key,value])=>`${key}=${value}`
        ).join("&")
        const url = `/article?${queryString}`
        router.push(url)
    }
  return (
    <button
    onClick={handleClick}
    className="bg-orange-400 h-10 rounded-b-lg dark:bg-gray-800 hover:bg-orange-600 dark:hover:bg-gray-700"
    >
    Read More
    </button>
  )
}
export default ReadMoreButton
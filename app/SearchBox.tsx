"use client"

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

function SearchBox() {
  const [input, setInput] = useState("")
  const router = useRouter()
  const handleSearch=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    //console.log(e)
    if(!input) return
    //we will pass the searched keyword to the url with help of next router
    router.push(`/search?term=${input}`)
    setInput("")
  }
  return (
    <form 
    onSubmit={handleSearch}
    className="max-w-6xl mx-auto flex justify-between items-center px-5">
        <input
        type="text"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        placeholder="Search News"
        className="flex-1 w-full h-14 rounded-sm outline-none placeholder-gray-500
        text-gray-500 bg-transparent dark:text-orange-400"
        />
        <button
        type="submit"
        disabled={!input}
        className="text-orange-400 disabled:text-gray-500"
        >Search
        </button>
    </form>
  )
}
export default SearchBox
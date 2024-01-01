"use client"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

function DarkModeButton() {
    const [mounted, setMounted] = useState(false)
    const {systemTheme,theme,setTheme} = useTheme()

    useEffect(()=>{
        setMounted(true)
    },[]);
    if(!mounted)return null

    const currentTheme=theme==="system"?systemTheme:theme
  return (
    <div>
        {currentTheme === "dark" ?(
            <SunIcon
            className="h-6 w-6 cursor-pointer text-yellow-400"
            onClick={()=>setTheme("light")}
            />
        ):(
            <MoonIcon
            className="h-6 w-6 cursor-pointer text-gray-800"
            onClick={()=>setTheme("dark")}
            />
        )
        }
    </div>
  )
}
export default DarkModeButton
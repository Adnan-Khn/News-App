"use client"
import { categories } from "@/constant"
import { usePathname } from "next/navigation"
import NavLink from "./NavLink"

function NavLinks() {
    const pathname=usePathname()
    const isActive = (path:string)=>{
        //this will take the url ie. something/news/technology
        //and splitting it on / gives a array which which pop out the last entry
        //and we are comparing it 
        return pathname?.split('/').pop() === path
    }
  return (
    
    <nav className="grid grid-cols-4 md:grid-cols-7 text-xs md:text-md gap-4 pb-10 max-w-6xl mx-auto border-b">
        {categories.map((category)=>(
            <NavLink key={category} category={category} isActive={isActive(category)}/>
        ))}
    </nav>
  )
}
export default NavLinks
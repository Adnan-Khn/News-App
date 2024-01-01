import { Bars3Icon, NewspaperIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import NavLinks from "./NavLinks"
import SearchBox from "./SearchBox"
import DarkModeButton from "./DarkModeButton"

function Header() {
  return (
    <header>
        <div className="grid grid-cols-3 items-center p-10">
            <NewspaperIcon className="h-8 w-8 cursor-pointer"/>
            <Link href="/" prefetch={false} ><h1 className="font-serif text-center text-4xl"><span className="underline decoration-5 decoration-orange-400">News</span> App</h1></Link>
            <div className="flex items-center justify-end space-x-2">
                {/* DarkMode Button */}
                <DarkModeButton/>
                <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">Subscribe Now</button>
            </div>
        </div>
        {/* NavsLinks */}
        <NavLinks/>
        {/* SearchBox */}
        <SearchBox/>
    </header>
  )
}
export default Header
import NewsList from "@/app/NewsList"
import { categories } from "@/constant"
import fetchNews from "@/lib/fetchNews"

type Props = {
    params:{category:Category}
}
async function CategoryNews({params:{category}}:Props) {
    const news:NewsResponse = await fetchNews(category)
  return (
    <div>
        <h1 className="headerTitle">{category} News</h1>
        <NewsList news={news}/>
    </div>
  )
}
export default CategoryNews

// this will build pages for all categories in advance i.e all the pages
// /news/general
// /news/sport
// /news/technology all these pages will be rendered in advance

export async function generarateStaticParams(){
    return categories.map((category)=>({
        category:category
    }))
}
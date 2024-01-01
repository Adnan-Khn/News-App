import { categories } from "@/constant"
import fetchNews from "@/lib/fetchNews"
import NewsList from "./NewsList"
import response from "../response.json"

async function Home() {
  const news:NewsResponse = await fetchNews(categories.join(","))
  //console.log(news)

  await new Promise((resolve)=>setTimeout(resolve,2000))
  return (
    <div>
      <NewsList news={news}/>      
    </div>
  )
}
export default Home
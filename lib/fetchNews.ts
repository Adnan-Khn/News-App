import { categories } from './../constant';
import { gql } from "graphql-request";
import sortNewsByImage from './sortNewsByImage';

const fetchNews = async(
    category?:Category| string,
    keywords?:string,
    isDynamic?:boolean)=>{
    //GraphQL query
    const query = gql`
    query MyQuery(
        $access_key:String!
        $categories:String!
        $keywords:String
    ){
      myQuery(
        access_key:$access_key
        categories:$categories
        countries:"us,au,in"
        keywords:$keywords
        sort:"published_desc") {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;
    //fetching and caching...
    const res = await fetch('https://skaun.stepzen.net/api/getting-started/__graphql',{
        method:'POST',
        cache:isDynamic?'no-cache':'default',
        next:isDynamic?{revalidate:0}:{revalidate:200},
        headers:{
            "Content-Type":"application/json",
            "Authorization":`apikey ${process.env.STEPZEN_API_KEY}`
        },
        body:JSON.stringify({
            query,
            variables:{
                access_key:process.env.MEDIASTACK_API_KEY,
                keywords:keywords,
                categories:category,
            }
        })
    })
    console.log(
        "Loading data for following categories:",
        category,
        keywords
    )
    const newsResponse = await res.json()
    //console.log(newsResponse)
    //sort by Image
    const news = sortNewsByImage(newsResponse.data.myQuery)
    return news
}
export default fetchNews
import ReadMoreButton from "./ReadMoreButton"
import TimeStamp from "./TimeStamp"

/* eslint-disable @next/next/no-img-element */
type Props={
    article:Article
}
function Article({article}:Props) {
  return (
    <article className="bg-slate-100 dark:bg-slate-800 flex flex-col
    rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-slate-200
    transition-all duration-200 ease-out">
        {article.image && (
            <img
            src={article.image}
            alt={article.title}
            className="h-56 w-full object-cover rounded-t-md shadow-md"
            />
        )}
        <div className="flex-1 flex flex-col">
            <div className="flex-1 flex flex-col p-5">
                <h2 className="font-bold font-serif">{article.title}</h2>
                <section className="mt-2 flex-1 "><p className="text-xs line-clamp-2">{article.description}</p></section>
                <footer className="text-xs flex space-x-1 pt-5 italic text-gray-400 capitalize divide-x divide-gray-400">
                    <p>{article.source}</p>
                    <p className="pl-1">Country:{article.country}</p>
                    <p className="pl-1"><TimeStamp time={article.published_at}/></p>
                </footer>
            </div>
            <ReadMoreButton article={article}/>
        </div>
    </article>
  )
}
export default Article
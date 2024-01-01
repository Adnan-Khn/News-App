import { notFound } from "next/navigation"

type Props={
    searchParams?:Article
}
function ArticlePage({searchParams}:Props) {
    if(
        (searchParams && Object.entries(searchParams).length === 0)||!searchParams

    ){return notFound}

    const article:Article = searchParams
  return (
    <article>
        <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
            {article.image && (
                // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
                <img
                className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl
                object-cover rounded-lg shadow-md"
                src={article.image}
                alt={article.title}
                />
            )}
            <div className="px-10">
                <h1 className="headerTitle px-0 no-underline pb-2">
                    {article.title}
                </h1>
                <div className="flex divide-x-2 space-x-2 divide-gray-400 ">
                    <h2 className="font-italic font-bold">By : {article.author ? article.author:"Unknown"}</h2>
                    <p className="font-bold capitalize pl-4">Source : {article.source}</p>
                    <p className="pl-4">Published At : {article.published_at}</p>
                </div>
                <div className="mt-10">
                    <p className="mx-2">{article.description}</p>
                </div>

            </div>
        </section>
    </article>
  )
}
export default ArticlePage
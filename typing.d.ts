type Category =
   |"general"
   |"business"
   |"entertainment"
   |"health"
   |"science"
   |"sports"
   |"technology";

type pagination= {
   "limit": Int;
   "offset": Int;
   "count": Int;
   "total": Int;
}
type Article={
   "author": string|null
   "title": string
   "description": string
   "url": string
   "source": string
   "image": string|null
   "category": string
   "language": string
   "country": string
   "published_at": string
}
type NewsResponse={
   pagination:Pagination;
   data:Article[]
}
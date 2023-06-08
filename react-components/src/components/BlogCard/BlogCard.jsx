/** THIS IS THE VARIANT WE ARE GOING TO US IN CLASS */
/**
 * Variants for handling properties (props) with JavaScrip Destructuring
 */
export function BlogCard(props) {
  // console.log(props)
  
  const {
    slug,
    title,
    description,
    body,
    tagList,
    createdAt,
    updatedAt,
    favorited,
    favoritesCount,
    author,
  } = props

  return (
    <article>
      <header>
        <h1>{author.username}</h1>
      </header>

      <h1>{title}</h1>
      <p>{body}</p>
    </article>
  )
}

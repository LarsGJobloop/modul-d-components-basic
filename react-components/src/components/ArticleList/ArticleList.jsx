export function ArticleList(props) {
  console.log(props)
  const { children } = props

  return (
    <ul>
      {children}
    </ul>
  )
}
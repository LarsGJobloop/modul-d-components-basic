function BlogCard(props) {
  console.log(props);

  return (
    <article>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </article>
  );
}

/**
 * Variants for handling properties (props) with JavaScrip Inline Destructuring
 */
function BlogCardVariantB({ body, description, slug, title }) {
  return (
    <article>
      <h1>{title}</h1>
      <p>{body}</p>
    </article>
  );
}

/** Named Arrow Functions */
const BlogCardVariantArrow = (props) => {
  console.log(props);

  return (
    <article>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </article>
  );
};

import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <article className="card ">
    <div className="card-image">
      <Link to={post.frontmatter.path}>
        {!!post.frontmatter.thumbnail && (
          <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
        )}
      </Link>
    </div>
    <header>
      <h2 className="post-title">
        <Link to={post.frontmatter.path} className="post-link">
          {post.frontmatter.title}
        </Link>
      </h2>
      <div className="post-meta">{post.frontmatter.date}</div>
    </header>
  </article>
)
export default PostLink

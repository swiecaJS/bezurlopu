import React from 'react'
import { Link } from 'gatsby'
export default function PostPreview ({ post }) {
  console.log('halko tu post', post)

  const imageStyle = {
    backgroundImage: `url(${post.frontmatter.image.childImageSharp.fluid.src})`
  }

  return (
    <article
      className='post'
      style={{ border: '1px solid #333' }}
      key={post.id}
    >
      <div className='post__img' style={imageStyle} />
      <div className='post__content'>
        <div className='post__content__header'>
          <Link className='has-text-primary post__content__header__text' to={post.fields.slug}>
            {post.frontmatter.title}
          </Link>
          <span> &bull; </span>
          <small>{post.frontmatter.date}</small>
        </div>
        <div className='post__content__text'>
          {post.excerpt}
        </div>
        <div className='post__content__links'>
          <Link className='button is-small' to={post.fields.slug}>
            Czytaj →
          </Link>
        </div>
      </div>

    </article>
  )
}

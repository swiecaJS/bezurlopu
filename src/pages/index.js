import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostPreview from '../components/PostPreview'
import Paralax from '../components/Paralax'
export default class IndexPage extends React.Component {
  render () {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const { file } = data
    return (
      <Layout>
        <Paralax bgImage={file.childImageSharp.fluid.src}/>
        <section className='section'>
          <div className='container'>
            <div className='content'>
              <h1 className='has-text-weight-bold is-size-2 header'>Ostatnie wpisy</h1>
            </div>
            <div className='posts'>
              {posts
                .map(({ node: post }) => (
                  <PostPreview post={post} key={post.id} />
                ))}
            </div>

          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export const pageQuery = graphql`
  query IndexQuery {
    file (relativePath: { eq: "bg.JPG" }){
      id,
      childImageSharp {
        fluid (maxHeight: 500) {
          src
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY"),
            image {
              childImageSharp{
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

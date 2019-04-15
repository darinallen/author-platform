import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'
import WritingPreviewGrid from '../components/writing/writing-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Hero from '../components/shared/hero/hero'
import BookCardGrid from '../components/writing/book-card-grid'

import { responsiveTitle1 } from '../components/typography.module.css'

const WritingPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)

  return (
    <Layout>
      <SEO title='Blog' />
      <Hero />
      <Container>
        <h1 className={responsiveTitle1}>Writing</h1>
        <BookCardGrid nodes={postNodes} />
        {postNodes && postNodes.length > 0 && <WritingPreviewGrid nodes={postNodes} />}
      </Container>
    </Layout>
  )
}

export default WritingPage

export const query = graphql`
  query WritingPageQuery {
    posts: allSanityWriting(limit: 12, sort: { fields: [releaseDate], order: DESC }) {
      edges {
        node {
          id
          releaseDate
          mainImage {
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
          categories {
            title
          }
        }
      }
    }
  }
`

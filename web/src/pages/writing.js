import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Hero from '../components/shared/hero/hero'
import typewriter from '../components/shared/hero/typewriter.png'
import PreviewGrid from '../components/shared/preview-grid'
import WritingPreview from '../components/writing-preview'

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

  const writingNodes = data && data.writing && mapEdgesToNodes(data.writing)

  return (
    <Layout>
      <SEO title='Writing' />
      <Hero
        image={typewriter}
        titleTop='Writing'
        subtitle='Science Fiction, Slice of Life & Short Stories'
      />
      <Container>
        <h1 className={responsiveTitle1}>Writing</h1>
        {writingNodes && (
          <PreviewGrid>
            {writingNodes &&
              writingNodes.map(node => (
                <li key={node.id}>
                  <WritingPreview {...node} />
                </li>
              ))}
          </PreviewGrid>
        )}
      </Container>
    </Layout>
  )
}

export default WritingPage

export const query = graphql`
  query WritingPageQuery {
    writing: allSanityWriting(sort: { fields: [releaseDate], order: DESC }) {
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

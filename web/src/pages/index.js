import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Hero from '../components/shared/hero/hero'
import tAnthony from '../components/shared/hero/tanthony.png'
import Container from '../components/container'
import Welcome from '../components/welcome'
import PreviewGrid from '../components/shared/preview-grid'
import WritingPreview from '../components/writing-preview'
import Featured from '../components/featured'
import BlogPostPreview from '../components/blog-post-preview'

const IndexPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs)
    : []

  const writingNodes = (data || {}).writing
    ? mapEdgesToNodes(data.writing).filter(filterOutDocsWithoutSlugs)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Hero
        image={tAnthony}
        titleTop='T Anthony '
        titleBottom='Allen'
        subtitle='Novels, Flash Fiction & Artwork'
        noBottomShadow
        className='headshot'
      />
      <Container>
        <h1 hidden>Welcome to {site.title}</h1>
        <Welcome />
        {writingNodes && (
          <PreviewGrid title='Recent writing' browseMoreHref='/writing/'>
            {writingNodes &&
              writingNodes.map(node => (
                <li key={node.id}>
                  <WritingPreview {...node} />
                </li>
              ))}
          </PreviewGrid>
        )}
      </Container>
      <Container color='primary'>
        <Featured />
      </Container>
      <Container>
        {postNodes && (
          <PreviewGrid title='Recent blog posts' browseMoreHref='/blog/'>
            {postNodes &&
              postNodes.map(node => (
                <li key={node.id}>
                  <BlogPostPreview {...node} />
                </li>
              ))}
          </PreviewGrid>
        )}
      </Container>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }

    posts: allSanityPost(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
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
        }
      }
    }

    writing: allSanityWriting(limit: 6, sort: { fields: [releaseDate], order: DESC }) {
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

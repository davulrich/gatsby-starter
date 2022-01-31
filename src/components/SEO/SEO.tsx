import React from 'react'
import {Helmet} from 'react-helmet'
import {useStaticQuery, graphql} from 'gatsby'

interface Props {
  title?: string
  description?: string
  image?: string
}

const SEO = ({title, description, image}: Props) => {
  const {site} = useStaticQuery(query)
  if (!site?.siteMetadata) return null

  const {defaultTitle, defaultDescription, siteUrl, defaultImage} =
    site.siteMetadata

  const seo = {
    title: title || defaultTitle || '',
    description: description || defaultDescription || '',
    url: siteUrl || '',
    image: image || defaultImage || '',
  }

  return (
    <Helmet title={seo.title}>
      <meta charSet="utf-8" />
      <link rel="canonical" href={seo.url} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:type" content="website" />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: siteUrl
        defaultImage: image
      }
    }
  }
`

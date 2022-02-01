import React from 'react'
import {graphql, navigate} from 'gatsby'
import {getUserLangKey} from 'ptz-i18n'
import {withPrefix} from 'gatsby-link'

interface Props {
  data: {
    site: {
      siteMetadata: {
        defaultLangKey: string
        langs: string[]
      }
    }
  }
}

const RedirectIndex = (arguments_: Props) => {
  if (typeof window === 'undefined') return null

  const {langs, defaultLangKey} = arguments_.data.site.siteMetadata
  const langKey = getUserLangKey(langs, defaultLangKey)
  const homeUrl = withPrefix(`/${langKey}/`)
  navigate(homeUrl)

  return <div />
}

export default RedirectIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        defaultLangKey
        langs
      }
    }
  }
`

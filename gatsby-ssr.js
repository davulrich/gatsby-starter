import React from 'react'
import './src/assets/external-styles/main.scss'
import Layout from './src/components/Layout/Layout'

export const wrapPageElement = ({element}) => <Layout>{element}</Layout>

// Add custom scripts to the header
const HeadComponents = [<script key={1} type="text/javascript"></script>]

export const onRenderBody = ({setHtmlAttributes, setHeadComponents}) => {
  setHtmlAttributes({lang: 'en-GB'})
  setHeadComponents(HeadComponents)
}

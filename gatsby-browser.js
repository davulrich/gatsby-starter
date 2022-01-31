import React from 'react'
import './src/assets/external-styles/main.scss'
import Layout from './src/components/Layout/Layout'
export const wrapPageElement = ({element}) => <Layout>{element}</Layout>

import React, {ReactNode} from 'react'
import SEO from '../SEO'
import Typography from '../../styles/Typography'
import GlobalStyle from '../../styles/GlobalStyle'
import Header from '../Header'
import Footer from '../Footer'

const Layout: React.FC<ReactNode> = ({children}) => (
  <>
    <SEO />
    <Typography />
    <GlobalStyle />
    <Header />
    <main className="content">{children}</main>
    <Footer />
  </>
)

export default Layout

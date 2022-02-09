import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"

// Styles
import "../styles/reset.css"
import "../styles/accessibility.css"
import "../styles/global.module.css"
import "../fonts/fonts.css"
import style from "./layout.module.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <a className="skip-link screen-reader-text" href="#primary"> Skip to the content </a>
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteDescription={data.site.siteMetadata.description}
      />
      <main id="primary" className={style.site_main}>
        {children}
      </main>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  )
}

export default Layout
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/styles.css"
import ScrollToTop from "react-scroll-to-top"

import loadable from "@loadable/component"

const SpanishComponent = loadable(() => import("../components/spanishComponent"))

const Spanish = ({ data }) => {

  return (

    <Layout>
      <SEO
        title="Spanish"
        description="Daily assignments for Spanish"
        image="/logo.png"
        pathname="/spanish"
      />

      <ScrollToTop smooth color="#78CCC7"/>
      
      <SpanishComponent/>

    </Layout>
  )
}
export default Spanish
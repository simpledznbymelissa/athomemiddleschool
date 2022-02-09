import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ScrollToTop from "react-scroll-to-top"
import loadable from "@loadable/component"

const Science7Component = loadable(() => import("../components/science7Component"))

const Science7 = ({ data }) => {

  return (
    <Layout>
      <SEO
        title="7th Grade Science"
        description="Daily assignments for 7th grade science"
        image="/logo.png"
        pathname="/science7"
      />

      <ScrollToTop smooth color="#78CCC7"/>

      <Science7Component/>

    </Layout>
  )
}

export default Science7
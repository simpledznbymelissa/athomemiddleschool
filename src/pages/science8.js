import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ScrollToTop from "react-scroll-to-top"
import loadable from "@loadable/component"

const Science8Component = loadable(() => import("../components/science8Component"))

const Science8 = ({ data }) => {

  return (
    <Layout>
      <SEO
        title="8th Grade Science"
        description="Daily assignments for 8th grade science"
        image="/logo.png"
        pathname="/science8"
      />

      <ScrollToTop smooth color="#78CCC7"/>

        <Science8Component/>

    </Layout>
  )
}
export default Science8
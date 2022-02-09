import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ScrollToTop from "react-scroll-to-top"
import loadable from "@loadable/component"

const SS7Component = loadable(() => import("../components/ss7Component"))

const SocialStudies7 = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="7th Grade Social Studies"
        description="Daily assignments for 7th grade social studies"
        image="/logo.png"
        pathname="/socialstudies7"
      />

      <ScrollToTop smooth color="#78CCC7"/>
      
      <SS7Component/>

    </Layout>
  )
}

export default SocialStudies7
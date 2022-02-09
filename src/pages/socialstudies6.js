import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ScrollToTop from "react-scroll-to-top"
import loadable from "@loadable/component"

const SS6Component = loadable(() => import("../components/ss6Component"))

const SocialStudies6 = ({ data }) => {

return (

    <Layout>
      <SEO
        title="6th Grade Social Studies"
        description="Daily assignments for 6th grade social studies"
        image="/logo.png"
        pathname="/socialstudies6"
      />

      <ScrollToTop smooth color="#78CCC7"/>
      <SS6Component/>

    </Layout>
  )
}

export default SocialStudies6
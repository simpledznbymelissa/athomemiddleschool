import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ScrollToTop from "react-scroll-to-top"
import loadable from "@loadable/component"

const SS8Component = loadable(() => import("../components/ss8Component"))
const SocialStudies8 = ({ data }) => {

  return (
    <Layout>
      <SEO
        title="8th Grade Social Studies"
        description="Daily assignments for 8th grade social studies"
        image="/logo.png"
        pathname="/socialstudies8"
      />

      <ScrollToTop smooth color="#78CCC7"/>

      <SS8Component/>

    </Layout>
  )
}

export default SocialStudies8
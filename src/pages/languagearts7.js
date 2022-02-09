import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ScrollToTop from "react-scroll-to-top"
import loadable from "@loadable/component"

const LA7Component = loadable(() => import("../components/la7Component"))

const LanguageArts7 = ({ data }) => {

  return (

    <Layout>
      <SEO
        title="7th Grade Language Arts"
        description="Daily assignments for 7th grade language arts"
        image="/logo.png"
        pathname="/languagearts7"
      />

      <ScrollToTop smooth color="#78CCC7"/>

      <LA7Component/>
    </Layout>
  )
}

export default LanguageArts7

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/styles.css"
import ScrollToTop from "react-scroll-to-top"
import loadable from "@loadable/component"

const LA8Component = loadable(() => import("../components/la8Component"))

const LanguageArts8 = ({ data }) => {

  return (

    <Layout>
      <SEO
        title="8th Grade Language Arts"
        description="Daily assignments for 8th grade language arts"
        image="/logo.png"
        pathname="/languagearts8"
      />

      <ScrollToTop smooth color="#78CCC7"/>

      <LA8Component/>

    </Layout>
  )
}
export default LanguageArts8
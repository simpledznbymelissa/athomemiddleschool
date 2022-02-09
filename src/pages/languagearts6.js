import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ScrollToTop from "react-scroll-to-top"
import loadable from "@loadable/component"

const LA6Component = loadable(() => import("../components/la6Component"))

const LanguageArts6 = ({ data }) => {
  
  return (

    <Layout>
      <SEO
        title="6th Grade Language Arts"
        description="Daily assignments for 6th grade language arts"
        image="/logo.png"
        pathname="/languagearts6"
      />

      <ScrollToTop smooth color="#78CCC7"/>
      
   <LA6Component/>
    </Layout>
)
}

export default LanguageArts6
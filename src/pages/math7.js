import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/styles.css"
import ScrollToTop from "react-scroll-to-top"
import loadable from "@loadable/component"

const Math7Component = loadable(() => import("../components/math7Component"))

const Math7 = ({ data }) => {

  return (
    <Layout>
      <SEO
        title="Math 7th Grade"
        description="Daily lessons and curriculum for the 7th grade math."
        image="/logo.png"
        pathname="/math7"
      />
      <ScrollToTop smooth color="#78CCC7"/>
      
      <Math7Component/>
    </Layout>
  )
}

export default Math7

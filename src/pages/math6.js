import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/styles.css"
import ScrollToTop from "react-scroll-to-top"
import loadable from "@loadable/component"

const Math6Component = loadable(() => import("../components/math6Component"))

const Math6 = ({ data }) => {

  return (
    <Layout>
      <SEO
        title="Math 6th Grade"
        description="Daily lessons and curriculum for the 6th grade math."
        image="/logo.png"
        pathname="/math6"
      />

      <ScrollToTop smooth color="#78CCC7"/>
      <Math6Component/>
    </Layout>
  )
}

export default Math6

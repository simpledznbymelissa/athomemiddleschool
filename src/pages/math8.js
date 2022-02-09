import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/styles.css"
import ScrollToTop from "react-scroll-to-top"
import loadable from "@loadable/component"

const Math8Component = loadable(() => import("../components/math8Component"))

const Math8 = ({ data }) => {

  return (

    <Layout>

      <SEO
        title="Math 8th Grade"
        description="Daily lessons and curriculum for the 8th grade math."
        image="/logo.png"
        pathname="/math8"
      />
      <ScrollToTop smooth color="#78CCC7"/>
      
      <Math8Component/>
    </Layout>
  )
}

export default Math8
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ScrollToTop from "react-scroll-to-top"
import loadable from "@loadable/component"

const FrenchComponent = loadable(() => import("../components/frenchComponent"))

const French = ({ data }) => {

  return (

    <Layout>
      <SEO
        title="French"
        description="Daily assignments for learning middle school french"
        image="/logo.png"
        pathname="/french"
      />

      <ScrollToTop smooth color="#78CCC7"/>

      <FrenchComponent/>
    </Layout>
  )
}

export default French
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/styles.css"
import ScrollToTop from "react-scroll-to-top"
import loadable from "@loadable/component"

const CodingComponent = loadable(() => import("../components/codingComponent"))

const Coding = ({ data }) => {

  return (

    <Layout>

      <SEO
        title="Coding"
        description="Learn and develop your coding skills."
        image="/logo.png"
        pathname="/coding"

      />
      <ScrollToTop smooth color="#78CCC7"/>
      
      <CodingComponent/>
    </Layout>
  )
}
export default Coding
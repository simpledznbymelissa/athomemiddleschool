import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ScrollToTop from "react-scroll-to-top"
import loadable from "@loadable/component"
const Science6Component = loadable(() => import("../components/science6Component"))

const Science6 = ({ data }) => {

  return (
    <Layout>
      <SEO
        title="6th Grade Science"
        description="Daily assignments for 6th grade science"
        image="/logo.png"
        pathname="/science6"
      />

      <ScrollToTop smooth color="#78CCC7"/>
      
        <Science6Component/>
    </Layout>
  )
}

export default Science6
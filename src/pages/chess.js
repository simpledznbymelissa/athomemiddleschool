import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/styles.css"
import ScrollToTop from "react-scroll-to-top"
import loadable from "@loadable/component"


const ChessComponent = loadable(() => import("../components/chessComponent"))

const Chess = ({ data }) => {

  return (
    <Layout>
      <SEO
        title="Chess"
        description="Learn and develop your chess skills."
        image="/logo.png"
        pathname="/chess"
      />

      <ScrollToTop smooth color="#78CCC7"/>
      <ChessComponent/>
    </Layout>

  )
}
export default Chess



  
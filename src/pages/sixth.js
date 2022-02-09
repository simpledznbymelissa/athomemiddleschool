import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import "../styles/styles.css"
import Img from "gatsby-image"

const Sixth = ({ data }) => {
  return (

    <Layout>

      <SEO
        title="Sixth Grade"
        description="Daily lessons and curriculum for the sixth grade."
        image="/logo.png"
        pathname="/sixth"
      />

      <>
          <section className="block-circles">
            <div className="circle one"
                 style={{ backgroundColor:'#78D2D3', transform: "translate3d(0px, 0px, 0px) scale(0.9921, 1)", opacity: "0.9881" }}/>
            <div className="circle two" style={{ backgroundColor:'#78D2D3', transform: "translate(0px, 0px)", opacity: 1 }}/>
            <div className="hero-wrapper pbn hero">
              <h1 className="hero intro in-left">6th Grade</h1>
              <div className="hero info-block info-block-line in-left" style={{ marginBottom: "4em" }}>
                <h2 className="hero in-left">daily lesson plans</h2>
              </div>
            </div>
          </section>

        {/*SUBJECTS SECTION*/}
        <main className="main">
          <div className="main-content">
            <div className="subjects" id="start-subjects">

              <div className="subject la6">
                <Link to="/languagearts6">
                  <Img className="week" alt="la" fluid={data.la.childImageSharp.fluid}/>
                  <p className="subject-info">language arts</p>
                </Link></div>

              <div className="subject science6">
                <Link to="/science6">
                  <Img className="week" alt="science" fluid={data.science.childImageSharp.fluid}/>
                  <p className="subject-info" style={{fontSize: '34px'}}>life science</p>
                </Link></div>

              <div className="subject math6">
                <Link to="/math6">
                  <Img className="week" alt="math symbol" fluid={data.math.childImageSharp.fluid}/>
                  <p className="subject-info">math</p>
                </Link></div>

              <div className="subject social-studies6">
                <Link to="/socialstudies6">
                  <Img className="week" alt="social studies" fluid={data.socialstudies.childImageSharp.fluid}/>
                  <p className="subject-info">social studies</p>
                </Link></div>

              <div className="subject art6">
                <a href="http://artists.athomemiddleschool.com/" rel="noreferrer" target="_blank">
                  <Img className="week" alt="art" fluid={data.art.childImageSharp.fluid}/>
                  <p className="subject-info">great artists</p>
                </a></div>

              <div className="subject spanish">
                <Link to="/spanish">
                  <Img className="week" alt="spanish" fluid={data.spanish.childImageSharp.fluid}/>
                  <p className="subject-info">spanish</p>
                </Link></div>

              {/*<div className="subject french">*/}
                {/*<Link to="/french">*/}
                  {/*<Img className="week" alt="french" fluid={data.french.childImageSharp.fluid}/>*/}
                  {/*<p className="subject-info">french</p>*/}
                {/*</Link></div>*/}

              <div className="subject coding6">
                <Link to="/coding">
                  <Img className="week" alt="coding" fluid={data.coding.childImageSharp.fluid}/>
                  <p className="subject-info">coding</p>
                </Link></div>

              <div className="subject chess6">
                <Link to="/chess">
                  <Img className="week" alt="chess" fluid={data.chess.childImageSharp.fluid}/>
                  <p className="subject-info">chess</p>
                </Link></div>



            </div>
          </div>
        </main>
      </>

    </Layout>
  )
}

export default Sixth


export const query = graphql`
{
art: file(relativePath: {eq: "subjectimages/art.png"}) {
  childImageSharp {
    fluid(maxWidth: 600) {
    ...GatsbyImageSharpFluid
    }
  }
}
chess: file(relativePath: {eq: "subjectimages/chess.png"}) {
  childImageSharp {
    fluid(maxWidth: 600) {
    ...GatsbyImageSharpFluid
    }
  }
}
coding: file(relativePath: {eq: "subjectimages/coding.png"}) {
  childImageSharp {
    fluid(maxWidth: 600) {
    ...GatsbyImageSharpFluid
    }
  }
}
la: file(relativePath: {eq: "subjectimages/la.png"}) {
  childImageSharp {
    fluid(maxWidth: 600) {
    ...GatsbyImageSharpFluid
    }
  }
}
spanish: file(relativePath: {eq: "subjectimages/spanish.png"}) {
  childImageSharp {
    fluid(maxWidth: 600) {
    ...GatsbyImageSharpFluid
    }
  }
}
french: file(relativePath: {eq: "subjectimages/french.png"}) {
  childImageSharp {
    fluid(maxWidth: 600) {
    ...GatsbyImageSharpFluid
    }
  }
}
math: file(relativePath: {eq: "subjectimages/math.png"}) {
  childImageSharp {
    fluid(maxWidth: 600) {
    ...GatsbyImageSharpFluid
    }
  }
}
science: file(relativePath: {eq: "subjectimages/science.png"}) {
  childImageSharp {
    fluid(maxWidth: 600) {
    ...GatsbyImageSharpFluid
    }
  }
}
socialstudies: file(relativePath: {eq: "subjectimages/socialstudies.png"}) {
  childImageSharp {
    fluid(maxWidth: 600) {
    ...GatsbyImageSharpFluid
    }
  }
}
}
`
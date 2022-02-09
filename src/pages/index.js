import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "./index.module.css"
import {Link} from "gatsby"
import loadable from "@loadable/component"

const Slider = loadable(() => import("../components/slider"))

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="At Home Middle School"
        description="At Home Middle School offers free online education for students in grades 6-8 with classes in math, language arts, social studies, science, Spanish, coding, and chess.  The site is always free to use and there is nothing to buy.  There are no fees, ads, affiliate links, or subscriptions. At Home Middle School pulls together resources from sites like TedEd, CK-12, Khan Academy and Crash Course, and organizes it into 180 daily homeschool lessons. "
        image="/logo.png"
        pathname="/"
      />

      <div className={style.bubbles}>
        <Slider/>
        {/*<p className={style.mainTitle} data-sal="slide-up" data-sal-duration="600"*/}
           {/*data-sal-easing="ease">Easy to follow daily lesson plans.</p>*/}
        <div className={style.content}>
          <div className={style.giantText} data-sal="slide-left"
               data-sal-duration="800" data-sal-easing="ease"> <Link to="/sixth">6th Grade</Link></div>
          <div className={style.giantText + " " + style.seven} data-sal="slide-right"
               data-sal-duration="1000" data-sal-easing="ease"> <Link to="/seventh">7th Grade</Link></div>
          <div className={style.giantText + " " + style.eight} data-sal="slide-right"
               data-sal-duration="1200" data-sal-easing="ease"> <Link to="/eighth">8th Grade</Link></div>
        </div>
      </div>

    </Layout>
  )
}
export default IndexPage

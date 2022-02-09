import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../components/artist.module.css"
import { Link } from "gatsby"


const Resources = ({ data }) => {
  return (

    <Layout>
      <SEO
        title="Resources"
        description="Links to additional resources."
        image="/logo.png"
        pathname="/resources"
      />

      <>
        <div style={{ height: "100vh", width: "100vw" }} className={styles.bubbles}>
          <section className={styles.sectioncontent}>
            <div className={styles.artistname} data-sal="slide-up" data-sal-duration="1600"
                 style={{ color: "" }}>Resources
            </div>
            <div className={styles.descrip} data-sal="slide-up" data-sal-duration="1600"><a className={styles.resources}
                                                                                            href="https://scheduler.athomemiddleschool.com/"
                                                                                            rel="noreferrer"
                                                                                            target="_blank">Weekly
              Planner</a></div>

            <div className={styles.descrip} data-sal="slide-up" data-sal-duration="1600"><a className={styles.resources}
                                                                                            href="https://checklist.athomemiddleschool.com/"
                                                                                            rel="noreferrer"
                                                                                            target="_blank">Daily
              Checklist</a></div>

            <div className={styles.descrip} data-sal="slide-up" data-sal-duration="1600"><a className={styles.resources} href="https://timer.athomemiddleschool.com/"  rel="noreferrer" target="_blank">20
              Minute Timer</a></div>

            <div className={styles.descrip} data-sal="slide-up" data-sal-duration="1600"><Link
              className={styles.resources} to="/termsofuse" rel="noreferrer" target="_blank">Terms of Use </Link></div>

            <div className={styles.descrip} data-sal="slide-up" data-sal-duration="1600"><a
              href="https://hslda.org/legal?fbclid=IwAR0OU7GXOUB47p5lvy8BpG2qH37gyCoOel_7EojkrCt9MfyjlIeCjuRtJw4"
              rel="noreferrer" target="_blank">Homeschool Laws by State </a>
            </div>

            <div className={styles.descrip} data-sal="slide-up" data-sal-duration="1600">Email <a
              href="mailto:athomemiddleschool@gmail.com">athomemiddleschool@gmail.com</a>
            </div>
            {/*<div className={styles.descrip} data-sal="slide-up" data-sal-duration="1600"> <Link className={styles.resources} to="/writingprompts">Writing Prompts</Link></div>*/}

            <div></div>
            <div></div>

          </section>
        </div>
      </>

    </Layout>
  )
}

export default Resources
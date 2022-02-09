import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../components/artist.module.css"


const About = ({ data }) => {
  return (

    <Layout>
      <SEO
        title="About"
        description="A summary about At Home Middle School, how it works, who it was built for and who built it."
        image="/logo.png"
        pathname="/about"
      />

      <>
        <div style={{ minHeight: "100vh", width: "100vw", "--bubble2": "rgba(59, 181, 207, .36)" }}
             className={styles.bubbles}>
          <section className={styles.sectioncontent}>
            <div className={styles.artistname} data-sal="slide-up" data-sal-duration="1600">About
            </div>
            <div className={styles.about}>
              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">This is the site I wish I
                had when I started homeschooling my kids.</p>

              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">At Home Middle School
                pulls together the best free online curriculum, from sites like TedEd, CK-12 and Crash Course, and
                organizes it into daily lessons. A student is meant
                to complete a lesson in each subject every day. Each lesson takes between 30 to 60 minutes to
                complete. </p>

              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">There are
                180 lessons for each subject, the same as a school year. The curriculum is not meant
                to replace at-home or in-class learning, but fill in gaps and reduce the number of hours it takes to
                prepare daily lesson plans.  All curriculum and links posted are secular.</p>

              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">While much of the
                curriculum aligns with many state core requirements, your state may be more stringent or have different
                requirements. Make sure you cover the curriculum <a
                  href="https://hslda.org/legal?fbclid=IwAR0OU7GXOUB47p5lvy8BpG2qH37gyCoOel_7EojkrCt9MfyjlIeCjuRtJw4"
                  rel="noreferrer" target="_blank">your state requires.</a></p>

              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">This site is always free
                to use.
                There are no ads or affiliate links. There is no registration, no company sponsors and nothing to
                buy. </p>

              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600"><strong>Saving your work:
                IMPORTANT</strong><br/>All of your work from this site will be saved to the local storage of
                your computer or the device your student uses.
                This means your data is never collected or tracked. This also means if you clear your cookies, you will
                erase all
                the work you saved from At Home Middle School. </p>
              <p className={styles.pararesources}>If you need to clear your cookies, you can selectively clear which
                ones you remove and leave your work from this site.
                While this is a great option, it's a
                good idea to always back up your student's work! Depending on your device you have several options.</p>

              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600"><strong>Options for
                saving work</strong></p>
              <p className={styles.leftmarg} data-sal="slide-up" data-sal-duration="1600">a) On most Apple devices,
                'Select All' in the textbox and then select 'Share' to email to a parent or teacher.</p>
              <p className={styles.leftmarg} data-sal="slide-up" data-sal-duration="1600">b) On most devices, <i>--
                'Select
                All' (ctrl a) -- Copy (ctrl c) -- Paste (ctrl p) </i> into a Google or Word document (or another
                application like Notes/Keep). Then save it. Or copy/paste into an email. </p>

              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600"><strong>Links to
                educational sites</strong><br/>At Home Middle School
                uses free online resources that sometimes require you to sign up and log in. Students can often sign up
                on their own, but parents or teachers may need to help. All sites used and linked to are legitimate and
                not linked to spamware or viruses. External sites used that require signing in include Khan Academy,
                Chess
                kid, CK-12, Quizlet, Duolingo, CodeAcademy, and Lichess.</p>

              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600"><strong>Who developed At
                Home
                Middle School?</strong><br/>
                My name is Melissa Brown and I am a web developer. Before this I was a business professor at the
                University of Alaska. I spearheaded and managed the development of our online business degree. I also
                created and taught courses online and in the classroom for over 15 years. Most importantly, I have been
                a homeschool mom and understand the challenges of making learning meaningful,
                fun, and effective. </p>

              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">I believe every child
                deserves to build the lives they want for themselves and I know
                this starts with a solid education. My oldest daughter recently graduated from college and works as a
                civil engineer. My son is currently studying computer science in college and my youngest daughter is
                a middle school homeschool student.</p>

              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">I hope you find the
                website useful. If you have any suggestions for improvements, questions, concerns, or just want to reach
                out to say
                hi, you can contact me at <a
                  href="mailto:athomemiddleschool@gmail.com">athomemiddleschool@gmail.com</a> or connect with me on <a
                  href="https://www.linkedin.com/in/melissa-brown-2b29b116/" rel="noreferrer"
                  target="_blank">LinkedIn.</a>
              </p>
            </div>

          </section>
        </div>
      </>


    </Layout>
  )
}

export default About
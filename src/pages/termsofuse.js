import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../components/artist.module.css"


const TermsofUse = ({ data }) => {
  return (

    <Layout>
      <SEO
        title="Terms of Use"
        description="Terms of Service document."
        image="/logo.png"
        pathname="/termsofuse"
      />

      <>
        <div style={{ minHeight: "100vh", width: "100vw",  "--bubble2": "rgba(229, 187, 225, .99)" }} className={styles.bubbles}>
          <section className={styles.sectioncontent}>
            <div className={styles.artistname} data-sal="slide-up" data-sal-duration="1600">Terms of Use</div>
            <div className={styles.about}>
              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">At Home Middle School is a free online educational site offered for use by students, teachers and parents grades 6-8.  Your use of At Home Middle School as a teacher, parent, guardian or student is subject to the below terms and conditions.    The content is offered for free to aid in teaching and learning. By using the At Home Middle School platform, you are entering into a contract with At Home Middle School that governs your use of the platform and its contents. </p>

              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">It's recognized that you've come to this site to use educational materials and not to have to read a long legal document.  That's very understandable.  Regrettably, it's necessary to have a legal document that spells out the rules for using the site and accessing the educational materials provided for free. </p>

              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">Permitted Uses:
                You may use At Home Middle School for lawful educational purposes only.</p>

              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">Commercial Use Prohibited:
                You may not use At Home Middle School for commercial purposes. This means you may not sell content that you find on this website, or products or services that incorporate the content, nor may you use the content to promote or advertise products or services. </p>

              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">Teachers, Parents, and Guardians are responsible for obtaining consent from the student's parent or legal guardian.  Materials are meant to be supplemental.  It is the responsibility of teachers, parents, and legal guardians to research core requirements for the state in which they live to ensure curriculum meets those requirements for their student.  </p>

              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">Inappropriate Content: Users may encounter texts, videos, poetry or other materials they consider controversial, offensive, or inappropriate. It is the responsibility of the parent, guardian or teacher to review all materials before their student views them.</p>
              
              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">Copyright: 
                At Home Middle School welcomes you to make fair use, as defined by U.S. copyright law, of the content presented on this website.  You are responsible for determining whether your use is fair and for responding to any claims that may arise from your use.  If you are not sure, you can contact athomemiddleschool@gmail.com.</p>
              
              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">Copyright Complaints: 
                If you have any complaints or objections to content posted on At Home Middle School because it was not properly credited or you believe it was posted without permission and you are the copyright owner, please contact athomemiddleschool@gmail.com with your contact information and a link to the relevant content. Please identify in your communication if you wish to receive attribution for a posted item of content or wish to have the content removed.   </p>

              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">The Terms of Use include an arbitration provision and class action waiver. This means that all disputes arising out of your use of the The Terms of Use include an arbitration provision and class action waiver. This means that all disputes arising out of your use of the At Home Middle School platform will be resolved by binding, individual arbitration, and you are waiving the right to a trial by a jury or to participate in any class action or representative proceeding.   As long as you comply with the Terms of Use, you are granted a limited license to use the platform and its contents for educational purposes. However, you are not permitted to resell any portion of the platform or any content provided via the platform.  </p>

              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">Links To Third Party Sites: 
                At Home Middle School links to third party sites which are not under the control of At Home Middle School. These links are provided as a convenience and for informational purposes.  At Home Middle School is not affiliated with linked sites or receive any compensation for any advertisements that may be posted on their sites. At Home Middle School has no control over, makes no representation or warranty and bears no responsibility for the accuracy, legality or content of externally linked sites. </p>
              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">Links From Third Party Sites:  
                Linking is an important feature that facilitates searching and making connections among websites. If you link to At Home Middle School you agree to present the link in a manner that does not give the impression that the At Home Middle School endorses, whether expressly or implicitly, any products, services or opinions provided on your website and that the link contain a clearly written notice that the user is leaving your website and accessing another. </p>
              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">Disclaimer:
                Liability Is Limited. Because  At Home Middle School offers the platform and the educational materials for free, a lot of expenses are incurred with no revenues.  At Home Middle School therefore caps total liability under the Terms of Use and is not responsible for any non-direct damages. At Home Middle School is provided "AS IS" WITHOUT A WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS OF A PARTICULAR USE, AND/OR NON-INFRINGMENT. At Home Middle School as a whole, portions of the site, or particular pieces of content, may not be available at any time.  At its sole discretion, at any time, At Home Middle School may suspend or terminate At Home Middle School without notice. At Home Middle School shall not be responsible or liable for any damage that may occur due to your use of At Home Middle School or downloading any content from At Home Middle School. </p>
              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">Warranty and Indemnity:  
                By using At Home Middle School you represent and warrant that your use will be consistent with these Terms of Use. You agree to indemnify, defend and hold At Home Middle School harmless from all claims, causes of action, allegations, costs, expenses, fees (including reasonable attorneys' fees), judgments, liabilities, losses, and damages arising from or relating to your use of At Home Middle School. </p>
              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">Applicable Law and Jurisdiction: 
                These Terms of Use and any amendments or revisions shall be governed by applicable federal law and the laws of the District of Columbia, without regard to its conflict of laws principles. Any case, controversy, suit, action, or proceeding arising out of, in connection with, or related to these Terms of Use shall be brought in the appropriate federal court.</p>
              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">Reservation of Rights: 
                At Home Middle School reserves the right to change these Terms of Use without notice; changes shall be effective upon posting. Please check back regularly for updates. Failure of At Home Middle School to enforce any of these terms shall not constitute a waiver of such terms. </p>
              <p className={styles.pararesources} data-sal="slide-up" data-sal-duration="1600">BY USING THE PLATFORM, YOU AGREE THAT YOU HAVE READ AND UNDERSTOOD, AND, AS A CONDITION TO YOUR USE OF THE PLATFORM, YOU AGREE TO BE BOUND BY, THE TERMS AND CONDITIONS.   IF YOU ARE NOT ELIGIBLE, OR DO NOT AGREE TO THE TERMS, THEN YOU DO NOT HAVE OUR PERMISSION TO USE THE PLATFORM. YOUR USE OF THE PLATFORM, AND  THE PROVISION OF THE PLATFORM TO YOU, CONSTITUTES AN AGREEMENT BY AT HOME MIDDLE SCHOOL AND BY YOU TO BE BOUND BY THESE TERMS.</p>
            </div>

          </section>
        </div>
      </>


    </Layout>
  )
}

export default TermsofUse
import React from "react"
import Img from "gatsby-image"
import styles from "./artist.module.css"


const Painting = ({ leftPanel, h1Title, sectionDescription, paintingFixed, alt, rtPanel, paintingFluid, mobileBackground }) => {
  return (
    <div>
      <div className={styles.flexcontainer}>
        <div style={leftPanel} className={styles.flexitemLeft} data-sal="slide-up"
             data-sal-duration="400" data-sal-easing="ease">
          <div className={styles.flexcontent}>
            <h1 className={styles.textBig} data-sal="slide-up"
                data-sal-duration="800" data-sal-easing="ease">{h1Title}</h1>
            <div><p className={styles.textNormal} data-sal="slide-up"
                    data-sal-duration="800" data-sal-easing="ease">{sectionDescription}</p>
            </div>
          </div>
        </div>
        <div className={styles.flexitemRight} style={rtPanel} data-sal="slide-up"
             data-sal-duration="1800" data-sal-easing="ease"
        />
        <figure className={styles.paintingLg} data-sal="slide-up" data-sal-duration="1600" data-sal-easing="ease">
          <Img fixed={paintingFixed}
               alt={alt}
          />
        </figure>
      </div>
      <div className={styles.smContainer} style={mobileBackground}>
        <div data-sal="slide-up"
             data-sal-duration="800" data-sal-easing="ease">
          <Img fluid={paintingFluid} alt="Impression: Sunrise"/>
        </div>
      </div>
    </div>
  )
}

export default Painting
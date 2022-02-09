import React from "react"
import styles from "./artist.module.css"

const Artist = ({ bubble2, name, dates, descrip }) => {
  return (

    <div>
      <div style={bubble2}
           className={styles.bubbles}>
        <section className={styles.sectioncontent}>
          <div className={styles.artistname} data-sal="slide-up" data-sal-duration="1600">{name}</div>
          <div className={styles.artistdates}data-sal="slide-up" data-sal-duration="1600">{dates}</div>
          <div className={styles.artistdescrip} data-sal="slide-up" data-sal-duration="1600">{descrip}</div>
        </section>
      </div>
    </div>
  )
}

export default Artist

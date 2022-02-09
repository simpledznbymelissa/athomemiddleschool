import React from "react"
import "../styles/sliderstyles.css"

const Slider = () => {
  return (
    <>
      <div className='slider fadeIn'>
    <input name="input-slider" id='input-slide-autoplay' type="radio" className='input-slide' checked/>
        <div className='slide-description mainTitle'>
          <label className='slide-0'>
            <p className="mainTitle">Free online education for middle school students.</p>
          </label>
          <label className='slide-1'>
            <p className="mainTitle">Engaging curriculum with easy to follow daily lessons.</p>
          </label>
          <label className='slide-2'>
            <p className="mainTitle">Language arts, science, math, social studies & more.</p>
          </label>
          <label className='slide-3'>
            <p className="mainTitle">Always free. No ads, fees or registration.</p>
          </label>
        </div>
      </div>
    </>
  )
}

export default Slider



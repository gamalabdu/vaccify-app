import React, { useState } from 'react'
import { SliderData } from './SliderData'
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'

export default function ImageSlider({slides,selectedFiles}) {

    const [current,setCurrent] = useState (0)

    // const length = slides.length

     const length = selectedFiles.length

    console.log(selectedFiles)
    console.log("hello")

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ?  length - 1 : current - 1)
    }

    // if(!Array.isArray(slides) || length <= 0) {
    //     return null
    // }

    if(!Array.isArray(selectedFiles) || length <= 0) {
        return null
    }


  return (
    <section className="slider">
    <FaArrowAltCircleLeft size={40} className='left-arrow' onClick={prevSlide} />
    <FaArrowAltCircleRight size={40} className='right-arrow' onClick={nextSlide}/>
    {selectedFiles.map ((image,index) => {
        return (
            <div className={ index === current ? 'slide active' : 'slide' } key={index} >
                {index === current && (<img src={image} alt="card-images" className="card-images"></img>) }
            </div>
        )     
    })}
    </section>
  )
}



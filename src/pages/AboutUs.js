import React from 'react'

export default function AboutUs() {
  return (
    <>
      <img className="home-page-img" src={require("./people.jpeg")} alt="home-image" height="400"/>
      <h1 className ="about-us">"Can I see your vacination and ID?"</h1>
      <h3 className='bet'>
        We bet you've heard this once... or a thousand times. 
      </h3>
      <h2 className='allows'>
      EZProof allows you to collect your vaccination pass and ID in one convenient app!
      </h2>
    </>
  )
}

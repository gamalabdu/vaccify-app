import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';


export default function PresentUpload ({setSelectedFiles,selectedFiles}) {

  let image = new Image ()

  let navigate = useNavigate()

  // let [selectedFiles,setSelectedFiles] = useState([])

  function handleUpload (e) {
    let images = e.target.files
    let selectedFilesArray = Array.from(images)
    const imagesArray = selectedFilesArray.map((file) =>{
      return URL.createObjectURL(file)
    })
    setSelectedFiles(imagesArray)
  }

  function goTo () {
    if(selectedFiles.length === 0) {
      alert("must submit at least one photo")
    } else if(selectedFiles.length > 0) {
      navigate('/present')
    }
  }


  return (
    <div className="present-input">   
    <h4> Select All Files At Once for Multiple Submission </h4>
      <input 
      className='input-button'
      type="file" 
      multiple 
      onChange={handleUpload}
      accept="image/pdf, image/jpeg, image/png"
      />
      <button onClick={goTo} className="submit-button">Submit</button>
        <div className="images">
          {selectedFiles && 
          selectedFiles.map((image,index) => {
            return (
              <div key={image} className="image">
                <img src={image} height="200" className='card-image' />
                <button className='deleteBtn'
                onClick={() => {
                  setSelectedFiles(selectedFiles.filter((e) => e !== image))
                }}
                > delete </button>
              </div>
            )
          })
          }
        </div>
    </div>
  )
}


// onClick={goTo}  on button
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


export default function PresentUpload () {

  const [selectedFiles,setSelectedFiles] = useState([])

  let navigate = useNavigate()

  let image = new Image()

  function handleUpload (e) {
    let images = e.target.files
    selectedFiles.push(images[0])
    selectedFiles.push(images[1])
  }

  function goTo () {
    navigate('/present')
  }


  return (
    <div className="present-input">   
      <input type="file" multiple onChange={handleUpload}></input>
      <button onClick={goTo}>Submit</button>
    </div>
  )
}

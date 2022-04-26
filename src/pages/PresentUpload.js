import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


export default function PresentUpload () {

  const [selectedFiles,setSelectedFiles] = useState([])

  let navigate = useNavigate()

  function goTo () {
    navigate('/present')
  }

  function handleUpload () {
    
  }


  return (
    <div className="present-input">   
      <input type="file" multiple onChange={handleUpload}></input>
      <button onClick={goTo}>Submit</button>
    </div>
  )
}

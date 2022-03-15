import React, {useState} from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate } from "react-router-dom";
import firebase from 'firebase/app'


export default function PresentUpload () {
  

  const [selectedFile, setSelectedFile] = useState(null)

  const fileSelectedHandler = event => {
    setSelectedFile(event.target.files[0])
  }

  const fileUploadHandler = () => {
    const api = 'AIK0sqUrSByj8z96BSyocz'
    const fd = new FormData()
    fd.append('image',selectedFile,selectedFile.name)
    fetch('https://www.filestackapi.com/api/store/S3?key=AIK0sqUrSByj8z96BSyocz',fd,{
      onUploadProgress: progressEvent => {
        console.log('Upload Progess ' + Math.round(progressEvent.loaded / progressEvent.total) * 100 + '%' )
      }
    })
    .then(res => {
      console.log(res)
    })
  }

  return (
    <div className="present">   
      <input type="file" onChange={fileSelectedHandler} multiple/>
      <button onClick={fileUploadHandler}>Upload Files</button>
    </div>
  )
}

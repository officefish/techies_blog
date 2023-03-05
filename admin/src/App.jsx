import React, { useState } from 'react'

import { ToastContainer } from 'react-toastify'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'

import { FileUploader } from './components/file_uploader'
import { Preview } from './components/preview'

function App() {

  const [files, setFiles] = useState([])

  const onSuccess = (savedFiles) => {
    setFiles(savedFiles)
  }

  return (
    <div>
      <FileUploader onSuccess={onSuccess} />
      <div>
        <Preview files={files}/>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App

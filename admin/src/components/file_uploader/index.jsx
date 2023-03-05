import './styles.css'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export const FileUploader = ({onSuccess}) => {

    const [files, setFiles] = useState([])

    const onInputChange = e => {
        setFiles(e.target.files)
    }

    const onSubmit = e => {
        e.preventDefault()

        const data = new FormData()

        for (let i = 0; i < files.length; ++i) {
            data.append('file', files[i])
        }

        axios.post('//localhost:8000/upload', data)
            .then((response) => {
                console.log('[INFO] Upload Success')
                toast.success('Upload success')
                onSuccess && onSuccess(response.data)
            }).catch((e) => {
                console.log('Error', e)
                toast.error('Upload error')
            })
    }

    return <form method="post" 
    action="#" id="#" onSubmit={onSubmit}>
        <div className="form-group files">
            <label>Upload your file</label>
            <input type="file" 
            onChange={onInputChange}
            className="form_control" 
            multiple/>
        </div>
        <button>Submit</button>
    </form>
}
import React from "react"

export const Preview = ({files}) => {
    return files.length
        ? files.map( (file) => <img 
            src={`//localhost:8000/${file.filename}`}
            alt={file.originalname} />)
        : null 
}
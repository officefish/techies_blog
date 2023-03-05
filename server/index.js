import express from 'express'
import multer from 'multer'
import cors from 'cors'
import fs from 'fs-extra'
import crypto from 'crypto'

import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const __parent_dirname = path.resolve(__dirname, '..')

const MEDIA = 'media'
const MEDIA_DIST = `${__parent_dirname}\\${MEDIA}` 

const app = express()
app.use(cors())
app.use(express.static(MEDIA_DIST))
fs.ensureDirSync(MEDIA_DIST)

function sha256(content) {  
    return crypto.createHash('sha256').update(content).digest('hex')
}

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, MEDIA_DIST)
    },
    filename: (req, file, callback) => {
        const format = file.originalname && file.originalname.split('.').pop()
        const now = Date.now()
        const random = Math.floor(Math.random() * 10000000)
        const hash = sha256(`${now}-${random}`).slice(-8)
        const fileName = `photo_${now}_${hash}.${format}` 
        
        callback(null, fileName)
    }
})

const upload = multer({storage}).array('file')

app.post('/upload', (req, res) => {
    console.log('[POST] upload')
    upload(req, res, (error) => {
        if (error) {
            console.log ('[ERROR] ' + error)
        }
        return error 
        ? res.status(500).json(error)
        : res.status(200).send(req.files)
    })
})

app.listen(8000, () => {
    console.log ('App is running on port 8000')
})

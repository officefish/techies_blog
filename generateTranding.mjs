import fs from 'fs'

const generateTrending = mediaDir => {
    let trending = []
    fs.readdirSync(mediaDir).forEach(file => {
        trending.push(file)
    })
    return trending  
}

console.log(generateTrending('./media/'))
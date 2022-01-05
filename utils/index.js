const fs = require("fs");


const addMovie = (movieArray, movieObj) =>{
    
    try {
        movieArray.push(movieObj)
        const stringyObj = JSON.stringify(movieArray)
        fs.writeFileSync('./storage.json', stringyObj)
    } catch (error) {
        console.log(error)
        
    }
}

module.exports = { addMovie }
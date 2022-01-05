const yargs = require("yargs");
const { addMovie } = require("./utils/index.js")
const fs = require("fs")



const app = () => {
 try {
     let movieArray;

        try {
            movieArray = JSON.parse(fs.readFileSync('./storage.json'));

        }catch (error) {

            movieArray = [];
            console.log(movieArray)         
        }  

        try {
        
            if (process.argv[2] === 'add')
                addMovie(movieArray, {title: yargs.argv.title, actor: yargs.argv.actor})
             
            
        } catch (error) {
            console.log(error)
            
        }
     
 } catch (error) {
     console.log();
 }
}


app()
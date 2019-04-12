// Requiring path and fs modules
// @{doc} => https://medium.com/stackfame/get-list-of-all-files-in-a-directory-in-node-js-befd31677ec5

const path = require('path')
const fs = require('fs')
const Lame = require("node-lame").Lame


// Files to convert from directory name -> input
const inputDir = "wav"

// Converted files directory name -> output
const outputDir = "mp3"

// Conversion quality bitrate -> kbps 
// const kbps = 64
// const kbps = 128
const kbps = 192
// const kbps = 320


// GET LIST OF ALL FILES IN THE INPUT DIRECTORY (./wav)

// Joining paths of directories 
const inputDirectoryPath = path.join(__dirname, inputDir)
const outputDirectoryPath = path.join(__dirname, outputDir)

// Passsing inputDirectoryPath and callback function
fs.readdir(inputDirectoryPath, (err, files) => {


    // Handling error
    if (err) {

        return console.log(`Error: Unable to scan directory: ${err}`)
    }

    // Empty ./wav directory case
    if (files.length == 0) {

        return console.log(`Error: ./wav directory is empty !`)

    }

    // Check test files extensions
    if (!files.every(element => /.wav$/.test(element))){

        return console.log(`Error: the ./wav directory must contain .wav files only`)

    } else {

        // listing all files using forEach
        return files.forEach(file => {
    
            // Working with single files
    
                // console.log('this single file :', file) //__Debug
    
            // Get file name without .wav extension
    
            const fileName = file.replace('.wav','')
    
                // console.log('this file name :', fileName) //__Debug
    
            const encoder = new Lame({
                output: `${outputDirectoryPath}/${fileName.replace(' ','_')}.mp3`, // output file path
                bitrate: kbps
            }).setFile(`${inputDirectoryPath}/${fileName}.wav`) // input file path
    
    
            // EMITTER
            encoder
                .getEmitter()
                    .on("progress", ([progress]) => {
                    // On progress of encoding. Progress in percent
                    console.log(`${file} - ${progress} %`)
            })
    
            // ENCODE FILES TO MP3
            encoder
                .encode()
                    .then((obj) => {
                        // Encoding finished
                        let encodedFileName = obj.options.output.match(/[^\\|/]*[.mp3]+$/)[0]
                        console.log(`${file} - well encoded to ${encodedFileName}`)
                    })
                    .catch(error => {
                        // Something went wrong
                        console.log(`Error: ${error}`)
                    })
        
        })
    }
})
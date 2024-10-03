/// MO HARRY BANDUKDA ///
/// STUDENT ID: 101451857 ///
/// LAB TEST ONE - COMP2123 ///

// Question Three:
// Create a script that will do the following:
    // Remove Log files: remove all the files from the Logs directory, output the file names to delete, remove the Logs directory
    // Create Log files:  create a Logs directory, change the current process to the new Logs directory, create 10 log files and write some text into the file, output the files

const fs = require('fs')
const path = require('path')

function removeFiles() {
    fs.readdir(path.join(__dirname, 'Logs'), (error, files) => {
        if (error) {
            console.log(error)
            return
        }
        files.forEach(file => {
            fs.unlink(path.join(__dirname, 'Logs', file), error => {
                if (error) {
                    console.log(error)
                    return
                }
                console.log(`Deleted ${file}` )
            })
        })
    })
}   

// removeFiles()

function createFiles() {

    if (!fs.existsSync(path.join(__dirname, 'Logs'))) {
        fs.mkdirSync(path.join(__dirname, 'Logs'));     
        console.log('Logs directory created');
    } else {
        console.log('Logs directory already exists');
    }

    process.chdir(path.join(__dirname, 'Logs'))
    console.log('Current diretory changed')

    for (let i = 0; i < 10; i++) {
        fs.writeFile(`Log${i}.txt`, `This is log ${i}`, error => {
            if (error) {
                    console.log(error)
                    return
            }
            console.log(`Log${i}.txt created`)
        })
    }
    
}

 createFiles();
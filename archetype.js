const configFilesAndFolders = require('./tools/folders');
const colors =  require('colors');
require('dotenv').config();

async function createProjectBase(oringin,destination){
    let result = configFilesAndFolders.copyProject(oringin,destination);
            if (result === true) {
                console.log('File Create :)'.green);
            } else {
                console.log('Error Create File :('.red);
            }
}

async function createPorject() {
     let path = '../'
     console.log('Welcome Archetype Api Create :)' .yellow);
     console.log('creating Project :)'.grey);
     createProjectBase('./config/project_base',`${path}${process.env.FOLDERPROJECT}`)
}

createPorject()


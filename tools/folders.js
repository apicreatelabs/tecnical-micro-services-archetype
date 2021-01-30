const fs = require('fs-extra'); 

async function copyProject(origin, destination){
    try {
        await fs.copy(origin, destination);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}
module.exports = {
    copyProject
}
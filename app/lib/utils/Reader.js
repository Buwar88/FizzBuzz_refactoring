const fs = require("fs");

class Reader{
    static readJsonFile(path){
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata); //lista de explorers        
    }

}

module.exports = Reader;

//console.log(Reader.readJsonFile("./explorers.json"))

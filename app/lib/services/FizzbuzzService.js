const Reader = require("./../../../app/lib/utils/Reader");
const explorers = Reader.readJsonFile("./explorers.json");
const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");

class FizzbuzzService {
    static applyValidationInExplorer(explorer){
        const assignFizzTrick = function(explorer){
            if (explorer.score%5 === 0 && explorer.score%3 === 0){
            explorer.trick = "FIZZBUZZ";
            }else if(explorer.score%3 === 0){
                explorer.trick = "FIZZ"; 
            }else if(explorer.score%5 === 0){
                explorer.trick = "BUZZ";
            }else{
                explorer.trick = explorer.score;
            }
        }
        const explorersInNodeAndFizzTrick = explorersInNode.map(explorer => assignFizzTrick(explorer))
    };
    static applyValidationInNumber(number){
            if(number %3 === 0 && number %5 === 0){
            return "FIZZBUZZ"
            }else if(number %3 === 0){
                return "FIZZ"
            }else if (number %5 === 0){
                return "BUZZ" 
            }else{
                return number;     
            }
        };  
    
};


module.exports = FizzbuzzService;

const explorer = {name:"Explorer1", score: 1}
const result = FizzbuzzService.applyValidationInExplorer(explorer)
console.log(result)
console.log(explorersInNode)

const number = 15
const sal = FizzbuzzService.applyValidationInNumber(number)
console.log(sal)

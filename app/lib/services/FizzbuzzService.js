const Reader = require("./../../../app/lib/utils/Reader");
const explorers = Reader.readJsonFile("./explorers.json");
const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");
class FizzbuzzService {
    static applyValidationInExplorer(explorer){
        const assignFizzTrick = function(explorer){
            if(explorer.score%3 === 0){
                explorer.trick = "FIZZ";
                return explorer;
            }else{
                explorer.trick = explorer.score;
                return explorer;
            }
        };
        const explorersInNodeAndFizzTrick = explorersInNode.map((explorer) => assignFizzTrick(explorer));

        const assignBuzzTrick = function(explorer){
            if(explorer.score%5 === 0){
                explorer.trick = "BUZZ";
                return explorer;
            }else{
                explorer.trick = explorer.score;
                return explorer;
            }
        };
        
        const explorersInNodeAndBuzzTrick = explorersInNode.map((explorer) => assignBuzzTrick(explorer));

        const assignFizzBuzzTrick = function(explorer){
            if(explorer.score%5 === 0 && explorer.score%3 === 0){
                explorer.trick = "FIZZBUZZ";
                return explorer;
            }else{
                explorer.trick = explorer.score;
                return explorer;
            }
        };
        
        const explorersInNodeAndFizzBuzzTrick = explorersInNode.map((explorer) => assignFizzBuzzTrick(explorer));

        


    }
}

module.exports = FizzbuzzService;
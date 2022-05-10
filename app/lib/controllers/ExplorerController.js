const Reader = require("./../../../app/lib/utils/Reader");
const explorers = Reader.readJsonFile("./explorers.json");
const ExplorerService = require("./../../../app/lib/services/ExplorerService");
const FizzbuzzService = require("./../../../app/lib/services/FizzbuzzService");

class ExplorerController {
    static getExplorersByMission(mission){
        const explorersFilterByMission = ExplorerService.filterByMission(explorers, mission);
        return explorersFilterByMission;    
    }
    static GetExplorersUsernamesByMission(mission){
        const listExplorersByMission = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return listExplorersByMission;
    }
    static GetExplorersAmountbyMission(mission){
        const sumaExplorersByMission = ExplorerService.getAmountOfExplorersByMission(explorers, mission);    
        return sumaExplorersByMission;
    }
    static GetExplorersByStack(stack){
        const listExplorersByStack = ExplorerService.getExplorersByStack(explorers, stack);
        return listExplorersByStack;
    }
    static applyFizzbuzz(number){
        const numberFizzbuzz = FizzbuzzService.applyValidationInNumber(number);
        return numberFizzbuzz;
    }
    static explorersArrayToString(mission){
        const explorersArray = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        const arrayToString = explorersArray.toString();
        return arrayToString;
    }

}

module.exports = ExplorerController;



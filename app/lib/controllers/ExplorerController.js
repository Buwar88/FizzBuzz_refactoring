const Reader = require("./../../../app/lib/utils/Reader");
//const FizzbuzzService = require("./../../../app/lib/services/FizzbuzzService");
const explorers = Reader.readJsonFile("./explorers.json");
const ExplorerService = require("./../../../app/lib/services/ExplorerService");

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

}

module.exports = ExplorerController;
const Reader = require("../fizzbuzz/app/lib/utils/Reader")
const ExplorerService = require("../fizzbuzz/app/lib/services/ExplorerService")
const explorers = Reader.readJsonFile("./explorers.json")
//console.log(explorers)

//console.log(explorers.filter((explorer) => explorer.mission === "node"))
const explorersByMission = explorers.filter((explorer) => explorer.mission === "node")
console.log(explorersByMission.length)

class pato {
    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode
    }
}
const dedo = pato.getExplorersUsernamesByMission(explorers, "node")


//console.log(ExplorerService.filterByMission(explorers, "node"))
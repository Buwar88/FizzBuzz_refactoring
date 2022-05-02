const Reader = require("./../../../app/lib/utils/Reader");
const ExplorerService = require("./../../../app/lib/services/ExplorerService.js");
const explorers = Reader.readJsonFile("./explorers.json");

describe("Test de ExplorerService", () => {
    test(" Calcular todos los explorers", () =>{
        const explorers = [{mission:"node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    }); 
});
describe("Test de ExplorerService", () => {
    test(" Calcular total de explorers en mission node", () =>{
        const totalExplorersByMission = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(totalExplorersByMission).toBe(10);
    }); 
});
describe("Test de ExplorerService", () => {
    test("Nombre de explorers por misión", () =>{
        const nameExplorersByMission = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(nameExplorersByMission).toContain("ajolonauta1");
    }); 
});
describe("Test de ExplorerService", () => {
    test("Nombre de explorers por Stack", () =>{
        const nameExplorersByStack = ExplorerService.getExplorersByStack(explorers, "elm");
        expect(nameExplorersByStack).toContain("ajolonauta6");
    }); 
});
const Reader = require("./../../../app/lib/utils/Reader");
const explorers = Reader.readJsonFile("./explorers.json");
const ExplorerController = require("../../../../fizzbuzz/app/lib/controllers/ExplorerController");

describe("Test de ExplorerService", () => {
    test(" Calcular todos los explorers", () =>{
        const name = "Woopa10";
        const explorersInNode = ExplorerController.getExplorersByMission("java");     
        expect(explorersInNode.length).toBe(5);
    }); 
});
describe("Test de ExplorerService", () => {
    test(" Calcular total de explorers en mission node", () =>{
        const totalExplorersByMission = ExplorerController.GetExplorersAmountbyMission("node");
        expect(totalExplorersByMission).toBe(10);
    }); 
});
describe("Test de ExplorerService", () => {
    test("Nombre de explorers por misión", () =>{
        const nameExplorersByMission = ExplorerController.GetExplorersUsernamesByMission("node");
        expect(nameExplorersByMission).toContain("ajolonauta2");
    }); 
});

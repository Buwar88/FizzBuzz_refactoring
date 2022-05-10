
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
describe("Test de ExplorerService", () => {
    test("Array de explorers por misión a cadena", () =>{
        const explorersNode = ExplorerController.explorersArrayToString("java");     
        expect(explorersNode).toContain("ajolonauta8");
    }); 
});

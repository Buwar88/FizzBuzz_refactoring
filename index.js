const Reader = require("./../fizzbuzz/app/lib/utils/Reader");
const explorers = Reader.readJsonFile("./explorers.json");
const ExplorerController = require("./../fizzbuzz/app/lib/controllers/ExplorerController.js");

const explorersInNode = ExplorerController.getExplorersByMission("java");
console.log(explorersInNode);
const ExplorerController = require("./../../app/lib/controllers/ExplorerController");
const express = require("express");
const { request } = require("express");
const { response } = require("express");
const FizzbuzzService = require("./../../app/lib/services/FizzbuzzService");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});
app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});
app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const quantityInMission = ExplorerController.GetExplorersAmountbyMission(mission);
    response.json({mission:request.params.mission, quantity:quantityInMission});
});
app.get("/v1/explorers/username/:mission", (request, response) => {
    const mission = request.params.mission;
    const listInMission = ExplorerController.GetExplorersUsernamesByMission(mission);
    response.json({mission:request.params.mission, explorers:listInMission});
});
app.get("/v1/fizzbuzz/:score", (request, response) => {
    const number = request.params.score;
    const trickScore = FizzbuzzService.applyValidationInNumber(number);
    response.json({score: request.params.score, trick:trickScore});
});
app.get("/v1/explorers/stack/:stack", (request, response) => {
    const stack = request.params.stack;
    const explorerStack = ExplorerController.GetExplorersByStack(stack);
    response.json({explorers: explorerStack});
});

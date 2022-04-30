const ExplorerController = require("./../../app/lib/controllers/ExplorerController");
const express = require("express");
const { request } = require("express");
const { response } = require("express");
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
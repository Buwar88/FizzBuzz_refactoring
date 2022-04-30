const Reader = require("./../../../app/lib/utils/Reader");
const FizzbuzzService = require("./../../../app/lib/services/FizzbuzzService");
const explorers = Reader.readJsonFile("./explorers.json");

describe("Test de FizzbuzzService 1", () => {
    test("Explorer1", () =>{
        const explorer1 = {name: "Explorer1", score: 1};
        FizzbuzzService.applyValidationInExplorer(explorer1);
        expect({name: "Explorer1", score: 1, trick: 1});
    });
});

describe("Test de FizzbuzzService 3", () => {
    test("Explorer3", () =>{
        const explorer3 = {name: "Explorer3", score: 3};
        FizzbuzzService.applyValidationInExplorer(explorer3); 
        expect({name: "Explorer3", score: 3, trick: "FIZZ"});
    });
});
describe("Test de FizzbuzzService 5", () => {
    test("Explorer5", () =>{
        const explorer5 = {name: "Explorer5", score: 5};
        FizzbuzzService.applyValidationInExplorer(explorer5);
        expect({name: "Explorer5", score: 5, trick: "BUZZ"});
    });
});
describe("Test de FizzbuzzService 15", () => {
    test("Explorer15", () =>{
        const explorer15 = {name: "Explorer15", score: 15};
        FizzbuzzService.applyValidationInExplorer(explorer15); 
        expect({name: "Explorer15", score: 15, trick: "FIZZBUZZ"});
    });
});
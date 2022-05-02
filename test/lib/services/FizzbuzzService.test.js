const Reader = require("./../../../app/lib/utils/Reader");
const FizzbuzzService = require("./../../../app/lib/services/FizzbuzzService");
const explorers = Reader.readJsonFile("./explorers.json");

describe("Test de FizzbuzzService 1", () => {
    test("Explorer1", () =>{
        const explorer1 = {name: "Woopa1", score: 1};
        const result1 = FizzbuzzService.assignTrick(explorer1);
        expect(result1.trick).toBe(1);
    });
});

describe("Test de FizzbuzzService 3", () => {
    test("Explorer3", () =>{
        const explorer3 = {name: "Explorer3", score: 3};
        const result3 = FizzbuzzService.applyValidationInExplorer(explorer3); 
        expect(result3.score).toBe("FIZZ");
    });
});
describe("Test de FizzbuzzService 5", () => {
    test("Explorer5", () =>{
        const explorer5 = {name: "Woopa5", score: 5};
        const result5 = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(result5.trick).toBe("BUZZ");
    });
});
describe("Test de FizzbuzzService 15", () => {
    test("Explorer15", () =>{
        const explorer15 = {name: "Woopa15", score: 15};
        const result15 = FizzbuzzService.applyValidationInExplorer(explorer15); 
        expect(result15.trick).toBe("FIZZBUZZ");
    });
});

describe("Test de FizzbuzzService number 1", () => {
    test("Number 1", () =>{
        const number1 = 1;
        const result1 = FizzbuzzService.applyValidationInNumber(number1); 
        expect(result1).toBe(1);
    });
});
describe("Test de FizzbuzzService number 3", () => {
    test("Number 3", () =>{
        const number3 = 3;
        const result3 = FizzbuzzService.applyValidationInNumber(number3); 
        expect(result3).toBe("FIZZ");
    });
});
describe("Test de FizzbuzzService number 5", () => {
    test("Number 5", () =>{
        const number5 = 5;
        const result5 = FizzbuzzService.applyValidationInNumber(number5); 
        expect(result5).toBe("BUZZ");
    });
});
describe("Test de FizzbuzzService number 15", () => {
    test("Number 15", () =>{
        const number15 = 15;
        const result15 = FizzbuzzService.applyValidationInNumber(number15); 
        expect(result15).toBe("FIZZBUZZ");
    });
});
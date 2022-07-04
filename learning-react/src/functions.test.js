import timesTwo from "./functions";

test("Multiplies by two", () => {
    expect(timesTwo(4)).toBe(8);
});

// see https://jestjs.io/pt-BR/
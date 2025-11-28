const { questions } = require("../src/script");

test("Legalább 1 kérdés van", () => {
    expect(questions.length).toBeGreaterThan(0);
});

test("Minden kérdésnek van 'question' mezője", () => {
    questions.forEach(q => {
        expect(q.question).toBeDefined();
    });
});

test("Minden kérdésnek 4 válasza van", () => {
    questions.forEach(q => {
        expect(q.answers.length).toBe(4);
    });
});
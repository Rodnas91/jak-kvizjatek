const { questions } = require("../src/script.js");

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

describe("Kvízkérdések adatstruktúrája", () => {

    test("A questions tömb nem üres", () => {
        expect(questions.length).toBeGreaterThan(0);
    });

    test("Minden kérdés szövege string", () => {
        questions.forEach(q => {
            expect(typeof q.question).toBe("string");
        });
    });

    test("Minden kérdésnek van 4 válasza", () => {
        questions.forEach(q => {
            expect(q.answers.length).toBe(4);
        });
    });

    test("Minden válasz objektum megfelelő szerkezetű", () => {
        questions.forEach(q => {
            q.answers.forEach(a => {
                expect(typeof a.text).toBe("string");
                expect(typeof a.correct).toBe("boolean");
            });
        });
    });

});

test("Hibás kérdésobjektum esetén hibát kell dobni", () => {
    const invalidQuestion = { question: 123, answers: "nincs ilyen" };

    const validate = (q) => {
        if (typeof q.question !== "string") {
            throw new Error("A kérdésnek szövegnek kell lennie");
        }
    };

    expect(() => validate(invalidQuestion)).toThrow();
});
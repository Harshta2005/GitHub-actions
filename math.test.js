const add=require('./math');

test("adds number", () => {
    expect(add(2, 3)).toBe(5);
});
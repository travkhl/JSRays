const ray = require("../src/ray")

test('ray test', () => {
    expect(cast([0,0,0], [1,0,0])).toBe(false);
});
const { add } = require('../app');

describe('add function', () => {
    test('testing two numbers', () => {
        expect(add(2, 4)).toBe(6);
    });
})
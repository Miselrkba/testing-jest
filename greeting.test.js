
const greeting = guest => `Hello, ${guest}!`;

 describe('greeting()', () => {
 it('says hello', () => {
 expect(greeting('Jest')).toBe('Hello, Jest!');
});
});


describe('greeting()', () => {
    it('says hello', () => {
        expect(greeting('Michael')).toBe('Hello, Michael!')
    })
})

import capitalize from '../src/capitalize'

test('throwing an error when the parameter is not a string', () => {
    const noStringCase = () => {
        capitalize(4);
    }
    expect(noStringCase).toThrow('A string is expected');
});

test('Capitalizing the first letter', () => {
    const capitalizingFirstLetter = capitalize('testing with jest');
    expect(capitalizingFirstLetter).toBe('Testing with jest');
});
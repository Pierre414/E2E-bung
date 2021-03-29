
const { tSImportEqualsDeclaration } = require('@babel/types');
const { test, expect } = require('@jest/globals');
const { not } = require('expect');
const functions =require('./function')


// Strings
test('hello equal hello',() =>{
    expect('hello').toMatch('hello')
});
// Strings
test('there is no a in hello',() =>{
    expect('hello').not.toMatch(/a/)
});
// calculate
test('two plus five',()=>{
    const value=2+5;
    expect(value).toBeGreaterThan(6);
    expect(value).toBeLessThan(8);
    expect(value).toBe(7);
    expect(value).not.toBeGreaterThan(7);

})
// Array
test('Armin should be in usernames',()=>{
    let usernames = ['Eren','Mikasa','Armin']
    expect(usernames).toContain('Armin');
})

test('Armin should not be in usernames',()=>{
    let usernames = ['Eren','Mikasa','Armi']
    expect(usernames).not.toContain('Armin');
})

test('5 should not be in numbers',()=>{
    let numbers= [1,2,3,4,6,7];
    expect(numbers).not.toContain(5);
})

test('5 bigger than 6',()=>{
    expect(5).toBeGreaterThan(4);
})

/*test('Money example',()=>{
    expect(functions.times(2)).toBe(10)
})*/


console.log("Schönes wochenende");



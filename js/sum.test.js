const sum = require('./sum');

// 1+2 ==3
test('properly adds 2 numbers', () => {
    //  if(sum(1,2) == 3){

    //  }
    expect(sum(1, 2)).toBe(3);
})
test('properly adds 2 numbers', () => {
    expect(sum(1, 0)).toBe(1);

})
test('properly adds 2 numbers', () => {
    expect(sum(0, 1)).toBe(1);
})
test('properly adds 2 numbers', () => {
    expect(sum(1, -1)).toBe(0);
})


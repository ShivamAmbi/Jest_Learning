const cloneArray = require('./cloneArray');

test('properly clones array',()=>{
    const arr = [1,2,3,9,8,7];
    expect(cloneArray(arr)).toEqual(arr);
    expect(cloneArray(arr)).not.toBe(arr);
})

test('properly clones array',()=>{
    const arr = [['a','b','c']];
    expect(cloneArray(arr)).toEqual(arr);
})
test('properly clones array',()=>{
    const arr = [[1,2],[3,4],[9,8],[7,6]];
    expect(cloneArray(arr)).toEqual(arr);
})
const sum = require('./sum');

// it("should add 1+ 2 = 3",()=>{
//     const result = sum(1,2);
//     expect(result).toBe(3);      
// })

// it("should add 0 + 2 = 2",()=>{
//     const result = sum(0,2);
//     expect(result).toBe(2);      
// })

describe("example test",()=>{
    it("should add 1+ 2 = 3",()=>{
        const result = sum(1,2);
        expect(result).toBe(3);      
    })
    
    it("should obj={} to be {}",()=>{
        const obj = {};
        expect(obj).toEqual({});
    })
})

describe("string",()=>{
    it("there is no I in team",()=>{
        expect("team").not.toMatch(/I/);
    })
})

describe("Array ",()=>{
    const shoppingList = [
        'abc','bcd','cde','def'
    ]
    expect(shoppingList).toContain('bcd');
})

function checkError(){
    throw new Error ("Wow, Error occured !");
}
describe("errors ",()=>{
    it("check error:",()=>{
        expect(()=>checkError()).toThrow("Wow, Error occured !");
    })
})
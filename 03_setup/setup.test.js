
let animals = [];

beforeAll(()=>{
    console.log('beforeAll--->');
    animals = ['elephant','tiger','lion','zebra'];
})

beforeEach(()=>{
    console.log('before--->');
    animals = ['elephant','tiger','lion','zebra'];
})

afterEach(()=>{
    console.log('after--->');
    animals = ['elephant','tiger','lion','zebra'];
}) 

afterAll(()=>{
    console.log('afterAll--->');
    animals = ['elephant','tiger','lion','zebra'];
})

describe('animals array', () => { 
    it('should add animal to end',()=>{
        animals.push("aligator");
        expect(animals[animals.length-1]).toBe("aligator");
    })
    it('should add animal to the start',()=>{
        animals.unshift("monkey");
        expect(animals[0]).toBe("monkey");
    })
    it('initial length should be = 4',()=>{
        expect(animals.length).toBe(4);
    })
})

describe('truth/falsy ',()=>{
    it('true should be truthy',()=>{
        expect(true).toBeTruthy();
    })
})
const subtract = require('./subtract');

    // 1+2 ==3
    test('properly subtracts 2 numbers',()=>{
        //  if(subtract(1,2) == 3){
    
        //  }
        expect(subtract(1,2)).toBe(-1);
    })
    test('properly subtracts 2 numbers',()=>{
        expect(subtract(1,0)).toBe(1);
        
    })
    test('properly subtracts 2 numbers',()=>{
        expect(subtract(0,1)).toBe(-1);    
    })
    test('properly subtracts 2 numbers',()=>{
        expect(subtract(1,-1)).toBe(2);
    })
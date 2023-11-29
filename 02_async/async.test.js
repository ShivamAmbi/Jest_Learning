const { default: expect } = require("expect");
const fetchData = require("./async");

// it("should return api data:",()=>{
//     fetchData(1).then((result)=>{
//         expect(result.data.id).toBe(1);
//     });
    
// })

it("should return api data:",async()=>{
    const result = await fetchData(1).then();
    expect(result.data.id).toBe(1);
})
const axios = require("axios");

const fetchData = async (id) => {
    const result = await axios.get(`http://jsonplaceholder.typicode.com/todos/${id}`);
    console.log('--->',result);
    return result.data;
}

const forEach = (items,callback)=>{
    for(let i=0;i<items.length;i++){
        callback(items[i]);
    }
}

it('mock callback',()=>{
    const mockCallback = jest.fn(x => 42 + x);
    forEach([0,1,2,3],mockCallback);
    console.log('-->',mockCallback.mock.calls,'\n --->',mockCallback.mock.results);
    
    expect(mockCallback.mock.calls.length).toBe(4);
    
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    
    expect(mockCallback.mock.calls[1][0]).toBe(1);
    
    expect(mockCallback.mock.results[0].value).toBe(42);
    
    expect(mockCallback.mock.results[1].value).toBe(43);

})

it('mock return',()=>{
    const mock = jest.fn();

    mock.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const results1 = mock();
    const results2 = mock();
    console.log('-->',mock.mockReturnValueOnce(true),'\n --->',results1,results2);

    expect(results1).toBe(true);
    expect(results2).toBe(false);
})

it('mock axios',async()=>{
    jest.spyOn(axios,"get").mockReturnValueOnce({
        data: {
            id:1,
            todo:'get response from api'
        }
    })
    const result = await fetchData(1);
    expect(result.todo).toBe('get response from api');
})
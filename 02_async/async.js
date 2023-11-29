const axios = require("axios");

const fetchData = async (id) => {
    const result = await axios.get(`http://jsonplaceholder.typicode.com/todos/${id}`);
    console.log('--->',result);
    return result;
}

fetchData(1);
module.exports = fetchData;
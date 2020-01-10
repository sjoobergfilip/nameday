
const getNameDay = async name =>{
    const response = await fetch(`https://api.abalin.net/getdate?name=${name}&country=se`);

    const data = await response.json();
    console.log(data);
    return data;
};

const getTodaysNameDay = async () =>{
    const response = await fetch('https://api.abalin.net/today?country=se');
    
    const todayNamday = await response.json();
    console.log(todayNamday);
    return todayNamday;

};
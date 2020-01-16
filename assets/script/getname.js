
const getNameDay = async (name, country) =>{
    const response = await fetch(`https://api.abalin.net/getdate?name=${name}&country=${country}`);

    const data = await response.json();
    console.log(data);
    return data;
};

const getTodaysNameDay = async () =>{
    const response = await fetch('https://api.abalin.net/today?country=se');
    
    const nameday = await response.json();
    console.log(nameday);
    return nameday;

};
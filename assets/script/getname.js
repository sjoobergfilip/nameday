
const getNameDay = async (name, country) =>{
    const response = await fetch(`https://api.abalin.net/getdate?name=${name}&country=${country}`);

    const data = await response.json();
    return data;
};

const getTodaysNameDay = async (country) =>{
    const response = await fetch(`https://api.abalin.net/today?country=${country}`);
    
    const nameday = await response.json();
    return nameday;

};

const getDateNamesDay = async (contry, month, day) => {
    const response = await fetch(`https://api.abalin.net/namedays?country=${contry}&month=${month}&day=${day}`);

    const data = await response.json();
    return data;

}
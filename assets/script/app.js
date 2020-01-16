

const renderTodaysNameday = nameday => {
    const todayNameDay = document.querySelector('#today-nameday')
    //get todays date
    const today = moment().format("DD/MM");
    //Make a template for nameday of today
    todayNameDay.innerHTML = `<p>Idag ${today} har ${nameday.namedays} namsdag</p>`;

};

window.addEventListener('load', (e) => {
    getTodaysNameDay();
    renderTodaysNameday(e);
});

//search by name 
document.querySelector('#search-form').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.querySelector('#name').value;

    if (name < 2){
        return;
    }
    
    getNameDay(name).this(data => {
        
    });
});

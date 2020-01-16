
//HTML teamplate for todys nameday
const renderTodaysNameday = data => {
    const todayNameDay = document.querySelector('#today-nameday')
    //get todays date
    const today = moment().format("DD/MM");
    //Make a template for nameday of today
    todayNameDay.innerHTML = `<p>Idag ${today} har ${data.namedays} namsdag</p>`;

};
//Get todyas nameday when page load
window.addEventListener('load', (e) => {
    getTodaysNameDay().then(data => {
        renderTodaysNameday(data);
    });
});


//search by name 
document.querySelector('#search-form').addEventListener('submit', e => {
    e.preventDefault();
    const nameEl = document.querySelector('#name').value;
    const countEl = document.querySelector('#country').value
    const nameDaysEl = document.querySelector('#namedays');
     if (nameEl < 2){
        return;
    }

    getNameDay(nameEl, countEl)
    .then(data =>{
        let output = ''
        data.results.forEach((data) => {
            output = ` <p>Du har sökt på <span>${data.name}</span> </p>
            <p><span>${data.name}</span> har namsdag den <span>${data.day}/${data.month}</span></p>`
        });
        nameDaysEl.innerHTML = output;

    });
});

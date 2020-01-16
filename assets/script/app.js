
//if name not found
const renderNotFound = (msg => {
    document.querySelector('#namedays').innerHTML = `<p>${msg}</p>
    `;
});



//Get todyas nameday when page load
window.addEventListener('load', (e) => {

    const contryEl = document.querySelector('#country-form').value;

    getTodaysNameDay(contryEl).then(data =>{
        const todayNameDay = document.querySelector('#today-nameday')
        //get todays date
        const today = moment().format("DD MMM");
        //Make a template for nameday of today
        data.data.forEach(info => {
            const string = 'se';
            todayNameDay.innerHTML = `<p>${today} har <span> ${info.namedays[string]}</span> namsdag!</p>`;
        });
    });
});
//Change contry and check today nameday
document.querySelector('#search-form-today').addEventListener('submit', e => {
        e.preventDefault();
    const contryEl = document.querySelector('#country-form').value;
    getTodaysNameDay(contryEl).then(data =>{
        const todayNameDay = document.querySelector('#today-nameday')
        //get todays date
        const today = moment().format("DD MMM");
        //Make a template for nameday of today
        data.data.forEach(info => {
            const string = contryEl;
            todayNameDay.innerHTML = `<p>${today} har <span> ${info.namedays[string]}</span> namsdag!</p>`;
        });
    });
});


//search by name 
document.querySelector('#search-form').addEventListener('submit', e => {
    e.preventDefault();
    const nameEl = document.querySelector('#name').value;
    const countEl = document.querySelector('#country').value
    const nameDaysEl = document.querySelector('#namedays');

    getNameDay(nameEl, countEl)
    .then(data =>{

        //Else if (Name not found)
        if(200 && data.results.length > 0){
                const nameEl = document.querySelector('#name').value;
        
                let output = ''
                data.results.forEach((data) => {
                    output = ` <p class="search-name">Du har sökt på <span>${nameEl}</span></p>
                    <p><span>${data.name}</span> har namsdag den</p>
                    <p><span>${data.day}/${data.month}</span></p>
                    `;
                });
                nameDaysEl.innerHTML = output;
        } else {
            renderNotFound('Sorry, namnet du sökte fanns inte');
        }
    });
        
});


//serach date
document.querySelector('#search-form-date').addEventListener('submit', e =>{
    e.preventDefault();
    const countryEl = document.querySelector('#country-date').value;
    const monthEl = document.querySelector('#month-date').value;
    const dayEl = document.querySelector('#date').value;
    const namedays = document.querySelector('#namedays');
    


    getDateNamesDay(countryEl, monthEl, dayEl)
    .then(data =>{
        let output = ''
        data.data.forEach(item =>{
            const contryCode = countryEl;
            output =  ` 
            <p><span>${item.namedays[contryCode]}</span> har namsdag</p>
            `;
        });
        namedays.innerHTML = output;
    });
});
 
let form =  document.querySelector('form')
let selectBox = document.querySelector('.select');
let input = document.querySelector('.input');
let div = document.querySelector('.div');


let people = [
    {
        firstName:'Ronaldo',
        money:200,
            
    },
    {
        firstName: 'Mbappe',
        money: 120,

    },
    {
        firstName: 'Holand',
        money: 100,

    },
    {
        firstName: 'Neymar',
        money: 80,

    },
     {
        firstName: 'Bale',
        money: 30,

    }
];




function renderData(data) {
   div.innerHTML = null;
   if (data.length > 0) {
    
    data.forEach((element) => {
        const cols = document.createElement('div');
        cols.classList.add('box')
        const peopleNewDiv = document.createElement('div');
        peopleNewDiv.classList.add('card')
        const namesNew = document.createElement('h3');
        const moneyNew = document.createElement('strong');
        namesNew.textContent = `${element.firstName}`;
        moneyNew.textContent = `summa: ${element.money}$`;
        cols.appendChild(peopleNewDiv);
        peopleNewDiv.append(namesNew, moneyNew);
        div.appendChild(cols)

    });
}
}

if (!input.value) {
    people.sort((a, b)=> b.money - a.money);
    renderData(people)
}else {
    renderData(filteredPeople)
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
   
    const inputValue = +input.value;
    const filteredPeople = people.filter((people) => people.money > inputValue);
   

    const selectValue = selectBox.value;

    if(selectValue === 'desc') {
        filteredPeople.sort((a, b)=> b.money - a.money); 
    }else if(selectValue === 'asc') {
        filteredPeople.sort((a, b)=>a.money - b.money)
    }   
        renderData(filteredPeople)
});
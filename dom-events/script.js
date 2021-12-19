const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');


let data = [];

// Fetch random user and add money 

async function getRandomUser() {

    // We dont have to chain on these dot thens
    // fetch('https://randomuser.me/api').then(res => res.json()).then(data => console.log(data));

    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    };

    addData(newUser);
}

// Double everyones money with use Map()
function doubleMoney() {

    data = data.map(user => {
        return { ...user, money: user.money * 2 };
    });

    console.log(data);

    updateDom();
}


// Sort users by richest with use sort() method
function sortByRichest() {

    data.sort((a, b) => b.money - a.money);

    updateDom();
}

// Filter only millionaries with use filter()
function showMillionaires() {

    data = data.filter((user) => user.money > 1000000);

    updateDom();

}

// Calculate the total wealth with use reduce()

function calculateWealth() {
    const wealth = data.reduce((acc, user) => (acc + user.money), 0);

    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`
    main.appendChild(wealthEl);

}



// Add new object to data arr
function addData(obj) {
    data.push(obj);

    updateDom();
}


// Update DOM with use high order element forEach()

function updateDom(providedData = data) {
    // Clear main div

    main.innerHTML = `<h2><strong>Person</strong>Wealth</h2>`;

    providedData.forEach(data => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${data.name}</strong> ${formatMoney(data.money)}`;
        main.appendChild(element);
    });

}


// Format number as money
function formatMoney(number) {

    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


// Event listeners

addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth)







const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');


const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');


// Fetch exchange rates and update the DOM
function calculate() { 
    
    const curr_one = currencyEl_one.value;
    const curr_two = currencyEl_two.value;


    fetch(`https://api.exchangerate.host/latest?base=${curr_one}`).then(res => res.json()).then(data => {
        const rate = data.rates[curr_two];
        
        rateEl.innerText = `1 ${curr_one} = ${rate} ${curr_two}`;

         amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}








// Event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);


swap.addEventListener('click', function(e){
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;

    calculate();
})

calculate();
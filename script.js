const currencyone=document.getElementById("currency-one");
const currencytwo=document.getElementById("currency-two");
const amtone=document.getElementById("amount-one");
const amttwo=document.getElementById("amount-two");

const rate=document.getElementById("rate")
const swap=document.getElementById("swap");

function calculate(){
    const currency_one=currencyone.value;
    const currency_two=currencytwo.value;
fetch(` https://v6.exchangerate-api.com/v6/4ce18be008efeee3e5092d04/latest/${currency_one}`)
.then(respone=>respone.json())
.then(data=>{
    const ratee=data.conversion_rates[currency_two];
    rate.innerText=`1  ${currency_one} =${ratee} ${currency_two}`
    amttwo.value=(amtone.value * ratee).toFixed(2);}
)}


document.addEventListener('change',calculate);
document.addEventListener('change',calculate);
document.addEventListener('input',calculate);
document.addEventListener('input',calculate);
swap.addEventListener('click',()=>{
const temp=currencyone.value;
currencyone.value=currencytwo.value;
currencytwo.value=temp;
calculate()});


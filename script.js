const billInput = document.querySelector('.bill-input');
const tipAmount = document.querySelectorAll('.tip-amount');
const customTip = document.querySelector('.custom-tip');
const pplNumInput = document.querySelector('.ppl-num');
const tip = document.querySelector('.tip');
const total = document.querySelector('.total');
const resetBtn = document.querySelector('.reset-btn');

const errMsg = document.querySelector('.error-msg');

let bill;
let selectedTip;
let pplNum;

// Bill Split function 
function split() {
    if (pplNumCheck()) {
        const tipResult = (bill * selectedTip) / pplNum;
        const totalPersonResult = bill / pplNum + tipResult;

        tip.innerText = `$${tipResult.toFixed(2)}`;
        total.innerText = `$${totalPersonResult.toFixed(2)}`;
    }
}

function pplNumCheck() {
    if (pplNum === 0) {
        errMsg.style.display = 'block';
        pplNumInput.classList.add('error');
        return false;
    } return true;
}

function clearActive() {
    tipAmount.forEach(item => {
        item.classList.remove('active');
    });
}

// Get bill input value 
billInput.addEventListener('change', () => {
    bill = parseFloat(billInput.value);
});

// Get people input value 
pplNumInput.addEventListener('change', () => {
    pplNum = parseFloat(pplNumInput.value);
    errMsg.style.display = 'none';
    pplNumInput.classList.remove('error');

});

// Get tip input value 
tipAmount.forEach(item => {
    item.addEventListener('click', () => {
        clearActive();
        customTip.value = '';
        item.classList.add('active');
        selectedTip = parseFloat(item.dataset.tip);
        split();

    });
});

// Custom tip value 

customTip.addEventListener('change', () => {
    clearActive();
    selectedTip = parseFloat(customTip.value / 100);
})

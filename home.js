'use strict';

let money = "", time;

function start(){
    while (isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpensive(){
    for (let i = 0; i < 2; i++){
        let a  = prompt("Введите обязательную статью расходов в этом месяце", "");
        if (typeof(a) !== 'string' || typeof(a) == null || a == '' || a.length >= 50) {
            continue;
        }else{
            let b = prompt("Во сколько обойдется?", "");
            if (typeof(b) == null || b == ''){
                continue;
            }else {
                appData.expenses[a] = b;
            }
        }
    }
}
chooseExpensive();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
    alert("Ваш бюджет за один день: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if(appData.moneyPerDay <= 100) {
        console.log("Small payment");
    }else if(appData.moneyPerDay > 100 && appData.moneyPerDay <= 1000) {
        console.log("Avarage payment");
    }else if(appData.moneyPerDay > 1000) {
        console.log("Good payment");
    }else{
        console.log("Something wrong");
    }
}
detectLevel();

function checkSavings() {
    if(appData.savings){
        let save = +prompt("Какова сума накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = (save/100/12*percent).toFixed(1);
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    let a = [];
    for (let i=0; i<3; i++) {
        a[i] = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i+1]=a[i];
    }
}
chooseOptExpenses();

console.log(appData);

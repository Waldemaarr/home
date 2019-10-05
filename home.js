'use strict';

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

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

appData.moneyPerDay = appData.budget / 30;
if(appData.moneyPerDay <= 100) {
    console.log("Small payment");
}else if(appData.moneyPerDay > 100 && appData.moneyPerDay <= 1000) {
    console.log("Avarage payment");
}else if(appData.moneyPerDay > 1000) {
    console.log("Good payment");
}else{
    console.log("Something wrong");
}

console.log(appData);
alert("Ваш бюджет за один день: "
    + (appData.moneyPerDay).toFixed(1));


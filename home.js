'use strict';

let money = "", time;

function start() {
    while (isNaN(money) || money == "" || money == null) {
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
    savings: true,
    chooseExpensive: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", "");
            if (typeof (a) !== 'string' || typeof (a) == null || a == '' || a.length >= 50) {
                continue;
            } else {
                let b = prompt("Во сколько обойдется?", "");
                if (typeof (b) == null || b == '') {
                    continue;
                } else {
                    appData.expenses[a] = b;
                }
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert("Ваш бюджет за один день: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay <= 100) {
            console.log("Small payment");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 1000) {
            console.log("Avarage payment");
        } else if (appData.moneyPerDay > 1000) {
            console.log("Good payment");
        } else {
            console.log("Something wrong");
        }
    },
    checkSavings: function () {
        if (appData.savings) {
            let save = +prompt("Какова сума накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = (save / 100 / 12 * percent).toFixed(1);
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        let a = [];
        for (let i = 0; i < 3; i++) {
            a[i] = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i + 1] = a[i];
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через заптую)");
        if (items == null || typeof (items) !== 'string' || !isNaN(items)) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }
        appData.income.forEach(function (key, i) {
            alert("Способы доп. заработка: " + (i + 1) + "). " + key);
        })
    }
};

appData.chooseExpensive();
appData.detectDayBudget();
appData.detectLevel();
appData.checkSavings();
appData.chooseOptExpenses();
appData.chooseIncome();

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}

//console.log(appData);

'use strict';

let money = prompt("Ваш бюджет на месяц?");
let date = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let q1 = prompt("Введите обязательную статью расходов в этом месяце");
let a1 = prompt("Во сколько обойдется?");

appData.expenses.q1 = a1;

alert(appData.budget / 30);

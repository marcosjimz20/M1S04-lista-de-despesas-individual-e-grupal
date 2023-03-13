const month = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

const mes = new Date();

var mesAtual = month[mes.getMonth()];;
var entradas = 8000;
var saidas = 400;
var saldo = 1000;

var earningsList = [
  {
    description: 'Salário',
    value: 4000,
  },
  {
    description: 'Freela',
    value: 400,
  },
];

var expensesList = [
  {
    description: 'Alimentação',
    value: 650,
  },
  {
    description: 'PSN',
    value: 40,
  },
  {
    description: 'Energia',
    value: 500,
  },
];

// Mês
document.getElementById('month').innerHTML = mesAtual;

// Entradas
document.getElementById('total-earnings').innerHTML = entradas;

// Saídas
document.getElementById('total-expenses').innerHTML = saidas;

// Saldo
document.getElementById('final-balance').innerHTML = saldo;

function addFinancialMovement() {
  const earningRadioValueIsChecked =
    document.getElementById('earning-radio').checked;

  if (earningRadioValueIsChecked) {
    addEarning();
  } else {
    addExpense();
  }
}

function addExpense() {
  const newExpense = {
    description: descriptionInput.value,
    value: valueInput.value,
  };
  expensesList.push(newExpense);

  var li = document.createElement('li');
  li.innerText = `${newExpense.description}: R$ ${newExpense.value}`;

  document.getElementById('expenses-list').appendChild(li);
}

function addEarning() {
  const newExpense = {
    description: descriptionInput.value,
    value: valueInput.value,
  };
  expensesList.push(newExpense);

  var li = document.createElement('li');
  li.innerText = `${newExpense.description}: R$ ${newExpense.value}`;

  document.getElementById('earnings-list').appendChild(li);
}

for (var i = 0; i < earningsList.length; i++) {
  var li = document.createElement('li');
  li.innerText = `${earningsList[i].description}: R$ ${earningsList[i].value}`;

  document.getElementById('earnings-list').appendChild(li);
}

for (var i = 0; i < expensesList.length; i++) {
  var li = document.createElement('li');
  li.innerText = `${expensesList[i].description}: R$ ${expensesList[i].value}`;

  document.getElementById('expenses-list').appendChild(li);
}



/* function generateLists(array, listElementId) {
for (var i = 0; i < array.length; i++) {
  var li = document.createElement('li');
  li.innerText = '${array[i].description}: R$ ${array[i].value}';

  document.getElementById(listElementId).appendChild(li);
}

console.log('dentro do escopo da função; fora do escopo do for', li);
}

generateLists(expensesList, 'expenses-list');
generateLists(earningsList, 'earnings-list');
console.log('fora do escopo da função', li); */

/////////////////////////////////////////////////////////////////////

/* class FinancialTransaction {
  description;
  valeu;

      constructor(description, valeu) {
        this.description = description;
        this.description = description;
      }

}

var earningsList = [
  new FinancialTransaction('Salário', 4000),
  new FinancialTransaction('Freela'. 400),
];

var expensesList = [
  new FinancialTransaction('Alimentação', 650),
  new FinancialTransaction('PSN', 40),
  new FinancialTransaction('Energia', 500),
] */
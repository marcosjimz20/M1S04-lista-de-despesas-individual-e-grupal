class GroupExpenses {
title;
partiaValue;
amount;
#numberOfParticipants;

  constructor(title, numberOfParticipants, amount) {
    this.title = title;
    this.amount = amount;
    this.#numberOfParticipants = numberOfParticipants;
    this.partiaValue = (amount / numberOfParticipants).toFixed(2);
  }
}



const table = document.getElementById("group-expenses");

const groupExpenses = [];


const titleElement = document.getElementById("title-input");
const participantsElement = document.getElementById("participants-input");
const amountElement = document.getElementById("amount-input");


function updatePage() {
const expense = groupExpenses[groupExpenses.length - 1];

  table.insertAdjacentHTML(
    "beforeend",
    `
    <div class="row">
            <div>${expense.title}</div>
            <div>${expense.partiaValue}</div>
            <div>${expense.amount}</div>
          </div>
    `
  );
}


 function addGroupExpense() {
  if ((titleElement.value === "" || participantsElement.value === "" || amountElement.value === "")) {
    alert("Preencher os campos de cadastro, por favor!");
  } else { 
  
  groupExpenses.push(
    new GroupExpenses(
      titleElement.value,
      participantsElement.value,
      amountElement.value
    )
  );
  alert("Despesa adicionada com sucesso!");

  closeModal();

  updatePage();

  titleElement.value = "";
  participantsElement = "";
  amountElement = ""; 
   }
  
  }

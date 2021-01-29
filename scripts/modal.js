const Utils = {
  formatAmount(value) {
    value = value * 100

    return Math.round(value)
  },

  formatDate(date) {
    const splittedDate = date.split("-")

    return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
  },

  formatCurrency(value) {
      const signal = Number(value) < 0 ? "-" : ""
  
      value = String(value).replace(/\D/g, "")
  
      value = Number(value) / 100
  
      value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      })
  
      return signal + " " + value
    }
}

const Modal = {
  toggle() {
    document
      .querySelector(".modal-overlay")
      .classList.toggle("active")
  }
}

const Storage = {
  get() {
    return JSON.parse(localStorage.getItem("dev.finances:transactions")) || []
  },
  set(transactions) {
    localStorage.setItem("dev.finances:transactions", JSON.stringify(transactions))
  }
}

const Transaction = {
  all: Storage.get(),

  add(transaction) {
    Transaction.all.push(transaction)

    App.reload()
  },

  remove(index) {
    Transaction.all.splice(index, 1)

    App.reload()
  },

  incomes() {
    let income = 0;
    // para cada transação verificar se a trançasão é maior que zero
    Transaction.all.forEach(transaction => {
    // se for maior que zero somar a uma variavel e retornar a variavel
      if (transaction.amount > 0) {
        income += transaction.amount;
      }
    })
    return income;
  },

  expenses() {
    let expense = 0;
    // para cada transação verificar se a trançasão é maior que zero
    Transaction.all.forEach(transaction => {
    // se for maior que zero somar a uma variavel e retornar a variavel
      if (transaction.amount < 0) {
        expense += transaction.amount;
      }
    })
    return expense;
  },

  total() {
    return Transaction.incomes() + Transaction.expenses();
  }
}

const DOM = {
  transactionsContainer: document.querySelector("#data-table tbody"),

  addTrasnsaction(transaction, index) {
    const tr = document.createElement("tr")
    tr.innerHTML = DOM.innerHTMLTransaction(transaction, index)
    tr.dataset.index = index

    DOM.transactionsContainer.appendChild(tr)

  },

  innerHTMLTransaction(transaction, index) {
    const CSSclass = transaction.amount > 0 ? "income" : "expense"

    const amount = Utils.formatCurrency(transaction.amount)

    const html = `
          <td class="description description-dark-1 td-dark-1">${transaction.description}</td>
          <td class="${CSSclass} td-dark-2">${amount}</td>
          <td class="date td-dark-3">${transaction.date}</td>
          <td class="td-dark-4">
            <img id="remove-button" onclick="Transaction.remove(${index})" src="./assets/minus.svg" alt="Remover transação">
          </td>
    `

    return html
  },

  updateBalance() {
    document
      .querySelector("#incomeDisplay")
      .innerHTML = Utils.formatCurrency(Transaction.incomes())

    document
      .querySelector("#expenseDisplay")
      .innerHTML = Utils.formatCurrency(Transaction.expenses())

      document
      .querySelector("#totalDisplay")
      .innerHTML = Utils.formatCurrency(Transaction.total())
  },

  clearTransactions() {
    DOM.transactionsContainer.innerHTML = ""
  }
}

const Form = {
  description: document.querySelector("#description"),
  amount: document.querySelector("#amount"),
  date: document.querySelector("#date"),

  getValues() {
    return {
      description: Form.description.value,
      amount: Form.amount.value,
      date: Form.date.value
    }
  },

  validateFields() {
    const {description, amount, date} = Form.getValues()
    
    if(description.trim() === "" || amount.trim() === ""|| date.trim() === "") {
      throw new Error("Por favor, preencha todos os campos")
    }
  },

  formatValues() {
    let {description, amount, date} = Form.getValues()

    amount = Utils.formatAmount(amount)

    date = Utils.formatDate(date)

    return {
      description,
      amount,
      date
    }
  },

  saveTransaction(transaction) {
    Transaction.add(transaction);
  },

  clearFields() {
    Form.description.value = "";
    Form.amount.value = "";
    Form.date.value = "";
  },

  submit(event) {
    event.preventDefault();

    try {
      // verificar se todas as informações foram preenchidas
      Form.validateFields()

      // formatar os dados para salvar
      const transaction = Form.formatValues();

      // salvar
      Form.saveTransaction(transaction);

      // apagar os dados do formulario
      Form.clearFields();

      // modal feche
      Modal.close();

    } catch (error) {
      alert(error.message)
    }

  }
}

const App = {
  init() {
    Transaction.all.forEach(DOM.addTrasnsaction)
    
    DOM.updateBalance()

    Storage.set(Transaction.all)
  },
  reload() {
    DOM.clearTransactions()

    App.init()
  }
}

App.init()

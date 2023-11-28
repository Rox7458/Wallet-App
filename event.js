//buttons

const formAdd = document.getElementById("form-add")
const formSave = document.getElementById("form-save")



// inputs

const dateInput = document.getElementById("date-input")
const amountInput = document.getElementById("amount-input")
const spendingArea = document.getElementById("spending-area-input")

const addInput = document.getElementById("add-input")

// veriables

let earnings = 0
let expenditureForm = []

//earning add form



formAdd.addEventListener("submit", (e) => {
    e.preventDefault()
    earnings = earnings + Number(addInput.value)
    localStorage.setItem("earnings", earnings)
    formAdd.reset()
    calculateAndUpdate()
})

//window starter

window.addEventListener("load", () => {
    earnings = Number(localStorage.getItem("earnings")) || 0
    calculateAndUpdate()
})

// Expenditure Form

formSave.addEventListener("submit", (e) => {
    e.preventDefault()

    const newExpenditure = {
        id: new Date().getTime(),
        date: new Date(dateInput.value).toLocaleDateString(),
        area: spendingArea.value,
        amount: amountInput.value
    }

    formSave.reset()

    expenditureForm.push(newExpenditure)
    localStorage.setItem("expenditure",JSON.stringify(expenditureForm))
    writeExpenditure(newExpenditure)
    calculateAndUpdate()

})

//write the expenditure to Dom

const writeExpenditure = ({id, date, area, amount})=> {

    const tr = document.createElement("tr")

    const appendTd = (content) => {
        const td = document.createElement("td")
        td.textContent = content
        return td
    }

    const createLastTd = () => {
        const td = document.createElement("td")
        const iElement = document.createElement("i")
        iElement.id = id
        iElement.className = "fa-solid fa-trash-can text-danger"
        iElement.type = "button"
        td.appendChild(iElement)
        return td
    }

    tr.append(
        appendTd(date),
        appendTd(area),
        appendTd(amount),
        createLastTd()
    )

    expenditureBody.append(tr)
}


const expenditureBody = document.getElementById("expenditure-body")

expenditureBody.addEventListener("click", (e) => {

    if(e.target.classList.contains("fa-trash-can")) {
        e.target.parentElement.parentElement.remove()
    }

    const id = e.target.id

    expenditureForm = expenditureForm.filter((expenditure => expenditure.id != id))
    localStorage.setItem("expenditure", JSON.stringify(expenditureForm))
    

})

//table of calculate

const earningOut = document.querySelector(".earning")
const outgoingOut = document.querySelector(".outgoing")
const remainderOut = document.querySelector(".remainder")

const remainderBox = document.querySelector(".remainder-box")

const calculateAndUpdate = () => {
    earningOut.innerText = new Intl.NumberFormat().format(earnings)

    const outgoings = expenditureForm.reduce(
        (total,spending) => total + Number(spending.amount),0
    )

    outgoingOut.innerText = new Intl.NumberFormat().format(outgoings)
    remainderOut.innerText = new Intl.NumberFormat().format(earnings - outgoings)
    
    const debt = earnings - outgoings < 0;
    remainderOut.classList.toggle('test-danger', debt)
    remainderBox.classList.toggle('test-danger', debt)

}

// clear button

const btnClear = document.getElementById("btn-clear")

btnClear.addEventListener("click", () => {
    if (confirm("are you sure you want to delete")) {
        let earnings = 0
        let expenditureForm = []
        localStorage.removeItem("expenditure")
        localStorage.removeItem("earnings")
        expenditureBody.innerHTML = ""
        calculateAndUpdate()
    }
})
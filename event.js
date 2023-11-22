//buttons

const addBtn = document.getElementById("btn-add")
const btnSave = document.getElementById("btn-save")

const formAdd = document.getElementById("form-add")
const addInput = document.getElementById("add-input")

// veriables

let earnings = 0

//earning add form

formAdd.addEventListener("submit", (e) => {
    e.preventDefault()
    earnings = earnings + Number(addInput.value)
    localStorage.setItem("earnings", earnings)
    formAdd.reset()
})

//window starter

window.addEventListener("load", () => {
    earnings = Number(localStorage.getItem("earnings")) || 0
})

// Expenditure Form

btnSave.addEventListener("submit", (e) => {
    e.preventDefault()

    

})














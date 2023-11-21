//selectors

const addBtn = document.querySelector(".btn-add")
const addInput = document.querySelector(".add-input")
const addForm = document.querySelector(".add-form")

const earningOut = document.querySelector(".earning")

let gelirler = 0

addForm.addEventListener("submit", (e) => {
    e.preventDefault()
    gelirler = gelirler + Number(addInput.value)
    console.log(gelirler);
    localStorage.setItem("gelirler", gelirler)
    earningOut.innerText = gelirler
    addForm.reset()
})


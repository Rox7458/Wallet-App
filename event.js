const date = document.querySelector(".date-number").innerText
// const amount = document.querySelector(".amount-spent")
const kindSpending = document.querySelector(".kind-spending").innerText

const gider = document.querySelector(".outgoing")

const saveBtn = document.querySelector(".btn-save")

saveBtn.addEventListener("click", () => {
    gider.innerText = document.querySelector(".amount-spent").innerText
})


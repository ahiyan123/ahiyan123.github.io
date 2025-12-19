//document.getElementById("count").innerText = 0

let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0

function increment() {
count = count + 1 
countEl.textContent = count
}

let saveEl = document.getElementById("save-el")
console.log(saveEl)

function save() {
let countStr = count + " - "
countEl.textContent = 0
count = 0
saveEl.textContent += "" + countStr 
}





const clozeCard = require('./ClozeCard.js')
const basicCard = require('./BasicCard.js')

// ==================== Basic Card =========================

console.log("  ")
console.log("========  Basic Flashcards ==========")
console.log("  ")

const nirvana = new basicCard("Which band is credited for popularizing grunge music?", "Nirvana");

console.log("front: " + nirvana.front)
console.log("back: " + nirvana.back)

const facebook = new basicCard("The most popular social network is?", "Facebook");

console.log("==========================================")
console.log("front: " + facebook.front)
console.log("back: " + facebook.back)

const peas = new basicCard("What is the grossest vegetable?", "Peas");

console.log("==========================================")
console.log("front: " + peas.front)
console.log("back: " + peas.back)

const tinafey = new basicCard("Which comedian wrote 'Bossy Pants'?", "Tina Fey");

console.log("==========================================")
console.log("front: " + tinafey.front)
console.log("back: " + tinafey.back)



// ==================== cloze Card =========================
console.log("  ")
console.log("========  Cloze FlashCards ==========")
console.log("  ")


const newyork = new clozeCard("New York City is the biggest U.S. city.", "New York City");

console.log("close: " + newyork.cloze)
// console.log("==========================================")
console.log("partial: " + newyork.partial)
// console.log("==========================================")
console.log("full text: " + newyork.fullText)
console.log("==========================================")

const summer = new clozeCard("Summer is the best season.", "Summer");

console.log("close: " + summer.cloze)
// console.log("==========================================")
console.log("partial: " + summer.partial)
// console.log("==========================================")
console.log("full text: " + summer.fullText)
console.log("==========================================")


const pizza = new clozeCard("Pizza is the best food in the world.", "Pizza");


console.log("close: " + pizza.cloze)
// console.log("==========================================")
console.log("partial: " + pizza.partial)
// console.log("==========================================")
console.log("full text: " + pizza.fullText)
console.log("==========================================")
console.log("==========================================")

const emojisArray = ["✌","😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","☀","🎈","🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🐻","🐶","🐬","🐟","🍀","👀","🚗","🍎","💝","💙","👌","❤","😍","😉","😓","😳","💪","💩","🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","💋","😘","😜","😵","🙏","👋","🚽","💃","💎","🚀","🌙","🎁","⛄","🌊","⛵","🏀","🎱","💰","👶","👸","🐰","🐷","🐍","🐫","🔫","👄","🚲","🍉","💛","💚","👨‍💻", "⛷", "🍲"]

const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

const emojiSize = document.getElementById("emoji-size")
const sizeSmall = document.getElementById("size-small")
const sizeMedium = document.getElementById("size-medium")
const sizeLarge = document.getElementById("size-large")
let size = "medium"

// populate drop-down list with emojis from emojisArray
for (let i = 0; i < emojisArray.length; i++) {
    let emojiOption = emojisArray[i]
    let emojiElement = document.createElement("option")
    emojiElement.textContent = emojiOption
    emojiElement.value = emojiOption
    emojiInput.appendChild(emojiElement)
}

// show emojis onscreen
function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement("span")
        emoji.textContent = myEmojis[i]
        if (size === "small") {
            emoji.style.fontSize = "1rem"
        }
        if (size === "medium") {
            emoji.style.fontSize = "2rem"
        }
        if (size === "large") {
            emoji.style.fontSize = "3rem"
        }

        // emoji.style.fontSize = "1rem"
        emojiContainer.append(emoji)
    }
}

sizeSmall.addEventListener("click", () => {
    console.log("small")
    size = "small"
})

sizeMedium.addEventListener("click", () => {
    console.log("medium")
    size = "medium"
})

sizeLarge.addEventListener("click", () => {
    console.log("large")
    size = "large"
})

// add emoji to start of list
pushBtn.addEventListener("click", () => {
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

// add emoji to end of list
unshiftBtn.addEventListener("click", () => {
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

// remove emoju from start of list
popBtn.addEventListener("click", () => {
    myEmojis.pop()
    renderEmojis()
})

// remove emoji from end of list
shiftBtn.addEventListener("click", () => {
    myEmojis.shift()
    renderEmojis()
})

renderEmojis()
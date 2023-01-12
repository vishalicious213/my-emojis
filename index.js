const emojisArray = ["✌","😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","☀","🎈","🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🐻","🐶","🐬","🐟","🍀","👀","🚗","🍎","💝","💙","👌","❤","😍","😉","😓","😳","💪","💩","🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","💋","😘","😜","😵","🙏","👋","🚽","💃","💎","🚀","🌙","🎁","⛄","🌊","⛵","🏀","🎱","💰","👶","👸","🐰","🐷","🐍","🐫","🔫","👄","🚲","🍉","💛","💚","👨‍💻", "⛷", "🍲"]

const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")

const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

const sizeSmall = document.getElementById("size-small-div")
const sizeMedium = document.getElementById("size-medium-div")
const sizeLarge = document.getElementById("size-large-div")
let size = "medium"

const myEmojis = [
    {emojiName: "👨‍💻", emojiSize: size}, 
    {emojiName: "⛷", emojiSize: size}, 
    {emojiName: "🍲", emojiSize: size}
]

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
        emoji.textContent = myEmojis[i].emojiName

        if (myEmojis[i].emojiSize === "small") {
            emoji.style.fontSize = "2rem"
        }
        if (myEmojis[i].emojiSize === "medium") {
            emoji.style.fontSize = "4rem"
        }
        if (myEmojis[i].emojiSize === "large") {
            emoji.style.fontSize = "5rem"
        }

        emojiContainer.append(emoji)
    }
}

// highlight the selected size button with a green background
function highlightSize(sentSize) {
    if (sentSize === "small") {
        sizeSmall.style.backgroundColor = "green"
        sizeMedium.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        sizeLarge.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
    }

    if (sentSize === "medium") {
        sizeSmall.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        sizeMedium.style.backgroundColor = "green"
        sizeLarge.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
    }

    if (sentSize === "large") {
        sizeSmall.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        sizeMedium.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        sizeLarge.style.backgroundColor = "green"
    }
}

// create an object for each saved emoji
function emojiAndSize(sentEmoji, sentSize) {
    let sizedEmoji = {
        "emojiName": sentEmoji,
        "emojiSize": sentSize
    }
    return sizedEmoji
}

sizeSmall.addEventListener("click", () => {
    size = "small"
    highlightSize(size)
})

sizeMedium.addEventListener("click", () => {
    size = "medium"
    highlightSize(size)
})

sizeLarge.addEventListener("click", () => {
    size = "large"
    highlightSize(size)
})

// add emoji to end of list
pushBtn.addEventListener("click", () => {
    if (emojiInput.value) {
        let pushThis = emojiAndSize(emojiInput.value, size)
        myEmojis.push(pushThis)
        emojiInput.value = ""
        renderEmojis()
    }
})

// add emoji to start of list
unshiftBtn.addEventListener("click", () => {
    if (emojiInput.value) {
        let pushThis = emojiAndSize(emojiInput.value, size)
        myEmojis.unshift(pushThis)
        emojiInput.value = ""
        renderEmojis()
    }
})

// remove emoji from end of list
popBtn.addEventListener("click", () => {
    myEmojis.pop()
    renderEmojis()
})

// remove emoji from start of list
shiftBtn.addEventListener("click", () => {
    myEmojis.shift()
    renderEmojis()
})

renderEmojis()
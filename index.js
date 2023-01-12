const emojisArray = ["✌","😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","☀","🎈","🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🐻","🐶","🐬","🐟","🍀","👀","🚗","🍎","💝","💙","👌","❤","😍","😉","😓","😳","💪","💩","🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","💋","😘","😜","😵","🙏","👋","🚽","💃","💎","🚀","🌙","🎁","⛄","🌊","⛵","🏀","🎱","💰","👶","👸","🐰","🐷","🐍","🐫","🔫","👄","🚲","🍉","💛","💚","👨‍💻", "⛷", "🍲"]

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

function highlightSize(sentSize) {
    const sizeSmallDiv = document.getElementById("size-small-div")
    const sizeMediumDiv = document.getElementById("size-medium-div")
    const sizeLargeDiv = document.getElementById("size-large-div")

    if (sentSize === "small") {
        sizeSmallDiv.style.backgroundColor = "green"
        sizeMediumDiv.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        sizeLargeDiv.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        console.log("sent small")
    }

    if (sentSize === "medium") {
        sizeSmallDiv.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        sizeMediumDiv.style.backgroundColor = "green"
        sizeLargeDiv.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        console.log("sent medium")
    }

    if (sentSize === "large") {
        sizeSmallDiv.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        sizeMediumDiv.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        sizeLargeDiv.style.backgroundColor = "green"
        console.log("sent large")
    }
}

sizeSmall.addEventListener("click", () => {
    console.log("small")
    size = "small"
    highlightSize(size)
})

sizeMedium.addEventListener("click", () => {
    console.log("medium")
    size = "medium"
    highlightSize(size)
})

sizeLarge.addEventListener("click", () => {
    console.log("large")
    size = "large"
    highlightSize(size)
})

// create an object for each saved emoji
function emojiAndSize(sentEmoji, sentSize) {
    let sizedEmoji = {
        "emojiName": sentEmoji,
        "emojiSize": sentSize
    }
    return sizedEmoji
}

// add emoji to end of list
pushBtn.addEventListener("click", () => {
    if (emojiInput.value) {
        let pushThis = emojiAndSize(emojiInput.value, size)
        myEmojis.push(pushThis)
        emojiInput.value = ""
        renderEmojis()
    }
    console.log('pushed', myEmojis)
})

// add emoji to start of list
unshiftBtn.addEventListener("click", () => {
    if (emojiInput.value) {
        let pushThis = emojiAndSize(emojiInput.value, size)
        myEmojis.unshift(pushThis)
        emojiInput.value = ""
        renderEmojis()
    }
    console.log('unshifted', myEmojis)
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
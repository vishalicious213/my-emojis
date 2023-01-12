const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")

function renderEmojis() {
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement("span")
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

pushBtn.addEventListener("click", () => {
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        emojiContainer.innerHTML = ""
        renderEmojis()
    }
})

unshiftBtn.addEventListener("click", () => {
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        emojiContainer.innerHTML = ""
        renderEmojis()
    }
})

renderEmojis()
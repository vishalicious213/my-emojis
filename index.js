const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")

for (let i = 0; i < myEmojis.length; i++) {
    const emoji = document.createElement("span")
    emoji.textContent = myEmojis[i]
    emojiContainer.append(emoji)
}

pushBtn.addEventListener("click", () => {
    // console.log(emojiInput.value)
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiContainer.append(emojiInput.value)
        emojiInput.value = ""
    }
})
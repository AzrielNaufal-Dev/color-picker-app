document.getElementById("colorInput").addEventListener("input", (event) => {
  // Get selected color from input
  let selectedColor = event.target.value

  // Update the color text
  document.getElementById("colorCode").textContent = selectedColor

  // Update the background color of the display box
  document.getElementById("colorDisplay").style.backgroundColor = selectedColor
})

document.getElementById("copyBtn").addEventListener("click", () => {
  let hexCode = document.getElementById("colorCode").textContent

  navigator.clipboard.writeText(hexCode)
})
export function successMessage({ element, message }) {
  const newDiv = document.createElement("div")
  newDiv.classList.add("success")

  const successMessage = document.createElement("span")
  successMessage.textContent = message

  newDiv.appendChild(successMessage)
  element.appendChild(newDiv)

  setTimeout(() => {
    element.removeChild(newDiv)
  }, 3000)
}

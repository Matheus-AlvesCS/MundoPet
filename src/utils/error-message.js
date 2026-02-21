export function errorMessage({ element, message }) {
  const newDiv = document.createElement("div")
  newDiv.classList.add("error")

  const errorMessage = document.createElement("span")
  errorMessage.textContent = message

  newDiv.appendChild(errorMessage)
  element.appendChild(newDiv)

  setTimeout(() => {
    element.removeChild(newDiv)
  }, 3000)
}

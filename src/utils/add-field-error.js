export function addFieldError({ element, message }) {
  const newDiv = document.createElement("div")
  newDiv.classList.add("error")

  const warningIcon = document.createElement("img")
  warningIcon.setAttribute("src", "./src/assets/icons/warning-circle.svg")
  warningIcon.setAttribute("alt", "erro")

  const errorMessage = document.createElement("span")
  errorMessage.textContent = message

  newDiv.append(warningIcon, errorMessage)
  element.appendChild(newDiv)

  setTimeout(() => {
    element.removeChild(newDiv)
  }, 3000)
}

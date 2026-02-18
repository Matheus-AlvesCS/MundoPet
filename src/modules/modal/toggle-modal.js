const modal = document.getElementById("modal")
const btnOpen = document.getElementById("openModal")
const btnClose = document.getElementById("closeModal")

btnOpen.onclick = () => modal.showModal()

btnClose.onclick = () => {
  modal.classList.add("disappear")

  modal.addEventListener(
    "animationend",
    () => {
      modal.classList.remove("disappear")

      modal.close()
    },
    { once: true },
  )
}

modal.addEventListener("cancel", (event) => {
  event.preventDefault()

  btnClose.click()
})

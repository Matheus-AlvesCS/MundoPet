const modal = document.getElementById("modal")
const btnOpen = document.getElementById("openModal")
const btnClose = document.getElementById("closeModal")

btnOpen.onclick = () => modal.showModal()

btnClose.onclick = () => modal.close()

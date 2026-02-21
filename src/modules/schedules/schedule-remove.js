import { scheduleDelete } from "../../services/schedule-delete"
import { loadDailySchedules } from "./load"

const allLists = document.querySelectorAll(".period-list")

allLists.forEach((list) => {
  list.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel")) {
      const parentElement = event.target.parentNode
      const id = parentElement.dataset.id

      if (id) {
        const confirmRemove = confirm(
          "Deseja realmente remover esse agendamento?",
        )

        if (confirmRemove) {
          await scheduleDelete({ id })
          await loadDailySchedules()
        }
      }
    }
  })
})

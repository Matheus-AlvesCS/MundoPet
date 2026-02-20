import { loadDailySchedules } from "./load"

const date = document.getElementById("date")

date.addEventListener("change", () => {
  loadDailySchedules({ day: date.value })
})

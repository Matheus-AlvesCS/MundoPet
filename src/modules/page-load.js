import dayjs from "dayjs"
import { loadDailySchedules } from "./schedules/load"

const date = document.getElementById("date")
const today = dayjs().format("YYYY-MM-DD")

date.value = today

addEventListener("DOMContentLoaded", () => {
  loadDailySchedules({ day: date.value })
})

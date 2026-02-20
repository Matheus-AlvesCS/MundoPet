import { scheduleFetchByDay } from "../../services/schedule-fetch"
import { renderSchedules } from "./schedule-render.js"

const date = document.getElementById("date")

export async function loadDailySchedules() {
  const day = date.value

  const dailySchedules = await scheduleFetchByDay({ day })

  renderSchedules({ dailySchedules })
}

import { scheduleFetchByDay } from "../../services/schedule-fetch"
import { renderSchedules } from "./schedule-render.js"

export async function loadDailySchedules({ day }) {
  const dailySchedules = await scheduleFetchByDay({ day })

  renderSchedules({ dailySchedules })
}

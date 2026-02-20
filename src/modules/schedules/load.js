import { scheduleFetchByDay } from "../../services/schedule-fetch"

export async function loadDailySchedules({ day }) {
  const dailySchedules = await scheduleFetchByDay({ day })
}

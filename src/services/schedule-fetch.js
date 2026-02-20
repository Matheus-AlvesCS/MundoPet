import dayjs from "dayjs"
import { apiConfig } from "./api-config"

export async function scheduleFetchByDay({ day }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`)
    const schedules = await response.json()

    const dailySchedules = schedules.filter((schedule) =>
      dayjs(schedule.when).isSame(day, "day"),
    )

    return dailySchedules
  } catch (error) {
    alert("Não foi possível buscar os agendamentos do dia.")
    console.log(error)
  }
}

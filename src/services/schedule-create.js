import { apiConfig } from "./api-config"

export async function scheduleCreate(data) {
  try {
    const { ok } = await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    return ok
  } catch (error) {
    alert("Não foi possível realizar o agendamento.")
    console.log(error)
  }
}

import { apiConfig } from "./api-config"

export async function scheduleCreate(data) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    alert("Agendamento realizado com sucesso!")
  } catch (error) {
    alert("Não foi possível realizar o agendamento.")
  }
}

import { apiConfig } from "./api-config.js"

export async function scheduleDelete({ id }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    })

    alert("Agendamento removido com sucesso!")
  } catch (error) {
    alert("Não foi possível deletar o agendameto, tente novamente mais tarde.")
    console.log(error)
  }
}

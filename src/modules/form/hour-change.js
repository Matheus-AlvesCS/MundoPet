import { addFieldError } from "../../utils/add-field-error"

const scheduleHour = document.getElementById("schedule-hour")

scheduleHour.min = "09:00"
scheduleHour.max = "21:00"

scheduleHour.addEventListener("change", () => {
  const [hour, minute] = scheduleHour.value.split(":").map(Number)

  if (isNaN(hour) || isNaN(minute)) {
    addFieldError({
      element: scheduleHour.parentNode.parentNode.parentNode,
      message: "Selecione data e horário válidos.",
    })
  }

  if (minute % 30 !== 0) {
    addFieldError({
      element: scheduleHour.parentNode.parentNode.parentNode,
      message: `Os agendamentos ocorrem em intervalos de 30 minutos! (ex: ${hour}:00, ${hour}:30)`,
    })
  }
})

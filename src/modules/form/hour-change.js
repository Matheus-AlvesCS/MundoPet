const scheduleHour = document.getElementById("schedule-hour")

scheduleHour.min = "09:00"
scheduleHour.max = "21:00"

scheduleHour.addEventListener("change", () => {
  const [hour, minute] = scheduleHour.value.split(":").map(Number)

  if (isNaN(hour) || isNaN(minute)) {
    return alert("Por favor selecione um horário válido.")
  }

  if (minute % 30 !== 0) {
    return alert(
      "Os agendamentos ocorrem em intervalos de 30 minutos! (ex: 10:00, 10:30)",
    )
  }
})

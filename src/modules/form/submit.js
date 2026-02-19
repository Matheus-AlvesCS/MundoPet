import dayjs from "dayjs"

const form = document.querySelector("form")
const scheduleDate = document.getElementById("schedule-date")
const scheduleHour = document.getElementById("schedule-hour")
const tutorName = document.getElementById("tutor-name")
const petName = document.getElementById("pet-name")
const contact = document.getElementById("contact")
const service = document.getElementById("service")

scheduleDate.min = dayjs().format("YYYY-MM-DD")
scheduleDate.max = dayjs().add(30, "day").format("YYYY-MM-DD")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  try {
    const id = new Date().getTime()

    const tutor_name = tutorName.value
    if (!tutor_name) {
      return alert("Insira o nome do tutor.")
    }

    const pet_name = petName.value
    if (!pet_name) {
      return alert("Insira o nome do pet.")
    }

    const phone = contact.value
    if (!phone) {
      return alert("Insira um telefone para contato.")
    }

    const service_description = service.value
    if (!service_description) {
      return alert("Descreva o serviço a ser realizado.")
    }

    const [hour, minute] = scheduleHour.value.split(":").map(Number)

    const when = dayjs(scheduleDate.value)
      .add(hour, "hour")
      .add(minute, "minute")

    console.log({
      id,
      tutor_name,
      pet_name,
      phone,
      service_description,
      when,
    })
  } catch (error) {
    alert(
      "Não foi possível realizar o agendamento, tente novamente mais tarde.",
    )
    console.log(error)
  }
})

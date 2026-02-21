import dayjs from "dayjs"

import { addFieldError } from "../../utils/add-field-error"
import { scheduleCreate } from "../../services/schedule-create"
import { successMessage } from "../../utils/success-message"
import { loadDailySchedules } from "../schedules/load"
import { scheduleFetchByDay } from "../../services/schedule-fetch"

const form = document.querySelector("form")
const scheduleDate = document.getElementById("schedule-date")
const scheduleHour = document.getElementById("schedule-hour")
const tutorName = document.getElementById("tutor-name")
const petName = document.getElementById("pet-name")
const contact = document.getElementById("contact")
const service = document.getElementById("service")

const today = dayjs().format("YYYY-MM-DD")

scheduleDate.value = today
scheduleDate.min = today
scheduleDate.max = dayjs().add(30, "day").format("YYYY-MM-DD")

form.addEventListener("submit", async (event) => {
  event.preventDefault()

  try {
    const id = new Date().getTime()

    const tutor_name = tutorName.value
    if (!tutor_name) {
      throw {
        parentElement: tutorName.parentNode.parentNode,
        message: "Insira o nome do tutor.",
      }
    }

    const pet_name = petName.value
    if (!pet_name) {
      throw {
        parentElement: petName.parentNode.parentNode,
        message: "Insira o nome do pet.",
      }
    }

    const phone = contact.value
    if (!phone) {
      throw {
        parentElement: contact.parentNode.parentNode,
        message: "Insira um telefone para contato.",
      }
    }

    const service_description = service.value
    if (!service_description) {
      throw {
        parentElement: service.parentNode,
        message: "Descreva o serviço a ser realizado.",
      }
    }

    if (!scheduleDate.value || !scheduleHour.value) {
      throw {
        parentElement: scheduleDate.parentNode.parentNode.parentNode,
        message: "Informe a data do agendamento por completo (Dia e horário).",
      }
    }

    const [hour, minute] = scheduleHour.value.split(":").map(Number)

    const when = dayjs(scheduleDate.value)
      .add(hour, "hour")
      .add(minute, "minute")

    const data = {
      id,
      tutor_name,
      pet_name,
      phone,
      service_description,
      when,
    }

    const dailySchedules = await scheduleFetchByDay({
      day: when.format("YYYY-MM-DD"),
    })

    const unavailableHours = dailySchedules.map((schedule) => schedule.when)
    let availableToCreate = true

    unavailableHours.forEach((hour) => {
      if (dayjs(data.when).isSame(dayjs(hour))) {
        availableToCreate = false

        return alert(
          "Esse horário já foi agendado por outra pessoa, por favor escolha outro.",
        )
      }
    })

    if (availableToCreate) {
      const response = await scheduleCreate(data)
      if (response) {
        successMessage({
          element: form.children[0],
          message: "Agendamento realizado com sucesso!",
        })
      }
    }

    clearForm()
    loadDailySchedules()
  } catch (error) {
    addFieldError({ element: error.parentElement, message: error.message })
  }
})

function clearForm() {
  tutorName.value = ""
  petName.value = ""
  contact.value = ""
  service.value = ""
  scheduleDate.value = ""
  scheduleHour.value = ""

  tutorName.focus()
}

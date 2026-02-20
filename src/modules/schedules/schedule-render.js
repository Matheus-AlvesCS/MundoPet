import dayjs from "dayjs"

const morningList = document.querySelector(".morning-list")
const afternoonList = document.querySelector(".afternoon-list")
const nightList = document.querySelector(".night-list")

export function renderSchedules({ dailySchedules }) {
  morningList.innerHTML = ""
  afternoonList.innerHTML = ""
  nightList.innerHTML = ""

  dailySchedules.forEach((schedule) => {
    const newLi = document.createElement("li")

    const scheduleTime = document.createElement("strong")
    scheduleTime.textContent = dayjs(schedule.when).format("HH:mm")

    const petData = document.createElement("div")
    petData.classList.add("pet-data")

    const name = document.createElement("span")
    name.innerHTML = `<b>${schedule.pet_name}</b> / ${schedule.tutor_name}`

    const service = document.createElement("span")
    service.textContent = schedule.service_description
    service.classList.add("service")

    const removeLink = document.createElement("a")
    removeLink.textContent = "Remover agendamento"
    removeLink.classList.add("link")

    petData.appendChild(name)
    newLi.append(scheduleTime, petData, service, removeLink)

    if (dayjs(schedule.when).hour() >= 9 && dayjs(schedule.when).hour() <= 12) {
      morningList.appendChild(newLi)
    } else if (
      dayjs(schedule.when).hour() >= 13 &&
      dayjs(schedule.when).hour() <= 18
    ) {
      afternoonList.appendChild(newLi)
    } else {
      nightList.appendChild(newLi)
    }
  })
}

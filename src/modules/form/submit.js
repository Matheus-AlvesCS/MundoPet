import dayjs from "dayjs"

const form = document.querySelector("form")
const scheduleDate = document.getElementById("schedule-date")

scheduleDate.min = dayjs().format("YYYY-MM-DD")
scheduleDate.max = dayjs().add(30, "day").format("YYYY-MM-DD")

form.addEventListener("submit", (event) => {
  event.preventDefault()
})

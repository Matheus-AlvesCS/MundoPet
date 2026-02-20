const contact = document.getElementById("contact")

contact.addEventListener("input", (event) => {
  let value = event.target.value

  value = value.replace(/\D/g, "")
  value = value.slice(0, 11)

  value = value.replace(/^(\d{2})(\d)/, "($1) $2")
  value = value.replace(/(\d{1})(\d{4})(\d{4})$/, "$1 $2-$3")

  event.target.value = value
})

const nameInput = document.getElementById("name")
const ageInput = document.getElementById("age")
const courseInput = document.getElementById("course")
const btn = document.getElementById("btn")
const message = document.getElementById("message")

function setBorder(input, isValid) {
    input.style.border = isValid ? "2px solid green" : "2px solid red"
}

function validateFields() {
    const isNameValid = nameInput.value.trim() !== ""
    const isAgeValid = ageInput.value.trim() !== ""
    const isCourseValid = courseInput.value.trim() !== ""

    setBorder(nameInput, isNameValid)
    setBorder(ageInput, isAgeValid)
    setBorder(courseInput, isCourseValid)

    return isNameValid && isAgeValid && isCourseValid
}

[nameInput, ageInput, courseInput].forEach(input => {
    input.addEventListener("input", validateFields)
})

btn.addEventListener("click", () => {
    const isValid = validateFields()

    if (!isValid) {
        message.textContent = ""
        return
    }

    message.textContent = ""
    setTimeout(() => {
        message.textContent = "Registration successful"
    }, 2000)
})
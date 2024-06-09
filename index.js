const successDisplay = document.getElementById('success-display')
const pEl = successDisplay.querySelector('p')
const nameEl = document.getElementById('name')
const emailEl = document.getElementById('email')

const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = nameEl.value
    const email = emailEl.value
    pEl.textContent = `Hello ${name}, your email ${email} has been successfully submitted!`
    successDisplay.style.display = 'block'
    form.reset()
    setTimeout(() => {
        successDisplay.style.display = 'none'
    }, 5000)
})
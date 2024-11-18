const hero_modal = document.querySelector('#hero-modal')


document.querySelector('#open-hero-modal').addEventListener('click', () => {
    hero_modal.showModal()
    hero_modal.classList.toggle("no-display")
})
document.querySelector('#close-hero-modal-btn').addEventListener('click', () => {
    hero_modal.close()
    hero_modal.classList.toggle("no-display")
})
document.querySelector("#buy-hero-btn").addEventListener("click", () => {
    if (document.querySelector("#hero-nickname-input").value === "" || document.querySelector("#hero-email-input").value === "") {
        alert("Заполните поля ввода почты и никнейма")
    }
})

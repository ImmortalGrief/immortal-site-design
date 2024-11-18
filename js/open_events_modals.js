const nether_plate_modal = document.querySelector('#nether-plate-modal')


document.querySelector('#nether-plate-open-modal').addEventListener('click', () => {
    nether_plate_modal.showModal()
    nether_plate_modal.classList.toggle("no-display")
})
document.querySelector('#close-nether-plate-modal-btn').addEventListener('click', () => {
    nether_plate_modal.close()
    nether_plate_modal.classList.toggle("no-display")
})
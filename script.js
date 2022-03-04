const modal = document.querySelector('.modal-bg')
const openModal = document.querySelector('.open-modal')
const cookiesBtn = document.querySelector('.cookies-btn')
const cookies = document.querySelector('.cookies')

openModal.onclick = () => modal.classList.add('bg-active')

cookiesBtn.onclick = () => cookies.classList.add('inactive-cookies')

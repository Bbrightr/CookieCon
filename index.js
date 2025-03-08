const modal = document.getElementById("modal")
const modalCloseBtn = document.getElementById("modal-close-btn")
const consentForm = document.getElementById("consent-form")
const modalText = document.getElementById("modal-text")
const modalInner = document.getElementById("modal-inner")
const switchBtns = document.getElementById("modal-choice-btns")
const declineBtn = document.getElementById("declinebtn")

setTimeout(function(){
    modal.style.display = 'inline'
}, 2000)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

consentForm.addEventListener('submit', function(e){
    e.preventDefault()

    const formData = new FormData(consentForm)
    const userName = formData.get('fullName')
    console.log(userName)

    modalText.innerHTML = `<div class="modal-inner-loading">
                            <img src="images/loading.svg" class="loading">
                            <p id="uploadText">
                            Uploading your data to the dark web...</p>
                            </div>
    `

    setTimeout(function(){
        document.getElementById("uploadText").innerText= `Making the sale...`
    }, 1500)

    setTimeout(function(){
        modalInner.innerHTML = `
        <h2>Thanks <span class="modal-display-name">${userName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="https://media1.tenor.com/m/18peQO6upVwAAAAd/pirate-laughing.gif">
        </div>
    ` 
    modalCloseBtn.disabled = false

    }, 3000)

    

})

declineBtn.addEventListener('mouseover',function(){
    // console.log("here")
    switchBtns.classList.toggle('reverse')
})
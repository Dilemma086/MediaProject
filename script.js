const imgAll = Array.from(document.querySelectorAll('.imgBlockFlex img'))
const body = document.querySelector('body')

imgAll.forEach(item => item.addEventListener('click', () => {
    const headDiv = document.createElement('div')
    headDiv.classList.add('headDiv')
    headDiv.innerHTML = `
        <span class="close"> x</span>
    `
}))


// кнопка Заказать

const callBackForm = document.querySelector('.callBackForm')


callBackForm.addEventListener('click', () => {
    const CallDiv = document.createElement('div')
    
    CallDiv.classList.add('CallDiv')
    body.append(CallDiv)
    CallDiv.innerHTML = `
        <span class="closeDivMmoda"><img src="/images/close.png"></span>
        <div class="leftBlock">
            <img src="/images/logo.png">
            <h2>Сделать заказ</h2>
            <p><img src="/images/whatsapp.png"><a href="https://api.whatsapp.com/send/?phone=79616128682&text&type=phone_number&app_absent=0">Перейти в чат WhatsApp</a></p>
            <p><img src="/images/telegram.png"><a href="https://t.me/MediaProjectspb">Перейти в чат Telegram</a></p>
        </div>
        <div class="rightBlock">
            
        </div>

    `
    const closeDivMmoda = document.querySelector('.closeDivMmoda')
    closeDivMmoda.addEventListener('click', () => {
        CallDiv.remove()
    })

})


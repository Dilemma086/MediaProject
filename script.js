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
        <div class="leftBlock">
            <p>Заказать звонок</p>
        </div>
        <div class="rightBlock">
            <img src=""/>
        </div>

    `
})


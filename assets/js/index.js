const nextbutton = document.getElementById('next');
const prevbutton = document.getElementById('prev');
const item = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const number = document.querySelector('.numbers')
const list = document.querySelector('.list')

let active = 0
const total = item.length
let timer;

function update(directions){

    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')

    if(directions > 0){
        active = active + 1
        if(active === total){
            active = 0
        }
    }
    else if(directions < 0){
        active =active - 1

        if(active < 0){
            active = total - 1;
        }
    }
    item[active].classList.add('active')
    dots[active].classList.add('active')

    number.textContent = String(active + 1).padStart(2, '0')
}

    clearInterval(timer)
    time = setInterval(() => {
        update(1);
    }, 5000);

prevbutton.addEventListener('click', () => {
    update(-1)
})

nextbutton.addEventListener('click', () => {
    update(+1   )
})
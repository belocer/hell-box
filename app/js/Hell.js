let poemArr = [
    `Мяско скушали мухи и черви<br>
    Кости сгрызли зубатые звери<br>
    Все довольны все улыбаются<br>
    Только кому-то всё это не нравится<br>`,

    `Этот кто-то всё злее и злее<br>
    Его тело мёртвых мертвее<br>
    Его душа всё черней и чернее<br>
    А вместо глаз, угли краснеют<br>`,

    `Всё,- злу, уже не удержаться<br>
    Поздно за нутро своё хвататься<br>
    Твои глаза для меня путь в рай<br>
    Смотри сюда, свою душу отдай!`
];

window.addEventListener('load', () => {
    let poem = document.getElementById('poem');
    let timeText = 0
    poem.animate([
        {opacity: 0},
        {opacity: 1}
    ], {duration: 2000});
    poemArr.forEach(item => {
        setTimeout(() => {
            poem.innerHTML = item
        }, timeText)
        timeText += 10000
    })

    setInterval(() => {
        poem.animate([
            {opacity: 0},
            {opacity: 1}
        ], {duration: 2000});
    }, 10000)


    let demon = document.getElementById('demon')
    let hell = document.querySelector('.hell');
    let lamp = document.querySelector('.lamp');
    let blackLayer = document.querySelector('.demon__blackLayer');
    let redLayer = document.querySelector('.demon__redLayer');
    let eye = document.querySelector('.demon__eye');
    let hell__side = document.querySelectorAll('.hell__side');

    setTimeout(() => {
        hell.classList.remove('hell_anim')
        hell.style.transition = 'none'
        lamp.style.animation = 'none';
        hell__side.forEach(item => item.style.animation = 'none')
        poem.style.opacity = '0';
        demon.style.display = 'block'
        setTimeout(() => {
            blackLayer.classList.add('demon__blackLayerAnimate')
            redLayer.classList.add('demon__redLayerAnimate')
            eye.classList.add('demon__eyeAnimate')
        }, 1000);

        let x = -300
        let intervalTransform = setInterval(function () {
            x += 8;
            if (x < 805) {
                hell.style.transform = `perspective(1200px) translateZ(${x}px) rotateX(0) translateX(-55px)`
            } else {
                clearInterval(intervalTransform)
            }
        }, 11)

        setTimeout(() => window.location.reload(), 6000)
    }, 30000);

    //setTimeout(() => document.getElementById('music').play(), 115)
    let mus =  document.getElementById('music')
    mus.addEventListener('canplay', () => mus.play());
})
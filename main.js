const uno = document.getElementById('1'), dos = document.getElementById('2'), tres = document.getElementById('3'),
    cuatro = document.getElementById('4'),cinco = document.getElementById('5'), seis = document.getElementById('6')

    uno.addEventListener('click', ()=>{
        uno.classList.remove('none')
    
        uno.classList.toggle('block')
    })

    dos.addEventListener('click', ()=>{
        dos.classList.remove('none')
    
        dos.classList.toggle('block')
    })
    tres.addEventListener('click', ()=>{
        tres.classList.remove('none')
    
        tres.classList.toggle('block')
    })
    cuatro.addEventListener('click', ()=>{
        cuatro.classList.remove('none')
    
        cuatro.classList.toggle('block')
    })
    cinco.addEventListener('click', ()=>{
        cinco.classList.remove('none')
    
        cinco.classList.toggle('block')
    })
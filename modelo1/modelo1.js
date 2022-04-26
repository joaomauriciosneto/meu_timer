const relogio = document.querySelector('.relogio')
let segundos = 0
let timer

function inicaRelogio(){
    timer = setInterval(function(){
        segundos++
        relogio.innerHTML = criaHoras(segundos)
    }, 1000)
}

function criaHoras(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

document.addEventListener('click', function(e){
    //e.target, vai informar pela classe, o local que está sendo clicado!
    const elemento = e.target 

    if(elemento.classList.contains('zerar')){
        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        relogio.classList.remove('pausado')
        segundos = 0
    }
    if(elemento.classList.contains('pausar')){
        clearInterval(timer)
        relogio.classList.add('pausado')
    }
    if(elemento.classList.contains('iniciar')){
        relogio.classList.remove('pausado')     
        clearInterval(timer)    
        inicaRelogio()
    }
})

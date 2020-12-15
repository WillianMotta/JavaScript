function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')

var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
msg.innerHTML = `Agora são ${hora} horas e ${min} Minutos.`
if(hora >= 0 && hora < 12){
    //Bom dia
    img.src = "manha.png" 
    document.body.style.background = '#ffe764'
} else if( hora >= 12 && hora<= 18){
    //Boa tarde
    img.src = "Tarde.png"
    document.body.style.background = '#a54309'
}else{
    //Boa noite
    img.src = "noite.png"
    document.body.style.background = '#083842'
}
}
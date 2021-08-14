let cuadroColores = document.getElementById ("cuadro-colores");

function saleCuadro (){
    if(cuadroColores.classList.contains('salio')){
        cuadroColores.classList.remove('salio');
    }else{
        cuadroColores.classList.add('salio');
    }
}

function changeColor(obj){
    let arrayOfChangecolorelements = document.getElementsByClassName('changeColor');
    for(let i = 0; i < arrayOfChangecolorelements.length; i++){
        if(arrayOfChangecolorelements[i].tagName !== 'DIV' 
        && arrayOfChangecolorelements[i].tagName !== 'BUTTON' ){
        
            arrayOfChangecolorelements[i].style.color =  obj.dataset.color;
        } else {
            arrayOfChangecolorelements[i].style.backgroundColor =  obj.dataset.color;
        }
    }
}


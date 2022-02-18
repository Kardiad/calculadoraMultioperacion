//je je nuestros arrays y pajas varias
let contenido = []; //en este tenemos los numeros con los que operamos
let operador = []; // en este tenemos los signos de las operaciones
let resul = []; // resultados de cada operador.
let polo = 0;
//Cada valor para prepararlo para el listener
let v0 = document.getElementById('n0');
let v1 = document.getElementById('n1');
let v2 = document.getElementById('n2');
let v3 = document.getElementById('n3');
let v4 = document.getElementById('n4');
let v5 = document.getElementById('n5');
let v6 = document.getElementById('n6');
let v7 = document.getElementById('n7');
let v8 = document.getElementById('n8');
let v9 = document.getElementById('n9');
let sum = document.getElementById('sum');
let res = document.getElementById('res');
let pow = document.getElementById('pow');
let divi = document.getElementById('divi');
let igual = document.getElementById('igual');
let clear = document.getElementById('clear');
let resultado = document.getElementById('resultado');
//la activación de cada uno de los botones vamos el click y  
//que ponga números y operadores en array y en pantalla
v0.addEventListener('click', function(){
    polo = parseInt(polo + v0.value);
    meternumero(v0.value);   
})
v1.addEventListener('click', function(){
    polo = parseInt(polo + v1.value);
    meternumero(v1.value);  
})
v2.addEventListener('click', function(){
    polo = parseInt(polo + v2.value);
    meternumero(v2.value);  
})
v3.addEventListener('click', function(){
    polo = parseInt(polo + v3.value);
   meternumero(v3.value);  
})
v4.addEventListener('click', function(){
    polo = parseInt(polo + v4.value);
    meternumero(v4.value);  
})
v5.addEventListener('click', function(){
    polo = parseInt(polo + v5.value);
    meternumero(v5.value);  
})
v6.addEventListener('click', function(){
    polo = parseInt(polo + v6.value);
   meternumero(v6.value);  
})
v7.addEventListener('click', function(){
    polo = parseInt(polo + v7.value);
    meternumero(v7.value);  
})
v8.addEventListener('click', function(){
    polo = parseInt(polo + v8.value);
    meternumero(v8.value);  
})
v9.addEventListener('click', function(){
    polo = parseInt(polo + v9.value);
    meternumero(v9.value);  
})
sum.addEventListener('click', function(){
    contenido.push(polo);
    polo=0;
    operador.push(sum.value);
    borrar();
})
res.addEventListener('click', function(){
    contenido.push(polo);
    polo=0;
    operador.push(res.value);
    borrar();
})
pow.addEventListener('click', function(){
    contenido.push(polo);
    polo=0;
    operador.push(pow.value);
    borrar(); 
})
divi.addEventListener('click', function(){
    contenido.push(polo);
    polo=0;
    operador.push(divi.value);
    borrar();  
})
igual.addEventListener('click', function(){
    borrar();
    contenido.push(polo);
    operar();
    trueclear();      
})
clear.addEventListener('click', function(){
    trueclear();
    borrar();
})
//mete valores en el interior de nuestro array, además de
//crear un elemento visible de suma en la calculadora
function meternumero(valor){
        text = valor.toString();
        numero = document.createElement('span')
        texto = document.createTextNode(text);
        numero.setAttribute('class', 'numb');
        numero.appendChild(texto);
        resultado.appendChild(numero);
}
//Simplifico código en funciónes para borrar datos:
function trueclear(){
        contenido.splice(0, contenido.length);
        operador.splice(0, operador.length);
        resul.splice(0, resul.length);
        polo = 0;
}
//Se activará para cuando damos al botón c pero no funca
function borrar(){
    numb = document.querySelectorAll('.numb');
    for(let x = 0; x<numb.length; x++){
        resultado.removeChild(numb[x]);
    } 
}
//Esta función hará todas las operaciones
//Es mejorable esta función cadena, aunque de momento suma
    function operar(){
        for(let x=0; x<contenido.length; x++){
            if(operador[x]==='+' && x===0){
                    resul[x]=contenido[x]+contenido[x+1];
                    meternumero(resul[x]);
                }else if(operador[x]==='+' && x>=1){
                    resul[x]=resul[x-1]+contenido[x+1];
                    borrar();
                    meternumero(resul[x]);
                }
            if(operador[x]==='-' && x===0){
                    resul[x]=contenido[x]-contenido[x+1];
                    meternumero(resul[x]);
                }else if(operador[x]==='-' && x>=1){
                    resul[x]=resul[x-1]-contenido[x+1];
                    borrar();
                    meternumero(resul[x]);                
                }
            if(operador[x]==='x' && x==0){
                    resul[x]=contenido[x]*contenido[x+1];
                    meternumero(resul[x]);
                }else if(operador[x]==='x' && x>=1){
                    resul[x]=resul[x-1]*contenido[x+1];
                    borrar();
                    meternumero(resul[x]);
                }
            if(operador[x]==='/' && x===0){
                    resul[x]=contenido[x]/contenido[x+1];
                    meternumero(resul[x]);
                }else if(operador[x]==='/' && x>=1){
                    resul[x]=resul[x-1]/contenido[x+1];
                    borrar();
                    meternumero(resul[x]);  
                }   
        }
    }                
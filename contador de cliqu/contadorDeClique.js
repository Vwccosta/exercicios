var contador = 0;
function contadorDeCliques(){
    contador ++
    res = document.getElementById('showContador');
    res.innerHTML = `<p>O numero de clique dado foi ${contador}</p>`
}
function zerarCliques(){
    contador = 0;
    res.innerHTML = null;
}

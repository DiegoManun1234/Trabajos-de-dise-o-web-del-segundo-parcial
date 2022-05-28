<script src="./JScript/acciones_script.js"></script>
window.addEventListener("load", iniciarf);
function iniciarf(){
vcosto = document.getElementById("costop");
vporcentaje = document.getElementById("porcentajev");
vimage = document.getElementById("simagen");
vcosto.addEventListener("input", mostrarpventa);
vporcentaje.addEventListener("input", mostrarpventa);
vimage.addEventListener("Input", mostrarimagen);
}
function mostrarpventa(){
if (vcosto.value != "" && vporcentaje.value != ""){
    let calculo = calcularPorcentaje(vcosto.value, vporcentaje.value);
    document.getElementById("pventa").value = calculo;
} else {
    document.getElementById("pventa").value = "";
}
}
function calcularPorcentaje(costof, calcularPorcentajef) {
let TantoTotal = costof * (porcentajef / 100);
let PVenta = parseFloat(costof) + parseFloat(TantoTotal);
return PVenta;    
}
function mostrarimagen(){
    var imagen = document.querySelector('img');
    var archivof = document.querySelector('input[type=file]').files[0];
    var leerarchivo = new FileReader();
    leerarchivo.onleaded = function (){
        verimagen.src = leerarchivo.result;
    }
    if (archivof) {
        leerarchivo.readAsDataURL(archivof)
    }else {
        verimagen.src = "";
    }
}
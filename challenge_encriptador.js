const textArea = document.querySelector(".entradaTexto");
const mensaje = document.querySelector(".salidaTexto"); 

function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Encriptado!',
        showConfirmButton: false,
        timer: 1000
      })
}

function encriptar(strEncriptar) {
    strEncriptar = strEncriptar.toLowerCase();
    paso1 = strEncriptar.replace(/e/g, "enter");
    paso2 = paso1.replace(/i/g, "imes");
    paso3 = paso2.replace(/o/g,"ober");
    paso4 = paso3.replace(/a/g, "ai");
    paso5 = paso4.replace(/u/g, "ufat");
    encriptado = paso5;
    return encriptado;
}

function botonDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Desencriptado!',
        showConfirmButton: false,
        timer: 1000
      })
}

function desencriptar(strDesencriptar){
    strDesencriptar = strDesencriptar.toLowerCase();
    paso1 = strDesencriptar.replace(/ai/g, "a");
    paso2 = paso1.replace(/enter/g, "e");
    paso3 = paso2.replace(/imes/g,"i");
    paso4 = paso3.replace(/ober/g, "o");
    paso5 = paso4.replace(/ufat/g, "u");
    desencriptado = paso5;
    return desencriptado;
}

function botonCopiar(){
    var textoCopiado = document.getElementById(`salidaTexto`).value;
    navigator.clipboard.writeText(textoCopiado).then(() => {
        //alert("El texto ha sido copiado");
        alerta();
        setTimeout(refrescar, 1000);

        function alerta() {
            Swal.fire(
                `Listo!`,
                `El texto se ha copiado`,
                `success`
                );
        }

        function refrescar() {
            window.location.reload();
        }
    });
}


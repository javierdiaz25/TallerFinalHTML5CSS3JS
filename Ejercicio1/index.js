
let textInputs = document.querySelectorAll('input[type=text]');
let nombre = document.getElementById('nombre');
let email = document.getElementById('email');
let asunto = document.getElementById('asunto');
let mensaje = document.getElementById('mensaje');

function validacionFormulario() {
    let mensajeError = '';
    let control = false;
   console.log(this.nombre.value);
    if ( this.nombre.value == null ||   this.nombre.value.trim() == '' ){
        control = true;
        mensajeError = "El campo nombre esta vacio\n";
    }else{
        console.log('Nombre: ' + this.nombre.value);
    }

    if ( this.email.value == null || this.email.value.trim() == ''){
        control = true;
        mensajeError += "El campo Email esta vacio\n";
    }else{
        console.log('Correo: ' + this.email.value);
    }


    if ( this.asunto.value == null || this.asunto.value.trim() == ''){
        control = true;
        mensajeError += "El campo asunto esta vacio\n";
    }else{
        console.log('Asunto: ' + this.asunto.value);
    }

    if ( this.mensaje.value == null || this.mensaje.value.trim() == ''){
        control = true;
        mensajeError += "El campo mensaje esta vacio\n"; 
    }else{
        console.log('Mensaje: ' + this.mensaje.value);
    }
    
    if (control === true){
        alert('Para enviar el formulario debe ingresar:\n'+ mensajeError);
    }
    return false;
}



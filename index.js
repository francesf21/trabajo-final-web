function registerData() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var mensaje = document.getElementById('mensaje').value;

    console.log("Nombre: " + nombre + " Correo: " + email + " Teléfono: " + phone + " Comentario: " + mensaje);

    alert('Datos Guardado correctamente.');
}
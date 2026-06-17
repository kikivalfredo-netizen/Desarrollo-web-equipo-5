const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("nombre").value;
    const lastName = document.getElementById("apellido").value;
    const email = document.getElementById("correo").value;
    const phone = document.getElementById("telefono").value;

    // Validacion de nombre
    if (name.length < 2 || name.length > 30) {
        alert("El nombre debe tener entre 2 y 30 caracteres.");
        return;
    }
    if (/\d/.test(name)) {
        alert("El nombre no puede contener números.");
        return;
    }

    // Validacion de apellido
    if (lastName.length < 2 || lastName.length > 30) {
        alert("El apellido debe tener entre 2 y 30 caracteres.");
        return;
    }
    if (/\d/.test(lastName)) {
        alert("El apellido no puede contener números.");
        return;
    }

    // Validacion de correo
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    // Validacion de teléfono
    if (phone.length < 7 || phone.length > 15 ) {
        alert("Por favor, ingresa un número de teléfono válido.");
        return;
    }
    if (/\D/.test(phone)) {
        alert("El numero de telefono no puede contener letras ni caracteres especiales.");
        return;
    }

    alert("Felicidades, estas registado en el evento!");
    window.location.href = "index.html";

});
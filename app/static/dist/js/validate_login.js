function togglePasswordVisibility() {
    var passwordInputs = document.querySelectorAll('#InputPasswordLog');
    var passwordIcon = document.querySelector('.input-group-text i');

    passwordInputs.forEach(function (input) {
        input.type = input.type === 'password' ? 'text' : 'password';
    });

    passwordIcon.classList.toggle('bi-eye');
    passwordIcon.classList.toggle('bi-eye-slash');
}


function mostrarParrafoError(clases, tiempoMostrar) {
    // Obtener los elementos de párrafo
    var parrafosError = document.getElementsByClassName(clases);

    // Verificar si se encontraron elementos
    if (parrafosError.length > 0) {
        // Mostrar cada párrafo
        for (var i = 0; i < parrafosError.length; i++) {
            if (parrafosError[i]) {
                parrafosError[i].style.display = 'block';

                // Esperar el tiempo especificado y luego ocultar el párrafo
                setTimeout(() => {
                    if (parrafosError[i]) {
                        parrafosError[i].style.display = 'none';
                    }
                }, tiempoMostrar);
            }
        }
    }
}


function validatePassword(password) {
    // Requisitos de validación
    const minLength = 8;
    const mustContainUppercase = /[A-Z]/;
    const mustContainSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    const mustContainNumber = /[0-9]/;

    // Verificar la longitud mínima
    if (password.length < minLength) {
        return "La contraseña debe tener al menos \[minLength\] caracteres.";
    }

    // Verificar si contiene al menos una letra mayúscula
    if (!mustContainUppercase.test(password)) {
        return "La contraseña debe contener al menos una letra mayúscula.";
    }

    // Verificar si contiene al menos un carácter especial
    if (!mustContainSpecialChar.test(password)) {
        return "La contraseña debe contener al menos un carácter especial.";
    }

    // Verificar si contiene al menos un número
    if (!mustContainNumber.test(password)) {
        return "La contraseña debe contener al menos un número.";
    }

    // Si se cumplen todos los requisitos, la contraseña es válida
    return "Contraseña válida.";
}

function validateEmail(email) {
    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verificar si el correo electrónico cumple con el formato
    if (!emailRegex.test(email)) {
        return "El correo electrónico no es válido.";
    }

    // Si el correo electrónico es válido, devolver un mensaje de éxito
    return "Correo electrónico válido.";
}

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form.user');
    var errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var emailLog = form.querySelector('#InputEmailLog');
        var passwordLog = form.querySelector('#InputPasswordLog');

        // Valida el correo electrónico
        if (!validateEmail(emailLog.value)) {
            errorMessage.textContent = 'Correo electrónico inválido.';
            errorMessage.style.display = 'block';
            return;
        }

        // Valida la contraseña
        if (!validatePassword(passwordLog.value)) {
            errorMessage.textContent = 'La contraseña debe tener al menos 6 caracteres.';
            errorMessage.style.display = 'block';
            return;
        }

        // Envía el formulario
        form.submit();
    });
});


// document.addEventListener('DOMContentLoaded', function() {
//     var form = document.querySelector('form.user');
//     var errorMessage = document.getElementById('error-message');

//     form.addEventListener('submit', function(event) {
//         event.preventDefault();
//         var emailLog = form.querySelector('#InputEmailLog');
//         var passwordLog = form.querySelector('#InputPasswordLog');

//         // Verifica si los campos son válidos
//         if (emailLog.value.trim() === '' || passwordLog.value.trim() === '') {
//             errorMessage.style.display = 'block';
//             // Agrega aquí la lógica para mostrar los errores en los campos correspondientes
//         }else {
//             form.submit();
//         }

        
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     var form = document.querySelector('form.user');
//     var submitButton = form.querySelector('button[type="submit"]');

//     form.addEventListener('submit', function (event) {
//         event.preventDefault();
//         var emailLog = form.querySelector('#InputEmailLog');
//         var passwordLog = form.querySelector('#InputPasswordLog');

//         var isValid = true;

//         if (emailLog.value.trim() === '') {
//             mostrarParrafoError('corner-textEmailVacio', 10000);
//             showError(emailLog);
//             isValid = false;
//         } else {
//             const emailValidationResult = validateEmail(emailLog.value);
//             if (emailValidationResult !== "Correo electrónico válido.") {
//                 mostrarParrafoError('corner-nombEmaillog', 10000);
//                 showError(emailLog);
//                 isValid = false;
//             }
//         }

//         // Validar la contraseña
//         if (passwordLog.value.trim() === '') {
//             mostrarParrafoError('corner-passwUserLog', 10000);
//             showError(passwordLog);
//             isValid = false;
//         } else {
//             // Validar la contraseña según los requisitos
//             const passwordValidationResult = validatePassword(passwordLog.value);
//             if (passwordValidationResult !== "Contraseña válida.") {
//                 mostrarParrafoError('corner-passwUserLogInv', 10000);
//                 showError(passwordLog);
//                 isValid = false;
//             }
//         }

//         if (isValid) {
//             // Aquí puedes agregar la lógica para validar las credenciales del usuario
//             // Si las credenciales son inválidas, muestra el error correspondiente
//             form.submit();
//         } else {
//             mostrarParrafoError('corner-Desconocido', 10000);
//         }

//     });

//     function showError(errorElement) {
//         errorElement.style.display = 'block';
//     }

//     function hideError(errorElement) {
//         errorElement.style.display = 'none';
//     }

//     function showError(element, message) {
//         element.classList.add('is-invalid');
//         var errorMessage = element.parentNode.querySelector('.invalid-feedback');
//         if (!errorMessage) {
//             errorMessage = document.createElement('div');
//             errorMessage.classList.add('invalid-feedback');
//             element.parentNode.appendChild(errorMessage);
//         }
//         errorMessage.textContent = message;
//     }

//     function showSuccess(element) {
//         element.classList.remove('is-invalid');
//         element.classList.add('is-valid');
//         var errorMessage = element.parentNode.querySelector('.invalid-feedback');
//         if (errorMessage) {
//             errorMessage.remove();
//         }
//     }
// });


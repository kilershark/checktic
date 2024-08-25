// MODO OSCURO
/**
 *  Light Switch @version v0.1.4
 */

(function () {
    let lightSwitch = document.getElementById('lightSwitch');
    if (!lightSwitch) {
        return;
    }

    /**
     * @function darkmode
     * @summary: changes the theme to 'dark mode' and save settings to local stroage.
     * Basically, replaces/toggles every CSS class that has '-light' class with '-dark'
     */
    function darkMode() {
        document.querySelectorAll('.bg-light').forEach((element) => {
            element.className = element.className.replace(/-light/g, '-dark');
        });

        document.querySelectorAll('.link-dark').forEach((element) => {
            element.className = element.className.replace(/link-dark/, 'text-white');
        });

        document.body.classList.add('bg-dark');


        document.querySelectorAll('a').forEach((element) => {
            element.style.textcolor = "FFFF"
        })
        document.querySelectorAll('p').forEach((element) => {
            element.style.textcolor = "FFFF"
        })

        if (document.body.classList.contains('text-dark')) {
            document.body.classList.replace('text-dark', 'text-light');
        } else {
            document.body.classList.add('text-light');
        }

        // Tables
        var tables = document.querySelectorAll('table');
        for (var i = 0; i < tables.length; i++) {
            // add table-dark class to each table
            tables[i].classList.add('table-dark');
        }

        // set light switch input to true
        if (!lightSwitch.checked) {
            lightSwitch.checked = true;
        }
        localStorage.setItem('lightSwitch', 'dark');
    }

    /**
     * @function lightmode
     * @summary: changes the theme to 'light mode' and save settings to local stroage.
     */
    function lightMode() {
        document.querySelectorAll('.bg-dark').forEach((element) => {
            element.className = element.className.replace(/-dark/g, '-light');
        });

        document.querySelectorAll('.text-white').forEach((element) => {
            element.className = element.className.replace(/text-white/, 'link-dark');
        });

        document.body.classList.add('bg-light');

        if (document.body.classList.contains('text-light')) {
            document.body.classList.replace('text-light', 'text-dark');
        } else {
            document.body.classList.add('text-dark');
        }

        // Tables
        var tables = document.querySelectorAll('table');
        for (var i = 0; i < tables.length; i++) {
            if (tables[i].classList.contains('table-dark')) {
                tables[i].classList.remove('table-dark');
            }
        }

        if (lightSwitch.checked) {
            lightSwitch.checked = false;
        }
        localStorage.setItem('lightSwitch', 'light');
    }

    /**
     * @function onToggleMode
     * @summary: the event handler attached to the switch. calling @darkMode or @lightMode depending on the checked state.
     */
    function onToggleMode() {
        if (lightSwitch.checked) {
            darkMode();
        } else {
            lightMode();
        }
    }

    /**
     * @function getSystemDefaultTheme
     * @summary: get system default theme by media query
     */
    function getSystemDefaultTheme() {
        const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
        if (darkThemeMq.matches) {
            return 'dark';
        }
        return 'light';
    }

    function setup() {
        var settings = localStorage.getItem('lightSwitch');
        if (settings == null) {
            settings = getSystemDefaultTheme();
        }

        if (settings == 'dark') {
            lightSwitch.checked = true;
        }

        lightSwitch.addEventListener('change', onToggleMode);
        onToggleMode();
    }

    setup();
})();




$(".menu-toggle").click(function () {
    $(".menu-toggle").toggleClass('open');
    $(".menu-round").toggleClass('open');
    $(".menu-line").toggleClass('open');
});
///

//////////////////FUNCION PARA EL CARTEL DE Q FUE AñADIDO CORRECTAMENTE EL DEPARTAMENTO/////////////////




//////////////////FUNCION PARA EL CARTEL DE Q FUE AñADIDO CORRECTAMENTE EL Area de Trabajo/////////////////
// $(document).ready(function () {
//     var message = $('#toast').attr('mensaje'); // Obtiene el mensaje del atributo data
//     console.log("Mensaje:", message); // Verifica el valor del mensaje
//     if (message) {
//         $('#toast').css('display', 'block'); // Muestra el toast
//         setTimeout(function () {
//             $('#toast').css('display', 'none'); // Oculta el toast después de 5 segundos
//         }, 5000);
//     } else {
//         $('#toast').css('display', 'none'); // Asegúrate de que esté oculto si no hay mensaje
//     }
// });
// $(document).ready(function () {
//     var message = $('#toast').data('mensaje'); // Obtiene el mensaje del atributo data
//     console.log("Mensaje:", message); // Verifica el valor del mensaje
//     if (message) {
//         $('#toast').text(message); // Establece el texto del toast
//         $('#toast').css('display', 'block'); // Muestra el toast
//         setTimeout(function () {
//             $('#toast').css('display', 'none'); // Oculta el toast después de 5 segundos
//         }, 5000);
//     } else {
//         $('#toast').css('display', 'none'); // Asegúrate de que esté oculto si no hay mensaje
//     }
// });



///////////////////////// IMAGEN DEL MODAL DEL MATERIAL*/////////////////
function loadfile(object) {
    console.log(object.value)
    let a = document.getElementById('file_select');
    let b = document.getElementById('file_name');
    let c = document.createElement('img');
    let d = document.getElementById('svg')
    c.src = object.value + "";

    a.innerHTML = "";
    b.innerHTML = "";
    d.innerHTML = "";
    a.appendChild(c)

}

////////////////// Para aparecer los campos para modificar la informacion de usuario /////////////
document.addEventListener("DOMContentLoaded", function () {
    var btnEditarPerfil = document.getElementById("btnEditarPerfil");
    if (btnEditarPerfil) {
        btnEditarPerfil.addEventListener("click", function () {
            // Habilitar los campos de entrada
            document.querySelectorAll("input, select").forEach(function (element) {
                element.disabled = false;
            });
            // Mostrar el botón de Guardar Cambios
            document.getElementById("btnGuardarCambios").style.display = "inline";
            // Ocultar el botón de Editar Perfil
            this.style.display = "none";
        });
    }
});


//// Para aparecer los div de la evaluacion
const radioButtons = document.querySelectorAll('input[name="uv-checkbox-group"]');
const sections = document.querySelectorAll('.div-informacion, .div-comunicacion-digital, .div-equipamiento, .div-software, .div-seguridad, .div-solucion-problemas');

// Función para mostrar/ocultar las secciones
function updateSections() {
    sections.forEach((section, index) => {
        section.style.display = radioButtons[index].checked ? 'block' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Agregar event listener a los botones de radio
    radioButtons.forEach(radioButton => {
        radioButton.addEventListener('change', updateSections);
    });

    // Llamar a la función inicialmente para mostrar la sección correcta
    updateSections();
});




// Obtiene referencias a los botones de radio y los divs
const radioWorkers = document.querySelector('input[name="engine"][value="trabajadores"]');
const radioDepts = document.querySelector('input[name="engine"][value="departamentos"]');
const divWorkers = document.getElementById('div-trabajadores');
const divDepts = document.getElementById('div-departamentos');
const divFiltro = document.getElementById('div-filtro');
const divBotDep = document.getElementById('botDep')
const divBotArea = document.getElementById('botArea')


if (radioWorkers) {
    radioWorkers.addEventListener('change', () => {
        divWorkers.style.display = 'block';
        divDepts.style.display = 'none';

        divBotDep.style.display = 'none';
        divBotArea.style.display = 'none';
    });
}

if (radioDepts) {
    radioDepts.addEventListener('change', () => {
        divWorkers.style.display = 'none';
        divDepts.style.display = 'block';

        divBotDep.style.display = 'block'
        divBotArea.style.display = 'block'


    });
}





// Aquí puedes agregar más funcionalidades, como el manejo del arrastrar y soltar


//////////////// Filtro de departamentos //////////////////////





function togglePasswordVisibility() {
    var passwordInputs = document.querySelectorAll('#InputPassword, #InputRepeatPassword');
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



document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form.user');
    if (!form) {
        console.error('El formulario no se encontró.');
        return; // Salir si el formulario no existe
    }

    var submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', function (event) {
        event.preventDefault();


        event.preventDefault();

        var primer_nombre = form.querySelector('#exampleFirstName');
        var segundo_nombre = form.querySelector('#exampleLastName');
        var email = form.querySelector('#exampleInputEmail');
        var username = form.querySelector('#exampleInputUsername');
        var password = form.querySelector('#InputPassword');
        var repeat_password = form.querySelector('#InputRepeatPassword');
        var area_trabajo = form.querySelector('#area_trabajo');
        var departamento = form.querySelector('#departamento');

        var isValid = true;

        if (primer_nombre.value.trim() === '') {
            mostrarParrafoError('corner-textNomb', 10000);
            showError(primer_nombre)

            isValid = false;
        }

        if (segundo_nombre.value.trim() === '') {
            mostrarParrafoError('corner-textApell', 10000);
            showError(segundo_nombre)
            isValid = false;
        }

        // Validar el correo electrónico
        if (email.value.trim() === '') {
            mostrarParrafoError('corner-textEmailVacio', 10000);
            showError(email);
            isValid = false;
        } else {
            const emailValidationResult = validateEmail(email.value);
            if (emailValidationResult !== "Correo electrónico válido.") {
                mostrarParrafoError('corner-textEmailInvalido', 10000);
                showError(email);
                isValid = false;
            }
        }


        if (username.value.trim() === '') {
            mostrarParrafoError('corner-textNombuser', 10000);
            showError(username)
            isValid = false;
        }

        // Validar la contraseña
        if (password.value.trim() === '') {
            mostrarParrafoError('corner-textContraVacia', 10000);
            showError(password);
            isValid = false;
        } else {
            // Validar la contraseña según los requisitos
            const passwordValidationResult = validatePassword(password.value);
            if (passwordValidationResult !== "Contraseña válida.") {
                mostrarParrafoError('corner-textContraInvalida', 10000);
                showError(password);
                isValid = false;
            }
        }


        if (repeat_password.value.trim() === '') {
            mostrarParrafoError('corner-textRepContra', 10000);
            showError(repeat_password)

            isValid = false;
        } else if (repeat_password.value !== password.value) {
            mostrarParrafoError('corner-textContra', 10000);
            showError(repeat_password)

            isValid = false;
        }

        if (area_trabajo.value === '') {
            mostrarParrafoError('corner-textAt', 10000);
            showError(area_trabajo)
            isValid = false;
        }

        if (departamento.value === '') {
            mostrarParrafoError('corner-textDep', 10000);
            showError(departamento)
            isValid = false;
        }

        if (isValid) {
            form.submit();
        }
    });
    function showError(element, message) {
        element.classList.add('is-invalid');
        var errorMessage = element.parentNode.querySelector('.invalid-feedback');
        if (!errorMessage) {
            errorMessage = document.createElement('div');
            errorMessage.classList.add('invalid-feedback');
            element.parentNode.appendChild(errorMessage);
        }
        errorMessage.textContent = message;
    }

    function showSuccess(element) {
        element.classList.remove('is-invalid');
        element.classList.add('is-valid');
        var errorMessage = element.parentNode.querySelector('.invalid-feedback');
        if (errorMessage) {
            errorMessage.remove();
        }
    }
});


// document.addEventListener('DOMContentLoaded', function () {
//     var form = document.querySelector('form.user');
//     var submitButton = form.querySelector('button[type="submit"]');

//     form.addEventListener('submit', function (event) {
//         event.preventDefault();

//         var primer_nombre = form.querySelector('#exampleFirstName');
//         var segundo_nombre = form.querySelector('#exampleLastName');
//         var email = form.querySelector('#exampleInputEmail');
//         var username = form.querySelector('#exampleInputUsername');
//         var password = form.querySelector('#InputPassword');
//         var repeat_password = form.querySelector('#InputRepeatPassword');
//         var area_trabajo = form.querySelector('#area_trabajo');
//         var departamento = form.querySelector('#departamento');

//         var isValid = true;

//         if (primer_nombre.value.trim() === '') {
//             mostrarParrafoError('corner-textNomb', 10000);
//             showError(primer_nombre)

//             isValid = false;
//         }

//         if (segundo_nombre.value.trim() === '') {
//             mostrarParrafoError('corner-textApell', 10000);
//             showError(segundo_nombre)
//             isValid = false;
//         }

//         // Validar el correo electrónico
//         if (email.value.trim() === '') {
//             mostrarParrafoError('corner-textEmailVacio', 10000);
//             showError(email);
//             isValid = false;
//         } else {
//             const emailValidationResult = validateEmail(email.value);
//             if (emailValidationResult !== "Correo electrónico válido.") {
//                 mostrarParrafoError('corner-textEmailInvalido', 10000);
//                 showError(email);
//                 isValid = false;
//             }
//         }


//         if (username.value.trim() === '') {
//             mostrarParrafoError('corner-textNombuser', 10000);
//             showError(username)
//             isValid = false;
//         }

//         // Validar la contraseña
//         if (password.value.trim() === '') {
//             mostrarParrafoError('corner-textContraVacia', 10000);
//             showError(password);
//             isValid = false;
//         } else {
//             // Validar la contraseña según los requisitos
//             const passwordValidationResult = validatePassword(password.value);
//             if (passwordValidationResult !== "Contraseña válida.") {
//                 mostrarParrafoError('corner-textContraInvalida', 10000);
//                 showError(password);
//                 isValid = false;
//             }
//         }


//         if (repeat_password.value.trim() === '') {
//             mostrarParrafoError('corner-textRepContra', 10000);
//             showError(repeat_password)

//             isValid = false;
//         } else if (repeat_password.value !== password.value) {
//             mostrarParrafoError('corner-textContra', 10000);
//             showError(repeat_password)

//             isValid = false;
//         }

//         if (area_trabajo.value === '') {
//             mostrarParrafoError('corner-textAt', 10000);
//             showError(area_trabajo)
//             isValid = false;
//         }

//         if (departamento.value === '') {
//             mostrarParrafoError('corner-textDep', 10000);
//             showError(departamento)
//             isValid = false;
//         }

//         if (isValid) {
//             form.submit();
//         }
//     });

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
//             showError(email);
//             isValid = false;
//         } else {
//             const emailValidationResult = validateEmail(emailLog.value);
//             if (emailValidationResult !== "Correo electrónico válido.") {
//                 mostrarParrafoError('corner-nombEmaillog', 10000);
//                 showError(emailLog);
//                 isValid = false;
//             } else {
//                 showSuccess(emailLog);
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
//                 mostrarParrafoError('corner-passwUserLog', 10000);
//                 showError(passwordLog);
//                 isValid = false;
//             } else {
//                 showSuccess(passwordLog);
//             }
//         }

//         if (isValid) {
//             // Aquí puedes agregar la lógica para validar las credenciales del usuario
//             // Si las credenciales son inválidas, muestra el error correspondiente
//             showError(errorMessages.invalidCredentials);
//         } else {
//             hideError(errorMessages.invalidCredentials);
//         }

//     });

//     function showError(errorElement) {
//         errorElement.style.display = 'block';
//     }

//     function hideError(errorElement) {
//         errorElement.style.display = 'none';
//     }
// });



function validateForm() {
    var form = document.querySelector('form.user');
    var emailLog = form.querySelector('#InputEmailLog');
    var passwordLog = form.querySelector('#InputPasswordLog');

    var isValid = true;

    if (emailLog.value.trim() === '') {
        mostrarParrafoError('corner-textEmailVacio', 10000);
        showError(emailLog);
        isValid = false;
    } else {
        const emailValidationResult = validateEmail(emailLog.value);
        if (emailValidationResult !== "Correo electrónico válido.") {
            mostrarParrafoError('corner-nombEmaillog', 10000);
            showError(emailLog);
            isValid = false;
        } else {
            // showSuccess(emailLog);
        }
    }

    // Validar la contraseña
    if (passwordLog.value.trim() === '') {
        mostrarParrafoError('corner-passwUserLog', 10000);
        showError(passwordLog);
        isValid = false;
    } else {
        // Validar la contraseña según los requisitos
        const passwordValidationResult = validatePassword(passwordLog.value);
        if (passwordValidationResult !== "Contraseña válida.") {
            mostrarParrafoError('corner-passwUserLog', 10000);
            showError(passwordLog);
            isValid = false;
        } else {
            // showSuccess(passwordLog);
        }
    }

    if (isValid) {
        // Aquí puedes agregar la lógica para validar las credenciales del usuario
        // Si las credenciales son inválidas, muestra el error correspondiente
        showError(errorMessages.invalidCredentials);
    } else {
        hideError(errorMessages.invalidCredentials);
    }

    return isValid;
}

function showError(errorElement) {
    errorElement.style.display = 'block';
}

function hideError(errorElement) {
    errorElement.style.display = 'none';
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



////////////////////////////////////////////////// Flecha del sidenav bar /////////////////////////////////////
var collapseElement = document.getElementById('collapseComponents')
var collapseInstance = new bootstrap.Collapse(collapseElement, false)

// Evento cuando el contenido se muestra
collapseElement.addEventListener('shown.bs.collapse', function () {
    // Cambiar la flecha hacia abajo
    document.querySelector('.collapse-arrow').classList.add('rotate-90')
})

// Evento cuando el contenido se oculta
collapseElement.addEventListener('hidden.bs.collapse', function () {
    // Restaurar la flecha a su forma original
    document.querySelector('.collapse-arrow').classList.remove('rotate-90')
})





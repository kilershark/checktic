// Patrones 
// Área INFORMACIÓN
// •	La elaboración de estrategias de búsqueda (1.1) está estrechamente relacionada con el acceso, búsqueda y recuperación de información en redes, bases de datos, buscadores, repositorios, etc. (1.2). Ambos elementos se centran en la capacidad de encontrar y acceder a la información relevante de manera eficiente.
// •	La evaluación crítica de la calidad y confiabilidad de la información recuperada (1.3) es fundamental para garantizar la validez y precisión de los recursos utilizados. Este elemento se relaciona con la capacidad de sintetizar y organizar la información de manera coherente y comprensible (1.9).
// •	El almacenamiento y la retroalimentación de la información (1.4) están vinculados a la aplicación de técnicas de citación de las fuentes recuperadas (1.5). Ambos elementos se centran en la gestión adecuada de la información, incluyendo su almacenamiento, uso ético y la atribución correcta de las fuentes utilizadas.
// •	El manejo de traductores y diccionarios electrónicos (1.6) está relacionado con la elaboración e impartición de programas de alfabetización informacional (1.8). Ambos elementos se enfocan en la capacidad de comprender y utilizar eficazmente diferentes herramientas y recursos para la traducción y comprensión de la información.
// •	La indexación y asignación de metadatos (1.7) facilita la recuperación y organización de la información, ya que permite etiquetar y categorizar los recursos de manera efectiva.

// Área COMUNICACIÓN Y COLABORACIÓN DIGITAL
// •	La interacción a través de las redes sociales académicas (2.1) se relaciona con el compartir información y contenidos en las redes (2.2), así como la participación en comunidades de práctica virtuales sobre Ciencias de la Información (2.3). Estos elementos se centran en la colaboración y el intercambio de conocimientos y recursos en entornos digitales.
// •	La confección de presentaciones (2.4) está relacionada con la creación de páginas web (2.6) y la participación e interacción en eventos virtuales (2.5). Estos elementos se enfocan en la habilidad de comunicar ideas y presentar información de manera efectiva a través de diferentes plataformas y formatos digitales.
// •	La compartición de información a través del correo electrónico y de dispositivos móviles (2.7) se relaciona con la comunicación y colaboración digital en general. Este elemento abarca el uso de herramientas de comunicación y dispositivos móviles para compartir información de manera rápida y eficiente.

// Área EQUIPAMIENTO
// •	El conocimiento de los componentes del ordenador y sus periféricos (3.1) está relacionado con el conocimiento del equipamiento e infraestructuras básicas de comunicaciones y redes (3.2). Ambos elementos se centran en comprender y utilizar adecuadamente el hardware necesario para el funcionamiento de los sistemas informáticos, así como las redes de comunicación necesarias para la conectividad.
// Área SOFTWARE O PROGRAMAS
// •	El conocimiento de paquetes ofimáticos, navegadores, aplicaciones de correo electrónico (4.1) se relaciona con la instalación y actualización de aplicaciones (4.2). Ambos elementos se enfocan en la capacidad de utilizar y mantener actualizados los diferentes programas y aplicaciones informáticas utilizadas en entornos profesionales y personales.

// Área SEGURIDAD
// •	Comprender y aplicar prácticas de seguridad digital (5.1) se relaciona con la protección de la privacidad personal y de otros al utilizar servicios en línea (5.2). Ambos elementos se centran en garantizar la seguridad y confidencialidad de la información personal y los datos digitales.
// •	Reconocer y evitar el phishing, el malware y otras amenazas digitales (5.3) se relaciona con el uso de herramientas y medidas de seguridad para proteger la información y los datos digitales (5.4). Estos elementos se centran en la identificación y prevención de posibles amenazas y ataques cibernéticos, así como en la implementación de medidas de seguridad adecuadas.
// Área SOLUCIÓN DE PROBLEMAS
// •	Aplicar métodos y técnicas para resolver problemas técnicos y de información (6.1) se relaciona con la identificación y análisis de problemas relacionados con el uso de la información y la tecnología digital (6.2). Estos elementos se centran en la capacidad de reconocer y abordar eficazmente los desafíos y obstáculos que pueden surgir en el ámbito digital.
// •	Innovar creativamente utilizando tecnologías (6.3) se relaciona con la identificación de limitaciones propias de competencias digitales (6.4). Estos elementos se enfocan en la capacidad de pensar de manera creativa y encontrar soluciones innovadoras utilizando tecnologías, al tiempo que se reconoce y se trabaja en el desarrollo de competencias digitales para superar las limitaciones existentes.


var modalResultado1_1 = document.getElementById("modalResultado1");
var modalResultado2_2 = document.getElementById("modalResultado2");

document.addEventListener('DOMContentLoaded', function () {
    // Obtener el botón "Finalizar"
    var btnFinalizar = document.getElementById('btn-finalizar');

    // Obtener el modal
    var modal = document.getElementById('GreatModal');

    // Agregar el evento de clic al botón "Finalizar"
    document.addEventListener('DOMContentLoaded', function () {
        btnFinalizar.addEventListener('click', function () {
            // Mostrar el modal
            modal.style.display = 'block';
        });
    });

    // Agregar evento de clic al botón "OK" dentro del modal
    var btnOk = modal.querySelector('.btn-success');
    btnOk.addEventListener('click', function () {
        // Redirigir al usuario a la pantalla de inicio
        window.location.href = '/';
    });

    // Agregar evento de clic fuera del modal para evitar que se cierre
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});




// document.getElementById('btn-finalizar').addEventListener('click', function () {
//     var modal = document.getElementById('modalResultado2');
//     modal.style.display = 'block';


//     // Cierra el modal después de 3 segundos (3000 milisegundos)
//     setTimeout(function () {
//         modal.style.display = 'none';
//     }, 3000);
// });

function closeModal() {
    $('#alert').modal('hidden')
}

var form = document.getElementById('formData');
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let isValidForm = form.checkValidity();
    console.log(isValidForm)

    // $('.form-check-input:checked').each(
    //     function () {
    //         let invP3 = $('input[name="p3.1"]:checked').val();
    //         let invP4 = $('input[name="p4.1"]:checked').val();

    //         // if (invP3 == 0 || invP4 == 0) {

    //         //     $('#modalResultado2').modal('show')
    //         //     $('#modalResultado1').modal('hidden')
    //         // } else {


    //         resultadoSpan1.textContent = P1();
    //         resultadoSpan2.textContent = P2();
    //         resultadoSpan3.textContent = P3();
    //         resultadoSpan4.textContent = P4();
    //         resultadoSpan5.textContent = P5();
    //         resultadoSpan6.textContent = P6();

    //         $('#modalResultado1').modal('show')
    //         $('#modalResultado2').modal('hidden')

    //     }

    //     //}
    // );
    // $('.form-check-input:not(:checked)').each(
    //     function () {
    //         $('#modalResultado1').modal('show')
    //     }
    // );

    var resultados = {
        resultado1: P1(),
        resultado2: P2(),
        resultado3: P3(),
        resultado4: P4(),
        resultado5: P5(),
        resultado6: P6(),
        porcentGeneral: porcentGeneral()
    };

    // Enviar los resultados al servidor usando AJAX
    $.ajax({
        type: 'POST',
        url: '/guardar_resultados/',
        data: resultados,
        success: function (response) {
            console.log('Resultados guardados exitosamente en la base de datos');
        },
        error: function (error) {
            console.error('Error al guardar los resultados en la base de datos');
        }
    });


    function P1() {
        let marcados12 = 0;
        let marcados13 = 0;
        let marcados15 = 0;
        let marcados16 = 0;
        let marcados18 = 0;
        let marcados19 = 0;
        var evaluacionP1 = "";


        function P11() {
            let marcadossi11 = 0;
            let marcadosno11 = 0;

            for (let i = 1; i < 4; i++) {
                const radioGroup11 = document.getElementsByName(`p1.1.${i}`);
                let checkedRadio11 = Array.from(radioGroup11).find((radio) => radio.checked);
                if (checkedRadio11.value == 1) marcadossi11++;
                if (checkedRadio11.value == 0) marcadosno11++;
            }
            if (marcadossi11 > marcadosno11) return 1;
            else return 0;

        }
        console.log(P11())


        function P12() {
            radioGroup12 = document.getElementsByName(`p1.2`);
            let checkedRadio12 = Array.from(radioGroup12).find((radio) => radio.checked);
            if (checkedRadio12.value == 1) marcados12++;


            return marcados12;
        }
        console.log(P12())

        function P13() {
            radioGroup13 = document.getElementsByName(`p1.3`);
            let checkedRadio13 = Array.from(radioGroup13).find((radio) => radio.checked);
            if (checkedRadio13.value == 1) marcados13++;


            return marcados13;

        }
        console.log(P13())



        function P14() {
            let marcadossi14 = 0;
            let marcadosno14 = 0;
            for (let j = 1; j < 4; j++) {
                const radioGroup14 = document.getElementsByName(`p1.4.${j}`);
                let checkedRadio14 = Array.from(radioGroup14).find((radio) => radio.checked);
                if (checkedRadio14.value == 1) marcadossi14++;
                if (checkedRadio14.value == 0) marcadosno14++;
            }
            if (marcadossi14 > marcadosno14) return 1;
            else return 0;
        }
        console.log(P14())


        function P15() {

            radioGroup15 = document.getElementsByName(`p1.5`);
            let checkedRadio15 = Array.from(radioGroup15).find((radio) => radio.checked);
            if (checkedRadio15.value == 1) marcados15++;
            return marcados15;
        }
        console.log(P15())

        function P16() {
            radioGroup16 = document.getElementsByName(`p1.6`);
            let checkedRadio16 = Array.from(radioGroup16).find((radio) => radio.checked);
            if (checkedRadio16.value == 1) marcados16++;

            return marcados16;
        }
        console.log(P16())


        function P17() {
            let marcadossi17 = 0;
            let marcadosno17 = 0;

            for (let k = 1; k < 4; k++) {
                const radioGroup17 = document.getElementsByName(`p1.7.${k}`);
                let checkedRadio17 = Array.from(radioGroup17).find((radio) => radio.checked);
                if (checkedRadio17.value == 1) marcadossi17++;
                if (checkedRadio17.value == 0) marcadosno17++;
            }
            if (marcadossi17 > marcadosno17) return 1;
            else return 0;

        }
        console.log(P17())


        function P18() {
            radioGroup18 = document.getElementsByName(`p1.8`);
            let checkedRadio18 = Array.from(radioGroup18).find((radio) => radio.checked);
            if (checkedRadio18.value == 1) marcados18++;
            return marcados18;
        }
        console.log(P18())


        function P19() {
            radioGroup19 = document.getElementsByName(`p1.9`);
            let checkedRadio19 = Array.from(radioGroup19).find((radio) => radio.checked);
            if (checkedRadio19.value == 1) marcados19++;

            return marcados19;
        }
        console.log(P19())




        final = P11() + P12() + ((P13() + P19()) / 2) + ((P14() + P15()) / 2) + ((P16() + P18()) / 2) + P17();
        console.log(final)
        // var percent = (final * 100) / 9
        var percent = Math.round((final * 100) / 9);
        console.log(percent)

        console.log(evaluacionP1)

        return (Math.round(percent));
    }

    console.log(P1())







    function P2() {

        function P21() {
            let marcadossi21 = 0;
            let marcadosno21 = 0;
            for (let h = 1; h < 4; h++) {
                const radioGroup21 = document.getElementsByName(`p2.1.${h}`);
                let checkedRadio21 = Array.from(radioGroup21).find((radio) => radio.checked);
                if (checkedRadio21.value == 1) marcadossi21++;
                if (checkedRadio21.value == 0) marcadosno21++;
            }
            if (marcadossi21 > marcadosno21) return 1;
            else return 0;
        }
        console.log(P21())

        function P22() {
            let marcadossi22 = 0;

            let marcadosno22 = 0;
            for (let m = 1; m < 6; m++) {
                const radioGroup22 = document.getElementsByName(`p2.2.${m}`);
                let checkedRadio22 = Array.from(radioGroup22).find((radio) => radio.checked);
                console.log(checkedRadio22)
                if (checkedRadio22.value == 1) marcadossi22++;
                console.log(marcadossi22)
                if (checkedRadio22.value == 0) marcadosno22++;
                console.log(marcadosno22)
            }
            if (marcadossi22 > marcadosno22) return 1;
            else return 0;
        }
        console.log(P22())

        function P23() {
            radioGroup23 = document.getElementsByName(`p2.3`);
            let checkedRadio23 = Array.from(radioGroup23).find((radio) => radio.checked);
            if (checkedRadio23.value == 1) return 1;
            else return 0;
        }
        console.log(P23())


        function P24() {
            radioGroup24 = document.getElementsByName(`p2.4`);
            let checkedRadio24 = Array.from(radioGroup24).find((radio) => radio.checked);
            if (checkedRadio24.value == 1) return 1
            else return 0;

        }
        console.log(P24())

        function P25() {
            let marcadossi25 = 0;
            let marcadosno25 = 0;
            for (let n = 1; n < 4; n++) {
                const radioGroup25 = document.getElementsByName(`p2.5.${n}`);
                let checkedRadio25 = Array.from(radioGroup25).find((radio) => radio.checked);
                if (checkedRadio25.value == 1) marcadossi25++;
                if (checkedRadio25.value == 0) marcadosno25++;
            }
            if (marcadossi25 > marcadosno25) return 1;
            else return 0;
        }
        console.log(P25())

        function P26() {
            let marcadossi26 = 0;
            let marcadosno26 = 0;
            for (let o = 1; o < 6; o++) {
                const radioGroup26 = document.getElementsByName(`p2.6.${o}`);
                let checkedRadio26 = Array.from(radioGroup26).find((radio) => radio.checked);
                if (checkedRadio26.value == 1) marcadossi26++;
                if (checkedRadio26.value == 0) marcadosno26++;
            }
            if (marcadossi26 > marcadosno26) return 1;
            else return 0;
        }
        console.log(P26())

        function P27() {
            radioGroup27 = document.getElementsByName(`p2.7`);
            let checkedRadio27 = Array.from(radioGroup27).find((radio) => radio.checked);
            if (checkedRadio27.value == 1) return 1
            else return 0;
        }
        console.log(P27())

        function P28() {
            radioGroup28 = document.getElementsByName(`p2.8`);
            let checkedRadio28 = Array.from(radioGroup28).find((radio) => radio.checked);
            if (checkedRadio28.value == 1) return 1;
            else return 0;
        }
        console.log(P28())



        let total2 = ((P21() + P22() + P23()) / 3) + ((P24() + P25() + P26()) / 3) + P27() + P28();
        var percent2 = Math.round((total2 * 100) / 8)

        console.log(total2)
        console.log(percent2)

        return Math.round(percent2);
    }
    console.log(P2())



    function P3() {

        var total3 = 0;
        let evaluacionP3 = "";

        function P31() {
            radioGroup3_1 = document.getElementsByName(`p3.1`);
            let checkedRadio3_1 = Array.from(radioGroup3_1).find((radio) => radio.checked);
            if (checkedRadio3_1.value == 1) return 1;
            else return 0;
        }


        function P32() {
            radioGroup32 = document.getElementsByName(`p3.2`);
            let checkedRadio32 = Array.from(radioGroup32).find((radio) => radio.checked);
            if (checkedRadio32.value == 1) return 1;
            else return 0;
        }

        function P33() {
            radioGroup33 = document.getElementsByName(`p3.3`);
            let checkedRadio33 = Array.from(radioGroup33).find((radio) => radio.checked);
            if (checkedRadio33.value == 1) return 1;
            else return 0;
        }

        function P34() {
            radioGroup34 = document.getElementsByName(`p3.4`);
            let checkedRadio34 = Array.from(radioGroup34).find((radio) => radio.checked);
            if (checkedRadio34.value == 1) return 1;
            else return 0;
        }

        function P35() {
            radioGroup35 = document.getElementsByName(`p3.5`);
            let checkedRadio35 = Array.from(radioGroup35).find((radio) => radio.checked);
            if (checkedRadio35.value == 1) return 1;
            else return 0;
        }

        function P36() {
            radioGroup36 = document.getElementsByName(`p3.6`);
            let checkedRadio36 = Array.from(radioGroup36).find((radio) => radio.checked);
            if (checkedRadio36.value == 1) return 1;
            else return 0;
        }

        function P37() {
            radioGroup37 = document.getElementsByName(`p3.7`);
            let checkedRadio37 = Array.from(radioGroup37).find((radio) => radio.checked);
            if (checkedRadio37.value == 1) return 1;
            else return 0;
        }

        total3 = ((P31() + P32() + P33() + P34()) / 4) + ((P35() + P36() + P37()) / 3);
        const percent3 = (total3 * 100) / 7

        console.log(percent3)
        console.log(evaluacionP3)


        return Math.round(percent3);
    }
    console.log(P3())


    function P4() {

        let evaluacionP4 = "";

        function P41() {
            let marcadossi4_1 = 0;
            let marcadosno4_1 = 0;
            for (let p = 1; p < 4; p++) {
                const radioGroup4_1 = document.getElementsByName(`p4.1.${p}`);
                let checkedRadio4_1 = Array.from(radioGroup4_1).find((radio) => radio.checked);
                if (checkedRadio4_1.value == 1) marcadossi4_1++;
                if (checkedRadio4_1.value == 0) marcadosno4_1++;
            }
            if (marcadossi4_1 > marcadosno4_1) return 1;
            else return 0;
        }
        console.log(P41())

        function P42() {
            let marcadossi4_2 = 0;
            let marcadosno4_2 = 0;
            for (let r = 1; r < 4; r++) {
                const radioGroup4_2 = document.getElementsByName(`p4.2.${r}`);
                let checkedRadio4_2 = Array.from(radioGroup4_2).find((radio) => radio.checked);
                if (checkedRadio4_2.value == 1) marcadossi4_2++;
                if (checkedRadio4_2.value == 0) marcadosno4_2++;
            }
            if (marcadossi4_2 > marcadosno4_2) return 1;
            else return 0;

        }
        console.log(P42())


        total4 = P41() + P42();
        var percent4 = (total4 * 100) / 2

        console.log(percent4)
        console.log(evaluacionP4)
        return percent4;
    }



    function P5() {

        let evaluacionP5 = "";

        function P51() {
            radioGroup5_1 = document.getElementsByName(`p5.1`);
            let checkedRadio5_1 = Array.from(radioGroup5_1).find((radio) => radio.checked);
            if (checkedRadio5_1.value == 1) return 1;
            else return 0
        }
        console.log(P51())

        function P52() {
            radioGroup5_2 = document.getElementsByName(`p5.2`);
            let checkedRadio5_2 = Array.from(radioGroup5_2).find((radio) => radio.checked);
            if (checkedRadio5_2.value == 1) return 1;
            else return 0;
        }
        console.log(P52())


        function P53() {
            radioGroup5_3 = document.getElementsByName(`p5.3`);
            let checkedRadio5_3 = Array.from(radioGroup5_3).find((radio) => radio.checked);
            if (checkedRadio5_3.value == 1) return 1;
            else return 0;
        }
        console.log(P53)

        function P54() {
            radioGroup5_4 = document.getElementsByName(`p5.4`);
            let checkedRadio5_4 = Array.from(radioGroup5_4).find((radio) => radio.checked);
            if (checkedRadio5_4.value == 1) return 1;
            else return 0
        }
        console.log(P54())

        function P55() {
            radioGroup5_5 = document.getElementsByName(`p5.5`);
            let checkedRadio5_5 = Array.from(radioGroup5_5).find((radio) => radio.checked);
            if (checkedRadio5_5.value == 1) return 1;
            else return 0
        }
        console.log(P55())

        function P56() {
            radioGroup5_6 = document.getElementsByName(`p5.6`);
            let checkedRadio5_6 = Array.from(radioGroup5_6).find((radio) => radio.checked);
            if (checkedRadio5_6.value == 1) return 1;
            else return 0
        }
        console.log(P56())


        var total5 = ((P51() + P52()) / 2) + ((P53() + P54()) / 2) + P55() + P56();
        var percent5 = (total5 * 100) / 6

        console.log(percent5)
        console.log(evaluacionP5)

        return Math.round(percent5);
    }
    console.log(P5())




    function P6() {
        var total6 = 0;
        var marcados6162 = 0;
        var marcados6364 = 0;
        let evaluacionP6 = "";

        function P61() {
            radioGroup6_1 = document.getElementsByName(`p6.1`);
            let checkedRadio6_1 = Array.from(radioGroup6_1).find((radio) => radio.checked);
            if (checkedRadio6_1.value == 1) return 1;
            else return 0;
        }
        console.log(P61())

        function P62() {
            radioGroup6_2 = document.getElementsByName(`p6.2`);
            let checkedRadio6_2 = Array.from(radioGroup6_2).find((radio) => radio.checked);
            if (checkedRadio6_2.value == 1) return 1;
            return 0;
        }

        function P63() {
            radioGroup6_3 = document.getElementsByName(`p6.3`);
            let checkedRadio6_3 = Array.from(radioGroup6_3).find((radio) => radio.checked);
            if (checkedRadio6_3.value == 1) return 1;
            else return 0;
        }
        console.log(P63())

        function P64() {
            radioGroup6_4 = document.getElementsByName(`p6.4`);
            let checkedRadio6_4 = Array.from(radioGroup6_4).find((radio) => radio.checked);
            if (checkedRadio6_4.value == 1) return 1;
            else return 0;
        }
        console.log(P64())

        function P65() {
            radioGroup6_5 = document.getElementsByName(`p6.5`);
            let checkedRadio6_5 = Array.from(radioGroup6_5).find((radio) => radio.checked);
            if (checkedRadio6_5.value == 1) return 1;
            else return 0;
        }
        console.log(P65())

        function P66() {
            radioGroup6_6 = document.getElementsByName(`p6.6`);
            let checkedRadio6_6 = Array.from(radioGroup6_6).find((radio) => radio.checked);
            if (checkedRadio6_6.value == 1) return 1;
            else return 0;
        }
        console.log(P66())

        function P67() {
            radioGroup6_7 = document.getElementsByName(`p6.7`);
            let checkedRadio6_7 = Array.from(radioGroup6_7).find((radio) => radio.checked);
            if (checkedRadio6_7.value == 1) return 1;
            else return 0;
        }
        console.log(P67())

        function P68() {
            radioGroup6_8 = document.getElementsByName(`p6.8`);
            let checkedRadio6_8 = Array.from(radioGroup6_8).find((radio) => radio.checked);
            if (checkedRadio6_8.value == 1) return 1;
            else return 0;
        }
        console.log(P68())


        total6 = ((P61() + P62() + P63() + P64()) / 4) + ((P65() + P66() + P67() + P68()) / 4)
        var percent6 = (total6 * 100) / 8

        console.log(percent6)
        console.log(evaluacionP6)
        return Math.round(percent6);
    }
    console.log(P6())


    function porcentGeneral() {
        var porcentGeneral = (P1() + P2() + P3() + P5() + P6()) / 6

        return Math.round(porcentGeneral);
    }
    console.log(porcentGeneral())
})



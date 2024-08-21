

// $(document).ready(function () {
//     $('#submit').on('click', function(e) {
//       e.preventDefault();
//       $('#exampleModalToggle').modal('show');
//     });
    
// });
var modalResultado1_1 = document.getElementById("modalResultado1");
var modalResultado2_2 = document.getElementById("modalResultado2");

let resultadoSpan1 = document.getElementById("infor");
let resultadoSpan2 = document.getElementById("comun_cola");
let resultadoSpan3 = document.getElementById("equip");
let resultadoSpan4 = document.getElementById("soft_Prog");
let resultadoSpan5 = document.getElementById("segur");
let resultadoSpan6 = document.getElementById("solu_Prob");

function closeModal(){
    $('#alert').modal('hidden')
}

var form = document.getElementById('formData');
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let isValidForm = form.checkValidity();
    console.log(isValidForm)

    $('.form-check-input:checked').each(
        function()
        {
            let invP3 = $('input[name="p3.1"]:checked').val();
            let invP4 = $('input[name="p4.1"]:checked').val();

            if (invP3 ==0 || invP4==0) {
     
                $('#modalResultado2').modal('show')
                $('#modalResultado1').modal('hidden')
            } else {
            
            
            resultadoSpan1.textContent = Preg1();
            resultadoSpan2.textContent = Preg2();
            resultadoSpan3.textContent = Preg3();
            resultadoSpan4.textContent = Preg4();
            resultadoSpan5.textContent = Preg5();
            resultadoSpan6.textContent = Preg6();
           
            $('#modalResultado1').modal('show')
            $('#modalResultado2').modal('hidden')
        
        }  
        
        }
    );
    $('.form-check-input:not(:checked)').each(
        function()
        {
            $('#modalResultado1').modal('show')
        }
    );




function Preg1(){
    let totalP1 = 0;
    let evaluacionP1 = "";
    for (let i = 1; i < 5; i++) {
        const radioGroup = document.getElementsByName(`p1.1.${i}`);
        let checkedRadio = Array.from(radioGroup).find((radio) => radio.checked);
        totalP1 = totalP1 + (checkedRadio.value | 0)
    }
    
    let total = totalP1 > 2 ? 1 : 0;
    for (let i = 2; i < 9; i++) {
        const radioGroup = document.getElementsByName(`p1.${i}`);
        let checkedRadio = Array.from(radioGroup).find((radio) => radio.checked);
        total = total + (checkedRadio.value | 0)
    }
    
    
    const percent = (total/8)*100 
    if(percent<25) { evaluacionP1  = "Mal"}
    if(percent >= 25 && percent < 50) { evaluacionP1 = "Regular"}
    if(percent>=50) { evaluacionP1 = "Bien"}
    

    return evaluacionP1;
}

function Preg2(){
    let totalP2 = 0;
    let evaluacionP2 = "";

    for (let i = 1; i < 2; i++) {
        const radioGroup = document.getElementsByName(`p2.5.${i}`);
        let checkedRadio = Array.from(radioGroup).find((radio) => radio.checked);
        totalP2 = totalP2 + (checkedRadio.value | 0)
    }
    
    let total2 = totalP2 > 2 ? 1 : 0;
    for (let i = 2; i < 8; i++) {
        if(i!=5){
        const radioGroup = document.getElementsByName(`p2.${i}`);
        let checkedRadio = Array.from(radioGroup).find((radio) => radio.checked);
        total2 = total2 + (checkedRadio.value | 0)
    }
    
    
    const percent2 = (total2/6)*100 
    if(percent2<25) { evaluacionP2  = "Mal"}
    if(percent2 >= 25 && percent2 < 50) { evaluacionP2  = "Regular"}
    if(percent2>=50) { evaluacionP2  = "Bien"}

    return evaluacionP2;
}}    
 

function Preg3(){
    let total3 = 0;  
    let evaluacionP3 = "";
    

    for (let i = 1; i < 3; i++) {
        const radioGroup = document.getElementsByName(`p3.${i}`);
        let checkedRadio = Array.from(radioGroup).find((radio) => radio.checked);
        total3 = total3 + (checkedRadio.value | 0)
    }
    
    const percent3 = (total3/3)*100 
    if(percent3<25) { evaluacionP3  = "Mal"}
    if(percent3 >= 25 && percent3 < 50) { evaluacionP3 = "Regular"}
    if(percent3>=50) { evaluacionP3  = "Bien"}

    return evaluacionP3;
    }
  
function Preg4(){
    let total4 = 0;
    let evaluacionP4 = "";

    for (let i = 1; i < 3; i++) {
        const radioGroup = document.getElementsByName(`p4.${i}`);
        let checkedRadio = Array.from(radioGroup).find((radio) => radio.checked);
        total4 = total4 + (checkedRadio.value | 0)
    }
    
    const percent4 = (total4/2)*100 
    if(percent4<25) { evaluacionP4  = "Mal"}
    if(percent4 >= 25 && percent4 < 50) { evaluacionP4  = "Regular"}
    if(percent4>=50) { evaluacionP4 = "Bien"}

    return evaluacionP4;
    }
  
function Preg5(){
    let total5 =  0;
    let evaluacionP5 = "";
    
    for (let i = 1; i < 2; i++) {
        const radioGroup = document.getElementsByName(`p5.${i}`);
        let checkedRadio = Array.from(radioGroup).find((radio) => radio.checked);
        total5 = total5 + (checkedRadio.value | 0)
    }
    
    const percent5 = total5*100 
    if(percent5 < 25) { evaluacionP5  = "Mal"}
    if(percent5 >= 25 && percent5 < 50){ evaluacionP5  = "Regular"} 
    if(percent5 >= 50) { evaluacionP5  = "Bien"}

    return evaluacionP5;
    }



    function Preg6(){
        let total6 =  0;
        let evaluacionP6 = "";

        for (let i = 1; i < 4; i++) {
            const radioGroup = document.getElementsByName(`p6.${i}`);
            let checkedRadio = Array.from(radioGroup).find((radio) => radio.checked);
            total6 = total6 + (checkedRadio.value | 0)
        }
        
        const percent6 = (total6/4)*100 
        if(percent6 < 25) { evaluacionP6  = "Mal"}
        if(percent6 >=  25 && percent6 < 50) { evaluacionP6  = "Regular"}
        if(percent6 >= 50) { evaluacionP6  = "Bien"}

        return evaluacionP6;
        }

    })


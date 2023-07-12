
const boton=document.querySelector('[data-botom]');
const imprimir=document.querySelector('[data-bot]');
const no=document.querySelector('[data-n]');  
let email=document.querySelector('[data-e]');
const asunto=document.querySelector('[data-a]'); 
let me=document.querySelector('[data-m]'); 
const me1=document.querySelector('[data-m1]'); 
const me2=document.querySelector('[data-m2]');
const me3=document.querySelector('[data-f]');
const me4=document.querySelector('[data-j]');

let contador=0;
let arroba=0;
let punto=0;
 ve=[no,email,asunto,me3];
let vec=[me,me1,me2,me4];

const validar=()=>{
    for(var i=0;i<ve.length;i++){
        if(ve[i].value==""){
            ve[i].style.border='1px solid red';
            vec[i].style.display='block';
            
            vec[i].innerHTML="*Campo no puede ser Vacio";
            contador++;
        
        }
    }


    for(var p=0;p<email.value.length;p++){
        


        if(ve[1].value.charAt(p)=='@' ){
           arroba++;

        }else{

            if(ve[1].value.charAt(p)=='.'){
               
               punto++;

            }


        }}

        if(arroba==0){
            ve[1].style.border='1px solid red';
            vec[1].style.display='block';
           
            vec[1].innerHTML="*Campo debe Llevar un @";
            contador++;
           


    }else{

        if(punto==0){
            ve[1].style.border='1px solid red';
                vec[1].style.display='block';
                
                vec[1].innerHTML="*Campo debe Llevar al menos un .";
                contador++;

        }   
    }

    
    arroba=0;
    punto=0;


    if(contador==0){
      
        
        alert("Señor(a): "+ve[0].value+", ¡Su mensaje fué enviado Exitosamente!");
        for(var j=0; j<ve.length;j++){

          ve[j].value = "";
        }


    }



}


const color=()=>{
no.style.border='1px solid black'
contador=0;
vec[0].style.display='none';
}
const color1=()=>{
    email.style.border='1px solid black'
    contador=0;
    vec[1].style.display='none';
   
    
    }
    const color2=()=>{
        asunto.style.border='1px solid black'
        contador=0;
        vec[2].style.display='none';
        }

        const color3=()=>{
            me3.style.border='1px solid black'
            contador=0;
            vec[3].style.display='none';
            }

const impri=()=>{

    window.print();
}


boton.addEventListener('click',validar);
no.addEventListener('click',color);
email.addEventListener('click',color1);
asunto.addEventListener('click',color2);
me3.addEventListener('click',color3);
imprimir.addEventListener('click',impri);

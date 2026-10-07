let ModoClaro = document.getElementById("ModoClaro")
let sol = document.getElementById("sol")


ModoClaro.addEventListener("click", function(){

    document.body.classList.toggle("claro");
    sol.classList.toggle("claro")

})


// Botão Inicio
let btn6 = document.getElementById("btn6");
let verProjetos = document.getElementById("Projetos");

btn6.addEventListener('click', ()=>{
    
    verProjetos.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });

});

// Botão Inicio
let btn1 = document.getElementById("btn1");
let inicio = document.getElementById("Inicio");

btn1.addEventListener('click', ()=>{
    
    inicio.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });

});


// botão Sobre
let btn2 = document.getElementById("btn2");
let sobre = document.getElementById("Sobre");

btn2.addEventListener('click', ()=>{
    
    sobre.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });

});

// botão Habilidades
let btn3 = document.getElementById("btn3");
let habilidades = document.getElementById("Habilidades");

btn3.addEventListener('click', ()=>{
    
    habilidades.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });

});


// botão Projetos
let btn4 = document.getElementById("btn4");
let projetos = document.getElementById("Projetos");

btn4.addEventListener('click', ()=>{
    
    projetos.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });

});


// botão Contato
let btn5 = document.getElementById("btn5");
let contato = document.getElementById("Contato");

btn5.addEventListener('click', ()=>{
    
    contato.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });

});


function mascara_telefone ()
        {
           //limitador
         var tel = document.getElementById("telefone").value
            console.log(tel)
          tel=tel.slice(0,14) //(pode limitar a quantidade de char na entrada pelo java script)
            console.log(tel)
          document.getElementById("telefone").value=tel
     tel=document.getElementById("telefone").value.slice(0,10)
            console.log(tel)
           
            //máscara
            var tel_formatado = document.getElementById("telefone").value
            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("telefone").value="("+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[9]!="-")
            {
                if(tel_formatado[9]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
        }





        document.getElementById('meuFormulario').addEventListener('submit', function(event) {
            const inputEmail = document.getElementById('email');
            
            // Verifica se o valor termina com @gmail.com
            if (!inputEmail.value.endsWith('@gmail.com')) {
              event.preventDefault(); // Impede o envio do formulário
              alert('Erro: É necessário utilizar um e-mail do Gmail (@gmail.com).');
              inputEmail.focus();
            }
          });





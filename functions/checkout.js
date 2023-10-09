


// =================================== FUNCOES =============================================== //


// funcao para adicionar evento para controlar as cores
function adicionarEvento() {
    const compStepper = document.getElementById('compStepper');
    const comStepperLi = compStepper.querySelectorAll('li');

    comStepperLi.forEach((element) => {
        const comStepperDiv = element.querySelector('div');
        const comStepperSvg = comStepperDiv.querySelector('svg');

        // Adicionar evento de clique para controlar cores
        comStepperDiv.addEventListener('click',  (event) => {

            let passei = false

            comStepperLi.forEach((elem) => {
                const div = elem.querySelector('div');
                const svg = div.querySelector('svg');

                if(!passei){

                    elem.classList.remove('after:border-white');
                    div.classList.remove('bg-white');
                    svg.classList.remove('text-teal-600');
    
                    elem.classList.add('after:border-teal-500');
                    div.classList.add('bg-teal-500');
                    svg.classList.add('text-white');

                }

                if(passei){

                    elem.classList.add('after:border-white');
                    div.classList.add('bg-white');
                    svg.classList.add('text-teal-600');
    
                    elem.classList.remove('after:border-teal-500');
                    div.classList.remove('bg-teal-500');
                    svg.classList.remove('text-white');

                }

                
                if (div == comStepperDiv) {


                    elem.classList.add('after:border-white');
                    div.classList.remove('bg-white');
                    svg.classList.remove('text-teal-600');

                    elem.classList.remove('after:border-teal-500');
                    div.classList.add('bg-teal-500');
                    svg.classList.add('text-white');

                    passei = true

                }

                

                
            });
        });

    });
}





// =================================== EXECUTAR =============================================== //

//controlear cores

adicionarEvento()
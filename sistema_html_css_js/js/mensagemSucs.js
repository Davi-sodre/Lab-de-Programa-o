

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões com a classe 'agendar-btn'
    const agendarButtons = document.querySelectorAll('.agendar-btn');
    // Seleciona o elemento da mensagem de sucesso
    const successMessage = document.getElementById('success-message');

    //
    agendarButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 1. Mostra a mensagem de sucesso
            successMessage.classList.add('show');

            
            setTimeout(() => {
                successMessage.classList.remove('show');
               
                
            }, 3000); // 3000 milissegundos = 3 segundos
        });
    });
});
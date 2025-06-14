document.addEventListener('DOMContentLoaded', function() {
    const formOrcamento = document.getElementById('form-orcamento');

    if (formOrcamento) {
        formOrcamento.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            // Coleta os dados do formulário
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const mensagem = document.getElementById('mensagem').value;

            // Simula o envio para um endpoint (substitua pela sua lógica real)
            console.log('Enviando dados do formulário:');
            console.log('Nome:', nome);
            console.log('Email:', email);
            console.log('Telefone:', telefone);
            console.log('Mensagem:', mensagem);

            // Exibe uma mensagem de sucesso (substitua por uma notificação visual mais elegante)
            alert('Mensagem enviada com sucesso!');

            // Limpa o formulário
            formOrcamento.reset();
        });
    }
});
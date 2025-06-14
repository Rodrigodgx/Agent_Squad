document.addEventListener('DOMContentLoaded', () => {
    const ambienteSelect = document.getElementById('ambiente');
    const estiloSelect = document.getElementById('estilo');
    const galeria = document.getElementById('galeria');
    const agendarButton = document.getElementById('agendar');

    function filterItems() {
        const ambiente = ambienteSelect.value;
        const estilo = estiloSelect.value;

        const items = galeria.querySelectorAll('.item');

        items.forEach(item => {
            const itemAmbiente = item.dataset.ambiente;
            const itemEstilo = item.dataset.estilo;

            const ambienteMatch = ambiente === 'todos' || ambiente === itemAmbiente;
            const estiloMatch = estilo === 'todos' || estilo === itemEstilo;

            if (ambienteMatch && estiloMatch) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    ambienteSelect.addEventListener('change', filterItems);
    estiloSelect.addEventListener('change', filterItems);

    agendarButton.addEventListener('click', () => {
        alert('Redirecionando para o formulário de contato...'); // Simulação do redirecionamento
        // Aqui você pode adicionar o código para redirecionar para o formulário de contato
    });
});
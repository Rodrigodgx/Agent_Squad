document.addEventListener('DOMContentLoaded', function() {
    const colorPickerButton = document.getElementById('color-picker-button');
    const colorPicker = document.getElementById('color-picker');
    const previewBox = document.getElementById('preview-box');

    colorPickerButton.addEventListener('click', function() {
        colorPicker.click(); // Simula o clique no input type="color"
    });

    colorPicker.addEventListener('input', function(event) {
        const selectedColor = event.target.value;
        previewBox.style.backgroundColor = selectedColor;
        // Pode adicionar mais lógica aqui, como exibir o valor da cor
        console.log('Cor selecionada:', selectedColor);
    });
});
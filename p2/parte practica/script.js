document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('texto-entrada');
    const aplicarBtn = document.getElementById('aplicar-btn');
    const resultadoDiv = document.getElementById('resultado');
    const contador = document.getElementById('contador-caracteres');

    textarea.addEventListener('input', function() {
        contador.textContent = `${textarea.value.length} caracteres`;
    });

    aplicarBtn.addEventListener('click', function() {
        resultadoDiv.textContent = textarea.value;
    });
});
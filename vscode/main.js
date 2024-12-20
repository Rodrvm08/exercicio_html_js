const form = document.getElementById("formulario");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const valorA = Number(document.getElementById("campoA").value);
    const valorB = Number(document.getElementById("campoB").value);

    const campoA = document.getElementById("campoA");
    const campoB = document.getElementById("campoB");

    const Sucesso = `Formulário válido, o valor do Campo B: <b>${valorB}</b> é maior que o valor do Campo A: <b>${valorA}</b>`;
    const Erro = `Formulário inválido, o valor do campo B: <b>${valorB}</b> é menor ou igual o valor do Campo A: <b>${valorA}</b>`;

    let calculo = false;

    function resultado(valorA, valorB) {
        return valorB > valorA;
    }

    const resultadoCerto = document.querySelector(".success");
    const resultadoErrado = document.querySelector(".failure");

    calculo = resultado(valorA, valorB);

    if (calculo) {
        resultadoCerto.innerHTML = Sucesso;
        resultadoCerto.style.display = "block";
        resultadoErrado.style.display = "none";

        campoA.value = "";
        campoB.value = "";
    } else {
        resultadoErrado.innerHTML = Erro;
        resultadoErrado.style.display = "block";
        resultadoCerto.style.display = "none";

        campoA.value = "";
        campoB.value = "";
    }
});
// Obtém todos os botões com a classe "botao"
const botoes = document.querySelectorAll('.botao');
const botao = document.querySelectorAll('.botao');
const caixas = document.querySelector('.caixa')
// Obtém a div onde o resultado será exibido
const resultadoDiv = document.querySelector('.resultado');
// Obtém o elemento de áudio
const som = document.getElementById('som');

// Variável para armazenar a expressão
let expressao = '';

// Adiciona um evento de clique a cada botão
botoes.forEach(botao => {
  botao.addEventListener('click', function() {
    // Verifica se o botão clicado tem um valor
    if (botao.value !== undefined) {
      // Verifica se o botão clicado é o "="
      if (botao.classList.contains('recebe')) {
        som.currentTime = 4;
        // Reproduz o som apenas quando o botão "=" é clicado
        som.play();

        // Remove os espaços em branco da expressão antes de calcular
        const expressaoSemEspacos = expressao.replace(/\s/g, '');
        console.log("Expressão sem espaços:", expressaoSemEspacos);
        // Calcula o resultado da expressão
        const resultado = eval(expressaoSemEspacos);
        console.log("Resultado:", resultado);
        // Substitui o conteúdo da div por um numero aleatorio
        resultadoDiv.innerHTML = Math.floor(Math.random() * 500)
        botao.innerHTML = '<img src="cc1785991065454291f79f04d3d66377b861e460_full.jpg" alt="Imagem" width="102%" height="81px" style="border-radius: 10px">';
        // Limpa a expressão
        expressao = '';
      } else if (botao.classList.contains('limpa')) { // Verifica se o botão clicado é o "C" (Clear)
        // Limpa a expressão
        expressao = '';
        // Atualiza o conteúdo da div com a expressão limpa
        resultadoDiv.textContent = expressao;
        // Redefine o tamanho da fonte para o padrão
        resultadoDiv.style.fontSize = "";
      } else {
        // Atualiza a expressão com o valor do botão clicado
        expressao += botao.value;
        // Atualiza o conteúdo da div com a expressão atualizada
        resultadoDiv.textContent = expressao;
        // Redefine o tamanho da fonte para o padrão
        resultadoDiv.style.fontSize = "";
      }
    }
  });
});



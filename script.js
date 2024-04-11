// Obtém todos os botões com a classe "botao"
const botoes = document.querySelectorAll('.botao');
const caixas = document.querySelector('.caixa')
// Obtém a div onde o resultado será exibido
const resultadoDiv = document.querySelector('.resultado');

// Variável para armazenar a expressão
let expressao = '';

// Adiciona um evento de clique a cada botão
botoes.forEach(botao => {
  botao.addEventListener('click', function() {
    // Verifica se o botão clicado tem um valor
    if (botao.value !== undefined) {
      // Verifica se o botão clicado é o "="
      if (botao.classList.contains('recebe')) {
        // Remove os espaços em branco da expressão antes de calcular
        const expressaoSemEspacos = expressao.replace(/\s/g, '');
        console.log("Expressão sem espaços:", expressaoSemEspacos);
        // Calcula o resultado da expressão
        const resultado = eval(expressaoSemEspacos);
        console.log("Resultado:", resultado);
        // Substitui o conteúdo da div por uma imagem
        resultadoDiv.innerHTML = '<img src="cc1785991065454291f79f04d3d66377b861e460_full.jpg" alt="Imagem" width="102%" height="81px" style="border-radius: 10px">';
        caixas.style.backgroundImage = 'url("cc1785991065454291f79f04d3d66377b861e460_full.jpg")'
        caixas.style.backgroundSize = '800px'
        // Ajusta o tamanho da fonte proporcionalmente ao tamanho da div
        ajustarTamanhoFonte(resultadoDiv);
        // Limpa a expressão
        expressao = '';
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

// Função para ajustar o tamanho da fonte proporcionalmente ao tamanho da div
function ajustarTamanhoFonte(div) {
  const maxWidth = div.offsetWidth;
  const textWidth = div.scrollWidth;
  const currentFontSize = parseInt(window.getComputedStyle(div).fontSize);
  // Ajusta o tamanho da fonte proporcionalmente à largura do texto
  const newFontSize = Math.floor((maxWidth / textWidth) * currentFontSize);
  div.style.fontSize = newFontSize + "%";
}

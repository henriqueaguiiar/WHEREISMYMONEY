document.getElementById('coinForm')?.addEventListener('submit', function(event: Event) {
  event.preventDefault();  // Evita o comportamento padrão do formulário (recarregar a página)
  
  const coinInput = document.getElementById('coinInput') as HTMLInputElement; // Obtém o campo de entrada de texto
  const coin = coinInput.value; // Obtém o nome da moeda
  const apiUrl = `http://localhost:3000/coin/${coin}`;

  // Fazendo a requisição para a API
  fetch(apiUrl)
    .then(response => response.json()) 
    .then((data: { coinName: string; coinPrice: number; }) => {
      if (data.coinName && data.coinPrice) {
        const coinNameElement = document.getElementById('coinName') as HTMLSpanElement;
        const coinPriceElement = document.getElementById('coinPrice') as HTMLSpanElement;
        
        coinNameElement.textContent = data.coinName;
        coinPriceElement.textContent = data.coinPrice.toString();
      } else {
        // Exibe erro caso a moeda não seja encontrada
        document.getElementById('result')!.innerHTML = `<p style="color:red;">Erro: Moeda não encontrada.</p>`;
      }
    })
    .catch(error => {
      // Exibe uma mensagem de erro caso haja um problema na requisição
      document.getElementById('result')!.innerHTML = `<p style="color:red;">Erro: Não foi possível buscar os dados da moeda.</p>`;
      console.error(error);
    });
});

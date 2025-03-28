# WHEREISMYMONEY
![image](https://github.com/user-attachments/assets/b366b18b-3ca0-40b2-8014-6f111f2f1439)

Este é um projeto de estudo que consome a API da CoinGecko para obter o preço de criptomoedas em dólares. O backend é implementado usando **Node.js**, **Express**, e **TypeScript**, e o frontend é um simples arquivo HTML que consome a API.

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **TypeScript**
- **Axios** (para fazer requisições HTTP)
- **dotenv** (para gerenciar variáveis de ambiente)
- **Vercel** (para deploy na plataforma de serverless)

## Funcionalidades

- Endpoint: `/coin/:coin`
  - Recebe o nome de uma criptomoeda (como `bitcoin`, `ethereum`, etc.)
  - Retorna o preço da moeda em dólares americanos (USD).

## Como Executar Localmente

### Pré-requisitos

- **Node.js** (v16 ou superior)
- **npm** (gerenciador de pacotes)
- **TypeScript** (se não tiver instalado globalmente, o próprio `npm install` instalará as dependências)

### Passos para Execução

1. **Clone o repositório**

   ```bash
   git clone https://github.com/henriqueaguiiar/WHEREISMYMONEY.git
   cd WHEREISMYMONEY

2. **Instale as dependências**

   No diretório do projeto, execute o seguinte comando para instalar as dependências:

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**

   Crie um arquivo `.env` na raiz do projeto e adicione as variáveis necessárias (se houver). Por exemplo:

   ```
   PORT=3000
   ```

4. **Execute o backend localmente**

   Para rodar o servidor localmente em modo de desenvolvimento, use o seguinte comando:

   ```bash
   npm run dev
   ```

   Para compilar o TypeScript e rodar a versão de produção, use:

   ```bash
   npm run build
   npm start
   ```

   Isso iniciará o servidor no `localhost:3000` (ou na porta definida no arquivo `.env`).

5. **Execute o frontend localmente**

   O frontend é um simples arquivo HTML que consome a API do backend. Para testar o frontend, basta abrir o arquivo `index.html` no seu navegador.

   - Navegue até o diretório onde o arquivo `index.html` está localizado.
   - Abra o arquivo diretamente no seu navegador.

   Você pode abrir o arquivo HTML manualmente ou rodar um servidor local simples, caso queira uma abordagem mais robusta.

   Se você preferir abrir o arquivo diretamente, basta usar o navegador e abrir a página, por exemplo:

   ```bash
   file:///C:/Workspace/Vscode - IDE/Javascript/WhereIsMyMoney/index.html
   ```

6. **Testando a API**

   Você pode testar a API acessando a URL do endpoint com o nome de uma moeda específica. Por exemplo:

   ```bash
   http://localhost:3000/coin/bitcoin
   ```

   A resposta será um JSON com o nome da moeda e seu preço em USD:

   ```json
   {
     "coinName": "bitcoin",
     "coinPrice": "23456.78"
   }
   ```

   Se a moeda não for encontrada, o servidor retornará um erro 404:

   ```json
   {
     "error": "Moeda não encontrada."
   }
   ```

### Scripts do `package.json`

- **dev**: Inicia o servidor localmente em modo de desenvolvimento (com `ts-node`).
- **build**: Compila o código TypeScript para JavaScript.
- **start**: Inicia o servidor com o código compilado (na pasta `dist`).

## Licença

Este projeto está licenciado sob a licença **MIT**. Veja o arquivo [LICENSE](https://github.com/henriqueaguiiar/WHEREISMYMONEY/blob/main/LICENSE) para mais detalhes.

## Contribuições

Se você deseja contribuir para o projeto, fique à vontade para abrir **issues** ou **pull requests**. Para contribuir com código.
```

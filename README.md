# JS-Selenium-Onfly

## Sobre

**Entendendo o Problema:**

A tarefa exige que seja desenvolvido um script JavaScript para automatizar o preenchimento de um formulário online e a manipulação do DOM de uma página HTML. A principal dificuldade reside em:

* **Interagir com elementos HTML:** É necessário identificar os elementos do formulário (inputs, selects) e atribuir valores a eles de forma programática.
* **Validar dados:** O e-mail precisa ser validado para garantir que esteja no formato correto.
* **Criar dados fictícios:** Os dados a serem preenchidos devem ser realistas, mas gerados aleatoriamente.

## Solução Proposta

A solução da tarefa 1 foi utilizando a biblioteca Selenium para Javascript. Os dados fictícios são gerados pela API https://api.invertexto.com. Dentro do loop, a função `obter_pessoa_ficticia` é chamada para gerar dados fictícios para uma pessoa. Uma verificação é feita com a função `valida_todos_campos` (que provavelmente checa se todos os campos possuem dados) antes de prosseguir. O código então interage com o formulário utilizando os métodos do Selenium para encontrar elementos por XPath e preencher os campos com os dados. Um bloco `try...catch` é utilizado para tratar possíveis erros, como elementos obsoletos (StaleElementReferenceError), que podem ocorrer devido ao carregamento dinâmico do formulário. Nesse caso, a página é atualizada para tentar novamente. Ao término do loop ou após um erro irrecuperável, o código fecha o navegador usando o método `quit`.

1. **Observações:**
    * O código define o caminho para o driver do Firefox e configura um novo construtor para o WebDriver.
    * O dotenv é utilizado para carregar variáveis de ambiente (como o token de acesso à API de dados fictícios).
    * O código assume que os elementos do formulário podem ser encontrados por XPath. Isso pode precisar de ajustes dependendo da estrutura do HTML.


## Como instalar

### Dependências

* **dotenv**
* **selenium-webdriver**

### Instalando o Repositório

Clone o projeto:

```bash
git clone https://github.com/bolatron/js-selenium-onfly.git
```

Isso irá criar uma nova pasta chamada `js-selenium-onfly` no seu diretório atual, com todos os arquivos do repositório.

**2. Instalar as Dependências:**

Entre na pasta do projeto recém-clonado:

```bash
cd js-selenium-onfly
```

E execute o comando para instalar as dependências:

```bash
npm install
```

O comando `npm install` irá ler o arquivo `package.json` e instalar todas as dependências listadas, juntamente com suas respectivas versões, no diretório `node_modules`.

### Executando o Projeto

**Exemplo:**

Agora para rodas as tarefas:

```bash
node pages/tarefa_1.js
node pages/tarefa_2.js
```

**Observações:**

* **Arquivo .env:** Certifique-se de que o arquivo `.env` esteja na raiz do seu projeto e contenha as variáveis de ambiente necessárias, como o token de API e o caminho para o driver do navegador.
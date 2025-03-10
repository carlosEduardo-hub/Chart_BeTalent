# Teste Prático de Vaga: Tabela Responsiva com Filtro

Este repositório contém a implementação de uma aplicação de teste prática para uma vaga. A aplicação exibe uma tabela responsiva com informações sobre pessoas, incluindo foto, nome, cargo, data de admissão e telefone. A tabela também possui um sistema de filtro de pesquisa, permitindo que os dados sejam filtrados dinamicamente. Para simular a comunicação com uma API real, foi utilizado o JSON Server, com dados armazenados em um arquivo `db.json`, e consumidos pela aplicação usando Axios.

## Funcionalidades

*   **Tabela Responsiva:** Exibe informações sobre as pessoas em uma tabela, com os seguintes campos:
    *   Foto
    *   Nome
    *   Cargo
    *   Data de Admissão
    *   Telefone
*   **Filtro de Pesquisa:** Campo de input para filtrar os registros exibidos na tabela com base no texto digitado.
*   **API Simulada:** Dados carregados dinamicamente de um servidor fake (JSON Server), alimentando a tabela.

## Tecnologias Utilizadas

*   **React:** Framework para construção da interface de usuário.
*   **Vite:** Ferramenta de build e bundling para otimizar o processo de desenvolvimento.
*   **TailwindCSS:** Framework de CSS para estilização de componentes de forma eficiente e responsiva.
*   **ShadCNUI:** Biblioteca de componentes UI para otimizar a construção da interface com componentes pré-estilizados.
*   **Axios:** Biblioteca para fazer requisições HTTP e consumir os dados da API simulada.
*   **JSON Server:** Utilizado para simular uma API RESTful a partir do arquivo `db.json`.

## Como Rodar a Aplicação

1.  **Clonando o Repositório**

    Primeiro, clone este repositório para sua máquina local:

    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd <NOME_DA_PASTA>
    ```

2.  **Instalando as Dependências**

    Após clonar o repositório, instale as dependências necessárias para rodar o frontend e o servidor simulado:

    ```bash
    npm install
    ```

3.  **Rodando o Frontend**

    Para rodar a aplicação no modo de desenvolvimento, execute:

    ```bash
    npm run dev
    ```

    Isso irá iniciar o servidor de desenvolvimento, e a aplicação estará disponível no navegador em:

    ```
    http://localhost:5173
    ```

4.  **Rodando o JSON Server**

    O repositório já está configurado para rodar o JSON Server automaticamente. Para iniciar o servidor de dados simulados, execute o seguinte comando:

    ```bash
    npm run server
    ```

    Isso fará com que o JSON Server seja executado na URL:

    ```
    http://localhost:3001
    ```

    O servidor estará servindo os dados do arquivo `db.json` e pode ser acessado pela aplicação para preencher a tabela.

5.  **Configuração Automática**

    O `package.json` foi configurado para automatizar a execução tanto do frontend quanto do servidor simulado. A execução dos dois serviços pode ser feita de forma simples com os seguintes comandos:

    *   Para rodar o frontend: `npm run dev`
    *   Para rodar o JSON Server: `npm run server`

    Ambos os comandos devem ser executados em terminais separados, para que o frontend e a API simulada possam interagir corretamente.


## Detalhes da Implementação

*   **Tabela Responsiva:** Utilizei o TailwindCSS para garantir que a tabela se ajuste adequadamente a diferentes tamanhos de tela. Isso garante que a interface seja intuitiva e acessível tanto em dispositivos móveis quanto em desktop.
*   **Filtro de Pesquisa:** Um campo de input que permite a filtragem dinâmica da tabela com base nos dados digitados. A pesquisa é feita de forma eficiente e em tempo real.
*   **Consumo da API Simulada:** A aplicação utiliza Axios para fazer as requisições HTTP ao JSON Server, que retorna os dados armazenados no `db.json`. Esses dados são então utilizados para preencher a tabela.


## OBSERVAÇÃO
   O arquivo .env não foi colocado no gitignore propositalmente para a visualição da variável de ambiente,visto que não possui nenhum dado confidencial ou sensível.

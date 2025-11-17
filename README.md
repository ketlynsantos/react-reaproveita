# ReAproveita

**ReAproveita** é um site institucional que apresenta o aplicativo de mesmo nome, que conecta mercados e supermercados a consumidores interessados em economizar, especialmente pessoas em situação de baixa renda. O site tem caráter informativo e não realiza transações reais.

Ele foi refeito utilizando React e Vite, garantindo maior interatividade, desempenho e manutenção do código.

## Objetivo

O site institucional foi desenvolvido como parte de um trabalho acadêmico da FIAP, com foco na ODS 2 – Fome Zero e Agricultura Sustentável. Seus objetivos incluem:

- Apresentar a missão e os objetivos do aplicativo ReAproveita.
- Informar como o app conecta mercados e consumidores.
- Incentivar o consumo consciente e a redução do desperdício de alimentos.
- Criar uma interface moderna e interativa utilizando React.
- Exibir conteúdo dinâmico vindo de uma API externa (blog e formulário de contato).

## Tecnologias Utilizadas

- React + Vite
- JavaScript / JSX
- CSS3 / Flexbox / Grid
- React Router
- Fetch API / HTTP
- Componentes reutilizáveis (Cards, Botões, Modal)

# Funcionalidades do Site
### Navegação entre páginas
Com React Router e rotas organizadas.

### Blog com API integrada
- Busca real na API `/blog`
- Busca por texto
- Filtro por categorias
- Modal de post com conteúdo completo
- Tratamento de loading e erro
- Dados atualizados em tempo real

### Formulário de contato (API integrada)
- Validação de campos
- Envio via `POST` para a API
- Mensagens de sucesso e erro
- Registro salvo no banco de dados

### Página inicial interativa
- Seções que levam para outras páginas
- Carrosséis dos nossos números
- Sessão "Como usar o app" com passo a passo
- Carrossel de posts vindo da API

### Página Quem Somos
- Header ilustrativo
- Missão, visão e valores
- Nossos números

### Página Onde Estamos
- Mapa mostrando onde estamos presentes (SP)
- Estados onde estaremos em breve (MG e RJ)
- Timeline de expansão
- Botão para acesso à página de contato

### Novas funcionalidades adicionadas
- Botão **“Go to Top”**
- Categorias filtráveis no blog
- Layout ainda mais responsivo
- Integração configurável via `.env`
- Estado de carregamento e feedback para API lenta
- Mensagens amigáveis para falhas de rede

## Configuração do `.env`
Agora o projeto utiliza variáveis de ambiente para definir o endereço da API.
Crie o arquivo **`.env`** na raiz do projeto e adicione:
```
VITE_API_BASE_URL=https://sua-api.com
```
Uso no código:
```jsx
const API_URL = import.meta.env.VITE_API_BASE_URL;
```

## Como executar
1. **Clone o repositório:**
   ```bash
   https://github.com/ketlynsantos/react-reaproveita.git
   ```

2. **Entre na pasta do projeto:**
   ```bash
   cd react-reaproveita
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
    ```bash
   npm run dev
   ```

5. **Abra o navegador e acesse o endereço indicado no terminal (geralmente http://localhost:5173) para visualizar o site.**

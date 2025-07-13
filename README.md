# Documentação do Projeto Chá Revelação, fiz para compartilhar no meu trabalho entre os colegas.

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando tecnologias web front-end padrão, sem necessidade de frameworks complexos ou dependências externas:

1. **HTML5**: Utilizado para estruturar o conteúdo da página, incluindo textos, imagens e botões.
   - Versão: HTML5
   - Função: Estruturação do conteúdo e elementos interativos

2. **CSS3**: Responsável por toda a estilização visual da aplicação.
   - Versão: CSS3
   - Recursos utilizados: 
     - Flexbox para layout responsivo
     - Animações e transições para efeitos visuais
     - Media queries para adaptação a diferentes tamanhos de tela
     - Variáveis CSS para gerenciamento de cores

3. **JavaScript (ES6+)**: Implementa toda a lógica interativa da aplicação.
   - Versão: ECMAScript 2015+ (ES6+)
   - Recursos utilizados:
     - Manipulação do DOM para interatividade
     - Event Listeners para capturar ações do usuário
     - Animações dinâmicas (confetes)
     - API Web Share (quando disponível) para compartilhamento

4. **Fontes Google**: Utilizadas para tipografia personalizada.
   - Montserrat: Para textos gerais
   - Pacifico: Para títulos e o nome do bebê

## Estrutura do Projeto

```
revelacao-bebe/
│
├── index.html          # Arquivo principal HTML com a estrutura da página
├── styles.css          # Estilos CSS para toda a aplicação
├── script.js           # Código JavaScript para interatividade
│
└── images/             # Pasta contendo as imagens utilizadas
    ├── 1000176123.jpg  # Imagem dos pais
    ├── 1000114288.webp # Imagem dos pais
    ├── 1000148886.jpg  # Imagem do ultrassom
    └── 1000178565.jpg  # Imagem do ultrassom
```

## Instalação Local (Windows com Visual Studio Code)

### Pré-requisitos
- Windows 10 ou superior
- Visual Studio Code instalado
- Navegador web moderno (Chrome, Firefox, Edge)

### Passos para Instalação

1. **Descompactar o arquivo ZIP**
   - Clique com o botão direito no arquivo `revelacao-bebe.zip`
   - Selecione "Extrair Tudo..."
   - Escolha uma pasta de destino (ex: `C:\Users\SeuUsuario\Documents\revelacao-bebe`)
   - Clique em "Extrair"

2. **Abrir o projeto no Visual Studio Code**
   - Abra o Visual Studio Code
   - Clique em "Arquivo" > "Abrir Pasta..."
   - Navegue até a pasta onde você extraiu os arquivos
   - Selecione a pasta `revelacao-bebe` e clique em "Selecionar Pasta"

3. **Visualizar a estrutura do projeto**
   - No painel esquerdo do VS Code, você verá todos os arquivos do projeto
   - Verifique se a estrutura corresponde à descrita acima

4. **Testar a aplicação localmente**
   - Clique com o botão direito no arquivo `index.html`
   - Selecione "Abrir com Live Server" (se você tiver a extensão Live Server instalada)
   - Ou abra o arquivo diretamente no navegador:
     - Clique com o botão direito no arquivo `index.html` no Windows Explorer
     - Selecione "Abrir com" e escolha seu navegador preferido

5. **Extensões recomendadas para o VS Code (opcionais)**
   - Live Server: Para visualizar o site com atualizações em tempo real
   - HTML CSS Support: Para melhor suporte à edição de HTML e CSS
   - Prettier: Para formatação automática de código

## Publicação no GitHub Pages

### Pré-requisitos
- Conta no GitHub (gratuita)
- Git instalado no computador (opcional, pois é possível fazer upload diretamente pelo navegador)

### Método 1: Upload pelo Navegador (Mais Simples)

1. **Criar uma conta no GitHub**
   - Acesse [github.com](https://github.com)
   - Clique em "Sign up" e siga as instruções para criar uma conta

2. **Criar um novo repositório**
   - Após fazer login, clique no botão "+" no canto superior direito
   - Selecione "New repository" (Novo repositório)
   - Nomeie o repositório como `revelacao-bebe` (ou outro nome de sua preferência)
   - Deixe o repositório como "Public" (Público)
   - Não adicione README, .gitignore ou licença neste momento
   - Clique em "Create repository" (Criar repositório)

3. **Fazer upload dos arquivos**
   - Na página do repositório recém-criado, você verá um botão "uploading an existing file"
   - Clique neste link
   - Arraste todos os arquivos e pastas do projeto (que você descompactou) para a área indicada
   - Ou clique em "choose your files" para selecionar os arquivos manualmente
   - **Importante**: Certifique-se de que o arquivo `index.html` está na raiz do repositório
   - Adicione uma mensagem de commit como "Upload inicial do projeto de revelação"
   - Clique em "Commit changes" (Confirmar alterações)

4. **Configurar o GitHub Pages**
   - Após o upload, clique na aba "Settings" (Configurações) do seu repositório
   - Role para baixo até encontrar a seção "GitHub Pages"
   - Em "Source" (Fonte), clique no dropdown e selecione "main" (ou "master")
   - Clique em "Save" (Salvar)
   - Aguarde alguns minutos para que o site seja publicado

5. **Acessar o site publicado**
   - Após a publicação, o GitHub mostrará uma mensagem com o link do seu site
   - O link geralmente segue o formato: `https://seuusuario.github.io/revelacao-bebe/`
   - Este é o link que você pode compartilhar com amigos e familiares

### Método 2: Usando Git (Para Usuários Avançados)

1. **Instalar o Git**
   - Baixe e instale o Git de [git-scm.com](https://git-scm.com/download/win)
   - Durante a instalação, mantenha as opções padrão

2. **Configurar o Git (primeira vez apenas)**
   - Abra o "Git Bash" ou o "Prompt de Comando"
   - Configure seu nome: `git config --global user.name "Seu Nome"`
   - Configure seu email: `git config --global user.email "seu.email@exemplo.com"`

3. **Inicializar o repositório local**
   - Navegue até a pasta do projeto: `cd caminho/para/revelacao-bebe`
   - Inicialize o Git: `git init`
   - Adicione todos os arquivos: `git add .`
   - Faça o commit inicial: `git commit -m "Upload inicial do projeto de revelação"`

4. **Conectar ao GitHub e fazer push**
   - Crie um repositório no GitHub como descrito no Método 1 (passos 1-2)
   - Conecte seu repositório local ao GitHub:
     ```
     git remote add origin https://github.com/seuusuario/revelacao-bebe.git
     ```
   - Envie os arquivos para o GitHub:
     ```
     git branch -M main
     git push -u origin main
     ```

5. **Configurar o GitHub Pages**
   - Siga os passos 4-5 do Método 1 para configurar o GitHub Pages e acessar o site

## Personalização e Modificações

Se desejar fazer alterações no projeto:

1. **Modificar textos e mensagens**
   - Abra o arquivo `index.html` no VS Code
   - Localize os textos que deseja alterar e faça as modificações

2. **Alterar cores e estilos**
   - Abra o arquivo `styles.css` no VS Code
   - Modifique as propriedades CSS conforme desejado
   - As cores principais estão definidas nas classes `.title`, `.button`, `.girl`, `.boy`, etc.

3. **Modificar comportamentos interativos**
   - Abra o arquivo `script.js` no VS Code
   - Ajuste os event listeners e funções conforme necessário

4. **Atualizar o site após modificações**
   - Se estiver usando o Método 1 (upload pelo navegador):
     - Acesse seu repositório no GitHub
     - Clique no arquivo que deseja atualizar
     - Clique no ícone de lápis (editar)
     - Faça suas alterações e clique em "Commit changes"
   
   - Se estiver usando o Método 2 (Git):
     - Após fazer as alterações, execute:
       ```
       git add .
       git commit -m "Descrição das alterações"
       git push
       ```



# Angular Blog

Este é um projeto de blog desenvolvido com Angular, inspirado em um layout do Dribbble. O design é moderno e responsivo, permitindo a publicação de artigos de forma eficiente.

![image](https://github.com/user-attachments/assets/04de631b-804a-4869-a359-0adf2cf08c41)

![image](https://github.com/user-attachments/assets/ee0e470d-3b43-485e-9eba-834914ae7fdf)

![image](https://github.com/user-attachments/assets/5c0e6cc6-5845-4be1-a80d-c420d1ab56f0)

![image](https://github.com/user-attachments/assets/96350481-14a2-45ed-bc13-fdbd0623163a)

![image](https://github.com/user-attachments/assets/0f2351bf-b889-45cd-b345-4d6bd76f809d)

## Funcionalidades

- **Publicação de Artigos**: Permite a criação e edição de posts no blog.
- **Design Responsivo**: Layout adaptável a diferentes dispositivos e tamanhos de tela.
- **Editor de Texto Rico**: Implementação de um editor WYSIWYG para facilitar a formatação dos artigos.

## Tecnologias Utilizadas

- **Angular**: Framework principal para o desenvolvimento do front-end.
- **ngx-markdown**: Biblioteca Angular que utiliza o marked para converter markdown em HTML, combinada com Prism.js para realce de sintaxe.
- **@kolkov/angular-editor**: Editor WYSIWYG nativo e simples para Angular 13+.

## Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado em sua máquina.
- **Angular CLI**: Ferramenta de linha de comando para Angular. Instale globalmente usando:

```bash
npm install -g @angular/cli
```

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/vannoleto/angular-blog.git
```

2. Navegue até o diretório do projeto:

```bash
cd angular-blog
```

3. Instale as dependências:

```bash
npm install
```

## Executando o Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento, execute:

```bash
ng serve
```

Depois, abra o navegador e acesse `http://localhost:4200/`. A aplicação recarregará automaticamente ao detectar alterações nos arquivos fonte.

## Gerando Componentes

Para gerar um novo componente, utilize o Angular CLI:

```bash
ng generate component nome-do-componente
```


Para ver todas as opções disponíveis, execute:

```bash
ng generate --help
```

## Build

Para compilar o projeto, execute:

```bash
ng build
```

Os artefatos de build serão armazenados no diretório `dist/`. Utilize a flag `--prod` para uma compilação de produção.

## Testes

- **Testes Unitários**: Execute os testes unitários via Karma com:

```bash
ng test
```

- **Testes de Ponta a Ponta**: Execute os testes end-to-end via Protractor com:

```bash
ng e2e
```

> **Nota**: Para usar este comando, é necessário adicionar um pacote que implemente capacidades de teste end-to-end.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

# Sistema de Login em JavaScript utilizando Programação Orientada a Objetos

##  Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de praticar conceitos de **Programação Orientada a Objetos (POO)** em JavaScript através da implementação de um fluxo de login simples.

A proposta foi entender como organizar uma aplicação em classes, separando responsabilidades e simulando o funcionamento básico de um sistema de autenticação.

Embora seja um projeto acadêmico e simplificado, ele segue conceitos que são utilizados em sistemas reais, como gerenciamento de usuários, autenticação e controle de sessão.

##  Objetivos de Aprendizagem

Durante o desenvolvimento deste projeto, foram praticados os seguintes conceitos:

* Classes e Objetos
* Construtores
* Encapsulamento de responsabilidades
* Manipulação de Arrays
* Métodos de classe
* Fluxo de autenticação
* Controle de sessão
* Organização de código orientada a objetos

## Estrutura do Sistema

### Usuario

Representa um usuário do sistema.

Responsabilidades:

* Armazenar nome
* Armazenar e-mail
* Armazenar senha

### UserControl

Responsável pelo gerenciamento dos usuários cadastrados.

Funcionalidades:

* Adicionar usuários
* Buscar usuários através do e-mail

### Session

Responsável por controlar a sessão atual da aplicação.

Funcionalidades:

* Realizar login
* Realizar logout
* Verificar se existe um usuário autenticado

### Auth

Responsável pela autenticação dos usuários.

Funcionalidades:

* Verificar se o usuário existe
* Validar senha
* Iniciar sessão após autenticação bem-sucedida

## Fluxo de Funcionamento

1. Um usuário é criado através da classe `Usuario`.
2. O usuário é armazenado no `UserControl`.
3. O sistema recebe e-mail e senha.
4. A classe `Auth` busca o usuário pelo e-mail.
5. Caso o usuário não exista, uma mensagem de erro é retornada.
6. Caso a senha esteja incorreta, uma mensagem de erro é retornada.
7. Se as credenciais estiverem corretas, a classe `Session` registra o usuário logado.
8. O sistema informa que o login foi realizado com sucesso.

## Fundamentos

Com este projeto foi possível compreender melhor:

* Como modelar entidades utilizando classes.
* Como dividir responsabilidades entre diferentes objetos.
* Como criar um fluxo de autenticação simples.
* Como simular sessões de usuário.
* Como organizar um projeto JavaScript utilizando POO.

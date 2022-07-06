#language: pt
#enconding: UTF-8

@cadastrar
Funcionalidade: realizar cadastro

@cadastroBemSucedido
Cenario: cadastrar usuario
Quando eu clicar no botao sign in
E eu clicar no campo informando meu email "Testfil13@dominio.com"
E eu clicar no botao Create an account
E eu digitar no campo First name "TesteFil"
E eu digitar no campo Last name "FilTest"
E eu digitar no campo Password "12345testfil"
E eu digitar no campo Address "Setor de Chácaras Córrego da Onça Rua C"
E eu digitar no campo City "Df"
E eu digitar no campo Zip/Postal "05200"
E eu clicar no seletor Country
E eu selecionar United States
E eu clicar no seletor State
E eu selecionar California
E eu digitar no campo Mobile phone "61778831549"
E eu clicar no botao Register
Entao eu ser cadastrado

@cadastroUsuarioInvalido
Cenario: cadastrar usuario com email invalido
Quando eu clicar no botao sign in
E eu clicar no campo informando meu email "Testfildominiocom"
E eu clicar no botao Create an account
Entao aparece na tela a mensagem "Invalid email address."




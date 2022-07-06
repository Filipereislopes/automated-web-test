#language: pt
#enconding: UTF-8

@compra
Funcionalidade: realizar cadastro

@pesquisar 
Cenario: realizar uma pesquisa na barra de busca
Quando eu vou digitar no campo de busca "shirt"
E clicar no botao buscar
Entao aparece na tela os produtos e a quantidade

@adicionarProdutoNoCarrinho 
Cenario: adicionar produto no carrinho
Quando eu pesquisar um produto "shirt"
E eu adicionar ao carrinho
Entao um produto e adicionado no carrinho

@concordarTermosObrogadorio
Cenario: comprar sem concordar com termos do site
Quando eu pesquisar um produto "shirt"
E eu adicionar ao carrinho
E eu clico no botao check-out
E eu clico no botao check-outUm 
E eu crio meu cadastro passando "emailtepqvp@test.com" "Teste" "Lastest" "12345te" "rua tal endereco tal" "Df" "05200" "6112345678"
E eu clico no botao check-outTres
E aparece link para termos
E eu clico no botao check-outQuatro
Entao mensagem aparece informando eu ter que concordar com termos do site

@RemoverProdutoNoCarrinho 
Cenario: remover produto do carrinho
Quando eu pesquisar um produto "shirt"
E eu adicionar ao carrinho
E eu clico no botao check-out
E eu clico no botao excluir
Entao um produto e removido

@compraSem 
Cenario: realizar uma compra sem o usuario ser cadastrado
Quando eu realizar uma pesquisa por produto "shirt"
E eu adicionar ao carrinho
E eu clico no botao check-out
E eu clico no botao check-outUm 
E eu crio meu cadastro passando "emailtessshhpp@test.com" "Teste" "Lastest" "12345te" "rua tal endereco tal" "Df" "05200" "6112345678"
E eu clico no botao check-outTres
E eu aceito os termos do site
E eu clico no botao check-outQuatro
E eu clico na forma de pagemento
E eu clico em confirmar meu pedido
Entao aparece uma frase de confirmacao



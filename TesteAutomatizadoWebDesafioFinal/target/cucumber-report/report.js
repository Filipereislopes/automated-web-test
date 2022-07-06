$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/RealizarCadastro.feature");
formatter.feature({
  "name": "realizar cadastro",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@cadastrar"
    }
  ]
});
formatter.scenario({
  "name": "cadastrar usuario",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cadastrar"
    },
    {
      "name": "@cadastroBemSucedido"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao sign in",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioStep.euVouClicarNoBotaoSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no campo informando meu email \"Testfil13@dominio.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioStep.euVouClicarNoCampoInformandoMeuEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao Create an account",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioStep.euVouClicarNoBotaoCreateAnAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar no campo First name \"TesteFil\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioStep.euVouDigitarNoCampoFirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar no campo Last name \"FilTest\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioStep.euVouDigitarNoCampoLastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar no campo Password \"12345testfil\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioStep.euVouDigitarNoCampoPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar no campo Address \"Setor de Ch�caras C�rrego da On�a Rua C\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioStep.euVouDigitarNoCampoAddress(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar no campo City \"Df\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioStep.euVouDigitarNoCampoCity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar no campo Zip/Postal \"05200\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioStep.euVouDigitarNoCampoZipPostal(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no seletor Country",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioStep.euVouClicarNoSeletorCountry()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu selecionar United States",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioStep.euVouSelecionarUnitedStates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no seletor State",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioStep.euVouClicarNoSeletorState()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu selecionar California",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioStep.euVouSelecionarCalifornia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitar no campo Mobile phone \"61778831549\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioStep.euVouDigitarNoCampoMobilePhone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao Register",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioStep.euVouClicarNoBotaoRegister()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu ser cadastrado",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioStep.euVouSerCadastrado()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "cadastrar usuario com email invalido",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@cadastrar"
    },
    {
      "name": "@cadastroUsuarioInvalido"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao sign in",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioStep.euVouClicarNoBotaoSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no campo informando meu email \"Testfildominiocom\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioStep.euVouClicarNoCampoInformandoMeuEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clicar no botao Create an account",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioStep.euVouClicarNoBotaoCreateAnAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aparece na tela a mensagem \"Invalid email address.\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioStep.apareceNaTelaAMensagem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/RealizarCompra.feature");
formatter.feature({
  "name": "realizar cadastro",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@compra"
    }
  ]
});
formatter.scenario({
  "name": "realizar uma pesquisa na barra de busca",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@compra"
    },
    {
      "name": "@pesquisar"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu vou digitar no campo de busca \"shirt\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "RealizarBuscaPorProduto.euVouDigitarNoCampoDeBusca(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botao buscar",
  "keyword": "E "
});
formatter.match({
  "location": "RealizarBuscaPorProduto.clicarNoBotaoBuscar()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: unexpected command response\n  (Session info: chrome\u003d103.0.5060.66)\nBuild info: version: \u00273.141.0\u0027, revision: \u00272ecb7d9a\u0027, time: \u00272018-10-31T20:09:30\u0027\nSystem info: host: \u0027PC-GAMERM31\u0027, ip: \u0027192.168.101.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.66, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\USER\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:61357}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 97485971eb3f715fdbd59a059740be90\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat pageObject.TelaInicialPage.clicarBotaoBuscar(TelaInicialPage.java:25)\r\n\tat stepsDefinitions.RealizarBuscaPorProduto.clicarNoBotaoBuscar(RealizarBuscaPorProduto.java:22)\r\n\tat ✽.clicar no botao buscar(file:src/test/resources/features/RealizarCompra.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "aparece na tela os produtos e a quantidade",
  "keyword": "Entao "
});
formatter.match({
  "location": "RealizarBuscaPorProduto.apareceNaTelaOsProdutosEAQuantidade()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "adicionar produto no carrinho",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@compra"
    },
    {
      "name": "@adicionarProdutoNoCarrinho"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu pesquisar um produto \"shirt\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "AdicionarERemoverProdutoStep.euPesquisarUmProduto(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu adicionar ao carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarProdutoStep.euAdicionarAoCarrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "um produto e adicionado no carrinho",
  "keyword": "Entao "
});
formatter.match({
  "location": "AdicionarERemoverProdutoStep.umProdutoEAdicionadoNoCarrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "comprar sem concordar com termos do site",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@compra"
    },
    {
      "name": "@concordarTermosObrogadorio"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu pesquisar um produto \"shirt\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "AdicionarERemoverProdutoStep.euPesquisarUmProduto(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu adicionar ao carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarProdutoStep.euAdicionarAoCarrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clico no botao check-out",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarProdutoStep.euClicoNoBotaoCheckOut()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clico no botao check-outUm",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarProdutoStep.euClicoNoBotaoCheckOutUm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu crio meu cadastro passando \"emailtepqvp@test.com\" \"Teste\" \"Lastest\" \"12345te\" \"rua tal endereco tal\" \"Df\" \"05200\" \"6112345678\"",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarProdutoStep.euCrioMeuCadastroPassando(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clico no botao check-outTres",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarProdutoStep.euClicoNoBotaoCheckOutTres()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aparece link para termos",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarProdutoStep.apareceLinkParaTermos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clico no botao check-outQuatro",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarProdutoStep.euClicoNoBotaoCheckOutQuatro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "mensagem aparece informando eu ter que concordar com termos do site",
  "keyword": "Entao "
});
formatter.match({
  "location": "ComprarProdutoStep.mensagemApareceInformandoEuTerQueConcordarComTermosDoSite()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "remover produto do carrinho",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@compra"
    },
    {
      "name": "@RemoverProdutoNoCarrinho"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu pesquisar um produto \"shirt\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "AdicionarERemoverProdutoStep.euPesquisarUmProduto(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu adicionar ao carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarProdutoStep.euAdicionarAoCarrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clico no botao check-out",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarProdutoStep.euClicoNoBotaoCheckOut()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clico no botao excluir",
  "keyword": "E "
});
formatter.match({
  "location": "AdicionarERemoverProdutoStep.euClicoNoBotaoExcluir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "um produto e removido",
  "keyword": "Entao "
});
formatter.match({
  "location": "AdicionarERemoverProdutoStep.umProdutoERemovido()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "realizar uma compra sem o usuario ser cadastrado",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@compra"
    },
    {
      "name": "@compraSem"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu realizar uma pesquisa por produto \"shirt\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "ComprarProdutoStep.euRealizarUmaPesquisaPorProduto(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu adicionar ao carrinho",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarProdutoStep.euAdicionarAoCarrinho()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clico no botao check-out",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarProdutoStep.euClicoNoBotaoCheckOut()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clico no botao check-outUm",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarProdutoStep.euClicoNoBotaoCheckOutUm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu crio meu cadastro passando \"emailtessshhpp@test.com\" \"Teste\" \"Lastest\" \"12345te\" \"rua tal endereco tal\" \"Df\" \"05200\" \"6112345678\"",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarProdutoStep.euCrioMeuCadastroPassando(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clico no botao check-outTres",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarProdutoStep.euClicoNoBotaoCheckOutTres()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu aceito os termos do site",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarProdutoStep.euAceitoOsTermosDoSite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clico no botao check-outQuatro",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarProdutoStep.euClicoNoBotaoCheckOutQuatro()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clico na forma de pagemento",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarProdutoStep.euClicoNaFormaDePagemento()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu clico em confirmar meu pedido",
  "keyword": "E "
});
formatter.match({
  "location": "ComprarProdutoStep.euClicoEmConfirmarMeuPedido()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "aparece uma frase de confirmacao",
  "keyword": "Entao "
});
formatter.match({
  "location": "ComprarProdutoStep.apareceUmaFraseDeConfirmacao()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png", null);
formatter.after({
  "status": "passed"
});
});
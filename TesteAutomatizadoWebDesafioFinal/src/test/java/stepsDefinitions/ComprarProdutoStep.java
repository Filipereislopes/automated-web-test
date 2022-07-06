package stepsDefinitions;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static utils.Utils.driver;
import static utils.Utils.instanciarClasse;

import org.openqa.selenium.By;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObject.TelaDeCadastroPage;
import pageObject.TelaDeResultadoPesquisa;
import pageObject.TelaDoCarrinho;
import pageObject.TelaInicialPage;

public class ComprarProdutoStep {

	@Quando("^eu realizar uma pesquisa por produto \"([^\"]*)\"$")
	public void euRealizarUmaPesquisaPorProduto(String produto) throws Exception  {
		instanciarClasse(TelaInicialPage.class).PesquisarProduto(produto);
	}
	
	@Quando("eu adicionar ao carrinho")
	public void euAdicionarAoCarrinho() throws Exception {
		instanciarClasse(TelaDeResultadoPesquisa.class).clicarBotaoAddCarrinho();
	}

	@Quando("eu clico no botao check-out")
	public void euClicoNoBotaoCheckOut() {
		instanciarClasse(TelaDeResultadoPesquisa.class).clicarBotaoFazerCheckout();
	}

	@Quando("eu crio meu cadastro passando {string} {string} {string} {string} {string} {string} {string} {string}")
	public void euCrioMeuCadastroPassando(String email, String firstName, String lastName, String password, String address, String city, String postCade, String phone) {
		instanciarClasse(TelaDeCadastroPage.class).cadastrarUsuario(email, firstName, lastName, password, address, city, postCade, phone);
	}
	
	@Quando("eu clico no botao check-outUm")
	public void euClicoNoBotaoCheckOutUm() {
		instanciarClasse(TelaDoCarrinho.class).clicarCheckout1();
	}
	
	@Quando("eu clico no botao check-outTres")
	public void euClicoNoBotaoCheckOutTres() {
		instanciarClasse(TelaDoCarrinho.class).clicarCheckout3();
	}
	
	@Quando("eu clico no botao check-outQuatro")
	public void euClicoNoBotaoCheckOutQuatro() {
		instanciarClasse(TelaDoCarrinho.class).clicarCheckout4();
	}

	@Quando("eu aceito os termos do site")
	public void euAceitoOsTermosDoSite() {
		instanciarClasse(TelaDoCarrinho.class).clicarAceitarTermo();
	}

	@Quando("eu clico na forma de pagemento")
	public void euClicoNaFormaDePagemento() {
		instanciarClasse(TelaDoCarrinho.class).clicarFormaDePagamento();
	}

	@Quando("eu clico em confirmar meu pedido")
	public void euClicoEmConfirmarMeuPedido() {
		instanciarClasse(TelaDoCarrinho.class).clicarConcluirPedido();
	}

	@Entao("aparece uma frase de confirmacao")
	public void apareceUmaFraseDeConfirmacao() {
		assertEquals("ORDER CONFIRMATION",instanciarClasse(TelaDoCarrinho.class).obterTextoDeConfirmacao());
	}
	
	@Entao("aparece link para termos")
	public void apareceLinkParaTermos() throws Throwable {
		assertTrue(driver.findElement(By.xpath("//a[contains(.,'(Read the Terms of Service)')]")).isDisplayed());
	}
	
	@Entao("mensagem aparece informando eu ter que concordar com termos do site")
	public void mensagemApareceInformandoEuTerQueConcordarComTermosDoSite() {
		assertEquals("You must agree to the terms of service before continuing.",instanciarClasse(TelaDoCarrinho.class).obterTextoConcordarTermos());
	}
}

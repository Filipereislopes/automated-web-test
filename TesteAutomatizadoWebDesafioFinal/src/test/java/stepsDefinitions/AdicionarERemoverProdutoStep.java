package stepsDefinitions;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObject.TelaDeResultadoPesquisa;
import pageObject.TelaDoCarrinho;
import pageObject.TelaInicialPage;

import static org.junit.Assert.assertEquals;
import static utils.Utils.*;

public class AdicionarERemoverProdutoStep {

	@Quando("eu pesquisar um produto {string}")
	public void euPesquisarUmProduto(String produto) throws Exception {
		instanciarClasse(TelaInicialPage.class).PesquisarProduto(produto);
	}

	@Entao("um produto e adicionado no carrinho")
	public void umProdutoEAdicionadoNoCarrinho() throws Exception {
		assertEquals("Product successfully added to your shopping cart",
				instanciarClasse(TelaDeResultadoPesquisa.class).obterTextoAdicionadoProduto());
	}

	@Quando("eu clico no botao excluir")
	public void euClicoNoBotaoExcluir() throws Exception {
		instanciarClasse(TelaDoCarrinho.class).clicarExcluirProduto();
	}

	@Entao("um produto e removido")
	public void umProdutoERemovido() {
		assertEquals("Your shopping cart is empty.", instanciarClasse(TelaDoCarrinho.class).obterTextoExcluido());
	}
}

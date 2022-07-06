package stepsDefinitions;

import static org.junit.Assert.assertTrue;
import static utils.Utils.driver;
import static utils.Utils.*;

import org.openqa.selenium.By;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObject.TelaInicialPage;

public class RealizarBuscaPorProduto {

	@Quando("eu vou digitar no campo de busca {string}")
	public void euVouDigitarNoCampoDeBusca(String produto) {
		instanciarClasse(TelaInicialPage.class).digitarCampoDeBusca(produto);
	}

	@Entao("^clicar no botao buscar$")
	public void clicarNoBotaoBuscar() throws Exception {
		instanciarClasse(TelaInicialPage.class).clicarBotaoBuscar();
	}
	
	@Entao("aparece na tela os produtos e a quantidade")
	public void apareceNaTelaOsProdutosEAQuantidade() {
		assertTrue(driver.findElement(By.xpath("//div[@class='product-count'][1]")).isDisplayed());
	}
	
}

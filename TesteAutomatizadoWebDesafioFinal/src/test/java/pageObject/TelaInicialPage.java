package pageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class TelaInicialPage {
	
	@FindBy(xpath = "//a[@title='Log in to your customer account']")
	private WebElement botaoSingOut;
	@FindBy(id = "search_query_top")
	private WebElement campoDeBusca;
	@FindBy(name = "submit_search")
	private WebElement botaoBuscar;
	
	public void clicarSingOutLogin() throws InterruptedException {
		Thread.sleep(2000);
		botaoSingOut.click();
	}
	
	public void digitarCampoDeBusca(String produto) {
		campoDeBusca.sendKeys(produto);
	}
	
	public void clicarBotaoBuscar() throws Exception {
		botaoBuscar.click();
	}
	
	public void PesquisarProduto(String produto) throws Exception {
		digitarCampoDeBusca(produto);
		clicarBotaoBuscar();
	}
}

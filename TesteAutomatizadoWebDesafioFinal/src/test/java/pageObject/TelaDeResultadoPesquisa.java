package pageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import static utils.Utils.*;

public class TelaDeResultadoPesquisa {

	@FindBy(xpath = "//a[@class='button ajax_add_to_cart_button btn btn-default']")
	private WebElement botaoAddCarrinho;
	@FindBy(xpath = "//a[@class='product_img_link']")
	private WebElement imagemProduto;
	@FindBy(xpath = "//a[@class='btn btn-default button button-medium']")
	private WebElement botaoFazerCheckout;
	@FindBy(xpath = "//h2[contains(.,'Product successfully added to your shopping cart')]")
	private WebElement textoAdicionadoProduto;
	
	
	public void clicarBotaoAddCarrinho() throws Exception {
		Thread.sleep(1000);
		Actions acao = new Actions(driver);
		acao.moveToElement(imagemProduto).build().perform();
		botaoAddCarrinho.click();
	}
	
	public void clicarBotaoFazerCheckout() {
		botaoFazerCheckout.click();
	}
	
	public String obterTextoAdicionadoProduto() {
		return textoAdicionadoProduto.getText();
	}
}

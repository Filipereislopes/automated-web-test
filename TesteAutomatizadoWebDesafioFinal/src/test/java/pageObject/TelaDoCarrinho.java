package pageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class TelaDoCarrinho {

	@FindBy(xpath = "//a[@class='button btn btn-default standard-checkout button-medium']")
	private WebElement botaoFazerCheckout1;
	@FindBy(xpath = "//button[@class='button btn btn-default button-medium']")
	private WebElement botaoFazerCheckout3;
	@FindBy(id = "cgv")
	private WebElement aceitarTermos;
	@FindBy(xpath = "//button[@class='button btn btn-default standard-checkout button-medium']")
	private WebElement botaoFazerCheckout4;
	@FindBy(xpath = "//a[@class='bankwire']")
	private WebElement formaDePagamento;
	@FindBy(xpath = "//button[@class='button btn btn-default button-medium']")
	private WebElement botaoConcluirPedido;
	@FindBy(xpath = "//h1[@class='page-heading']")
	private WebElement textoDeConfirmacao;
	@FindBy(id = "1_1_0_0")
	private WebElement botaoDelete;
	@FindBy(xpath = "//p[contains(.,'Your shopping cart is empty.')]")
	private WebElement textoExcluido;
	@FindBy(xpath = "//p[contains(.,'You must agree to the terms of service before continuing.')]")
	private WebElement textoConcordarTermos;

	public void clicarCheckout1() {
		botaoFazerCheckout1.click();
	}

	public void clicarCheckout3() {
		botaoFazerCheckout3.click();
	}

	public void clicarCheckout4() {
		botaoFazerCheckout4.click();
	}

	public void clicarConcluirPedido() {
		botaoConcluirPedido.click();
	}

	public void clicarFormaDePagamento() {
		formaDePagamento.click();
	}

	public void clicarAceitarTermo() {
		aceitarTermos.click();
	}

	public void clicarExcluirProduto() throws Exception {
		botaoDelete.click();
		Thread.sleep(2000);
	}

	public String obterTextoDeConfirmacao() {
		return textoDeConfirmacao.getText();
	}

	public String obterTextoExcluido() {
		return textoExcluido.getText();
	}
	public String obterTextoConcordarTermos() {
		return textoConcordarTermos.getText();
	}
}

package pageObject;

import static utils.Utils.*;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class TelaUsuarioRegistradoPage {

	@FindBy(xpath = "//h1[contains(.,'My account')]")
	private WebElement textoMinhaConta;
	
	public String obterTextoPaginaUsuarioCadastrado() {
		return textoMinhaConta.getText();
	}
	
	public void realizarPesquisaProdutoUsuario(String produto) throws Exception {
		instanciarClasse(TelaInicialPage.class).PesquisarProduto(produto);
		
	}
}


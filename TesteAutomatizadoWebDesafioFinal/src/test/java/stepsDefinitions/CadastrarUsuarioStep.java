package stepsDefinitions;

import static org.junit.Assert.assertEquals;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObject.TelaDeCadastroPage;
import pageObject.TelaInicialPage;
import pageObject.TelaUsuarioRegistradoPage;
import static utils.Utils.*;

public class CadastrarUsuarioStep {

	@Quando("eu clicar no botao sign in")
	public void euVouClicarNoBotaoSignIn() throws InterruptedException {
		instanciarClasse(TelaInicialPage.class).clicarSingOutLogin();
	}

	@Quando("eu clicar no campo informando meu email {string}")
	public void euVouClicarNoCampoInformandoMeuEmail(String email) throws Exception {
		instanciarClasse(TelaDeCadastroPage.class).digitarCampoEmail(email);
	}

	@Quando("eu clicar no botao Create an account")
	public void euVouClicarNoBotaoCreateAnAccount() {
		instanciarClasse(TelaDeCadastroPage.class).clicarBotaoCreate();
	}

	@Quando("eu digitar no campo First name {string}")
	public void euVouDigitarNoCampoFirstName(String firstName) {
		instanciarClasse(TelaDeCadastroPage.class).digitarCampoFirstName(firstName);
	}

	@Quando("eu digitar no campo Last name {string}")
	public void euVouDigitarNoCampoLastName(String lastName) {
		instanciarClasse(TelaDeCadastroPage.class).digitarCampoLastName(lastName);
	}

	@Quando("eu digitar no campo Password {string}")
	public void euVouDigitarNoCampoPassword(String password) {
		instanciarClasse(TelaDeCadastroPage.class).digitarCampoPassword(password);
	}

	@Quando("eu digitar no campo Address {string}")
	public void euVouDigitarNoCampoAddress(String address) {
		instanciarClasse(TelaDeCadastroPage.class).digitarCampoAddress(address);
	}

	@Quando("eu digitar no campo City {string}")
	public void euVouDigitarNoCampoCity(String city) {
		instanciarClasse(TelaDeCadastroPage.class).digitarCampoCity(city);
	}

	@Quando("eu digitar no campo Zip\\/Postal {string}")
	public void euVouDigitarNoCampoZipPostal(String postal) {
		instanciarClasse(TelaDeCadastroPage.class).digitarCampoPostCode(postal);
	}

	@Quando("eu clicar no seletor Country")
	public void euVouClicarNoSeletorCountry() {
		instanciarClasse(TelaDeCadastroPage.class).clicarSeletorCountry();
	}

	@Quando("eu selecionar United States")
	public void euVouSelecionarUnitedStates() {
		instanciarClasse(TelaDeCadastroPage.class).selecionarCountry();
	}

	@Quando("eu clicar no seletor State")
	public void euVouClicarNoSeletorState() {
		instanciarClasse(TelaDeCadastroPage.class).clicarSeletorState();
	}

	@Quando("eu selecionar California")
	public void euVouSelecionarCalifornia() {
		instanciarClasse(TelaDeCadastroPage.class).selecionarState();
	}

	@Quando("eu digitar no campo Mobile phone {string}")
	public void euVouDigitarNoCampoMobilePhone(String phone) {
		instanciarClasse(TelaDeCadastroPage.class).digitarCampoPhone(phone);
	}

	@Quando("eu clicar no botao Register")
	public void euVouClicarNoBotaoRegister() {
		instanciarClasse(TelaDeCadastroPage.class).clicarRegister();
	}

	@Entao("eu ser cadastrado")
	public void euVouSerCadastrado() {
		assertEquals("MY ACCOUNT",
				instanciarClasse(TelaUsuarioRegistradoPage.class).obterTextoPaginaUsuarioCadastrado());
	}

	@Entao("^aparece na tela a mensagem \"([^\"]*)\"$")
	public void apareceNaTelaAMensagem(String invalido) throws Throwable {
		assertEquals(invalido, instanciarClasse(TelaDeCadastroPage.class).obterTextoInfalidacao());
	}


}

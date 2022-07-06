package pageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class TelaDeCadastroPage {


	@FindBy(id = "email_create")
	private WebElement campoEmail;
	@FindBy(id = "SubmitCreate")
	private WebElement botaoCreate;
	@FindBy(id = "customer_firstname")
	private WebElement campoFirsName;
	@FindBy(id = "customer_lastname")
	private WebElement campoLastName;
	@FindBy(id = "passwd")
	private WebElement campoPassword;
	@FindBy(id = "address1")
	private WebElement campoAddress;
	@FindBy(id = "city")
	private WebElement campoCity;
	@FindBy(id = "postcode")
	private WebElement campoPostCode;
	@FindBy(id = "id_country")
	private WebElement seletorCountry;
	@FindBy(xpath = "//option[contains(.,'United States')]")
	private WebElement opcaoCountry;
	@FindBy(id = "id_state")
	private WebElement seletorState;
	@FindBy(xpath = "//option[contains(.,'California')]")
	private WebElement opcaoState;
	@FindBy(id = "phone")
	private WebElement campoPhone;
	@FindBy(id = "submitAccount")
	private WebElement botaoRegister;
	@FindBy(xpath = "//li[contains(.,'Invalid email address.')]")
	private WebElement textoInvalidacao;

	public void digitarCampoEmail(String email) {
		campoEmail.sendKeys(email);
	}

	public void clicarBotaoCreate() {
		botaoCreate.click();
	}

	public void digitarCampoFirstName(String firstName) {
		campoFirsName.sendKeys(firstName);
	}

	public void digitarCampoLastName(String lastName) {
		campoLastName.sendKeys(lastName);
	}

	public void digitarCampoPassword(String password) {
		campoPassword.sendKeys(password);
	}

	public void digitarCampoAddress(String address) {
		campoAddress.sendKeys(address);
	}

	public void digitarCampoCity(String city) {
		campoCity.sendKeys(city);
	}

	public void digitarCampoPostCode(String postCade) {
		campoPostCode.sendKeys(postCade);
	}

	public void clicarSeletorCountry() {
		seletorCountry.click();
	}

	public void selecionarCountry() {
		opcaoCountry.click();
	}

	public void clicarSeletorState() {
		seletorState.click();
	}

	public void selecionarState() {
		opcaoState.click();
	}

	public void digitarCampoPhone(String phone) {
		campoPhone.sendKeys(phone);
	}

	public void clicarRegister() {
		botaoRegister.click();
	}
	
	public String obterTextoInfalidacao() {
		 return textoInvalidacao.getText();
	}
		
	public void cadastrarUsuario(String email, String firstName, String lastName, String password, String address, String city, String postCade, String phone) {
		digitarCampoEmail(email);
		clicarBotaoCreate();
		digitarCampoFirstName(firstName);
		digitarCampoLastName(lastName);
		digitarCampoPassword(password);
		digitarCampoAddress(address);
		digitarCampoCity(city);
		digitarCampoPostCode(postCade);
		clicarSeletorCountry();
		selecionarCountry();
		clicarSeletorState();
		selecionarState();
		digitarCampoPhone(phone);
		clicarRegister();
	}

}

package stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LoginStepDefinition{

	 WebDriver driver;

	
	 @Given("^user navigates to login page$")
	 public void user_navigates_to_login_page() throws InterruptedException{
	 System.setProperty("webdriver.chrome.driver","C:/Users/kamal.uniyal/workspace/CucumberTests/src/test/resources/chromedriver.exe");
	 driver = new ChromeDriver();
	 driver.get("https://www.amazon.in/");
	 Thread.sleep(10000);
	 }
	 

	 @Then("^user is on amazon homepage$")
	 public void user_is_on_amazon_homepage() throws Throwable {
	     // Write code here that turns the phrase above into concrete actions
	     
	 }
	 
	 @Then("^user enters username and password$")
	 public void user_enters_username_and_password() throws Throwable {
	     // Write code here that turns the phrase above into concrete actions
	    
	 }

	 @Then("^user click on login$")
	 public void user_click_on_login() throws Throwable {
	     // Write code here that turns the phrase above into concrete actions
	    
	 }

	 
}

package stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooksclass {

	
public static WebDriver driver;
	
	@Before
	public void init()
	{
		//System.setProperty("webdriver.chrome.driver", "C:/Downloads/chromedriver.exe");
		WebDriver  driver = new FirefoxDriver();
	}
	@After
	public void close()
	{
		driver.quit();
	}	

}

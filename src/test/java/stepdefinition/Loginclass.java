package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class Loginclass {


	private static final char[] random_int = null;
	private static final CharSequence retailm = null;
	private static final CharSequence Copoun = null;
	private static final String AddNewCouponPage = null;
	
	WebDriver driver= new FirefoxDriver();
	
	
	@Given("User navigated to the Login page")
	public void user_navigated_to_the_Login_page() {
		System.out.println("Logged in");
		driver.get("http://retailm1.upskills.in/admin/");
	    driver.manage().window().maximize();
	}

	@Then("Enter username {string} and password {string}")
	public void enter_username_and_password(String string, String string2) {
		System.out.println("add Username ");
		driver.findElement(By.name("username")).sendKeys("admin");
		   driver.findElement(By.name("password")).sendKeys("Admin@123");
		   driver.findElement(By.xpath("//button[@type='submit']")).click();
	}

	@And("Retail Login Page should load")
	public void retail_Login_Page_should_load() {
		System.out.println("Page got loaded");
		driver.findElement(By.linkText("Home")).isDisplayed();
	}

	@Given("Click on Coupons")
	public void click_on_Coupons() {
		 System.out.println("clicked on copoun");
		
		 driver.findElement(By.xpath("//li[@id='menu-marketing']")).click();
		 driver.findElement(By.linkText("Coupons")).click();
	}

	@Then("Click on Add Coupon")
	public void click_on_Add_Coupon() {
		System.out.println("add copoun");
		driver.findElement(By.xpath("//a[@data-original-title='Add New']")).click();
	}

	@Then("Enter all the  details and Save it")
	public void enter_all_the_Necessary_details_and_Save_it() {
		System.out.println("Edit copoun");
		WebElement inputname= driver.findElement(By.id("input-name"));
		inputname.sendKeys("retailm13");
		WebElement codename= driver.findElement(By.id("input-code"));
		codename.sendKeys("1023");
		driver.findElement(By.xpath("//button[@type='submit']")).click();
	
	}
	
	@And("Verify the added copoun")
	public void verify_the_added_copoun() throws InterruptedException {
		Thread.sleep(7000);
		System.out.println(" Success: You have modified coupons! ");
		
	}

	@Then("Edit the added copoun and update it")
	public void edit_the_added_copoun_and_update_it() {
		
	    driver.findElement(By.xpath("(//a[@data-original-title='Edit'])[1]")).click();
		driver.findElement(By.id("input-name")).clear();
		driver.findElement(By.id("input-code")).clear();
		driver.findElement(By.id("input-name")).sendKeys("retailmproject");
		driver.findElement(By.id("input-code")).sendKeys("9400");
		driver.findElement(By.xpath("//button[@data-original-title='Save']")).click();
	}
	
	@And("Verify the Edited coupon in coupon list")
	public void verify_the_Edited_coupon_in_coupon_list() throws InterruptedException {
		Thread.sleep(7000);
		System.out.println(" Success: You have modified coupons! ");	
	}

	@And("Delete the coupon")
	public void delete_the_coupon() {
		System.out.println("Deleted copoun");
		driver.findElement(By.xpath("(//input[@name='selected[]'])[1]")).click();
		driver.findElement(By.xpath("//button[@data-original-title='Delete']")).click();
		driver.switchTo().alert().accept();
	}

}



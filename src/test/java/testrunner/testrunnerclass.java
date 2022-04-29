package testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


    @RunWith(Cucumber.class)
	@CucumberOptions(features="src/main/resources/features/",
	glue= {"stepdefinition"},
    monochrome=true,
	dryRun = false,
	plugin= {"pretty","html:reports/htmlreport"}
			)
    public class testrunnerclass {
	
}

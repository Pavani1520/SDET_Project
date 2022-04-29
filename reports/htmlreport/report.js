$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/features/login.feature");
formatter.feature({
  "name": "Retailm login page",
  "description": "  I want to use this for logging  in",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Edit and Delete the copoun",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigated to the Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Loginclass.user_navigated_to_the_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username \"admin\" and password \"Admin@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginclass.enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Retail Login Page should load",
  "keyword": "And "
});
formatter.match({
  "location": "Loginclass.retail_Login_Page_should_load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Coupons",
  "keyword": "Given "
});
formatter.match({
  "location": "Loginclass.click_on_Coupons()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Add Coupon",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginclass.click_on_Add_Coupon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter all the  details and Save it",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginclass.enter_all_the_Necessary_details_and_Save_it()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the added copoun",
  "keyword": "And "
});
formatter.match({
  "location": "Loginclass.verify_the_added_copoun()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Edit the added copoun and update it",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginclass.edit_the_added_copoun_and_update_it()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the Edited coupon in coupon list",
  "keyword": "And "
});
formatter.match({
  "location": "Loginclass.verify_the_Edited_coupon_in_coupon_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Delete the coupon",
  "keyword": "And "
});
formatter.match({
  "location": "Loginclass.delete_the_coupon()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat stepdefinition.Hooksclass.close(Hooksclass.java:24)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:49)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:123)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:147)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
});
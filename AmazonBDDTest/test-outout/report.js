$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/kamal.uniyal/workspace/AmazonBDDTest/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon login",
  "description": "",
  "id": "amazon-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login Scenario",
  "description": "",
  "id": "amazon-login;login-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user navigates to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user click on login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user is on amazon homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 19406995942,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_amazon_homepage()"
});
formatter.result({
  "status": "skipped"
});
});
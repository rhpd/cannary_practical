# README.md

Prerequisites
=============
- Node.js
- yarn installed (other Node.js package managers may be used)

Usage
=====
Run all tests and compile into HTML report

```
yarn run testAllWithHtmlReporting:firefox
```
Report will be put in '/reports' folder

Run tests independently with console output using Spec

```
yarn run registerTests:chrome
yarn run loginTests:chrome
yarn run forgotPasswordTests:chrome
yarn run marketTests:chrome
```

Tests have been set up to run on firefox as well as chrome. To switch to either browser, chrome can be exchanged for firefox and vice-versa when starting the test executin through yarn. More info in package.json

Note: Tests have been implemented on a Unix system and were not tested to run on Microsoft Windows (No Windows machine available)

Notes on skipped tests
======================

*Captcha in the registration form:* Testing Captcha's can be done as part of Security Testing, not as part of functional testing. When running automated tests in staging environments, captcha's should be able to be bypassed or disabled.

*"Sorty by" -feature in the Marketplace:* Apart from the absence of adequate selectors, asserting expected results of these queries should be tested through [API Service tests](https://en.wikipedia.org/wiki/API_testing). Automated UI tests can then test the integration between API and User Interface.

Design Decisions
================

First time user of [TestCafe](https://devexpress.github.io/testcafe/) and decided to write this practical part using TestCafe after browsing the documentation. Very fast implementation of automated tests due to easy set-up and extensive documentation.

*Typescript would have been preferred instead of Javascript,* this would have resulted in cleaner code. To keep a smaller footprint in Node.js dependencies, Javascript was chosen since it works out-of-the-box.

*Test data management is done through json objects* in separate .js files, for more elaborate projects with the need for huge amounts of test data the better option would be to use csv or SQLite.

*No usage of Xpath for selectors:* Xpath is slow and (when UI changes frequently) unreliable, certain assertions were circumvented because no unique and reliable identifiers were at hand. In a professional environment there would be the possibility to add unique identifiers to selectors whilst implementing test automation

Technical
---------
- **[TestCafe](https://devexpress.github.io/testcafe/)**: Selenium alternative for cross-browser front-end test automation
    - Pro's: 
        - Fast and reliable, no need for explicit waits
        - Same tech stack as development: easy setup and integration in CI/CD 
        - Platform independent (Microsoft Windows, Mac, Linux/Unix-like)
        - Possibility to run parallel tests
        - Open source
    - Con's:
        - No browser control like opening new tabs or opening in incognito mode
        - Events like clicking are simulated and not like, with Selenium, where events mimic the user's input 
        - Browser is not aware it is running test automation
- **Javascript**:
    - pro's:
        - Very flexible due to weak typing
        - async/await elimintates the need for explicit waits while keeping code readable
    - con's:
        - Very flexible due to weak typing
        - Does not allow design patterns that would be used in strongly typed languages ()

Design Patterns
---------------
- **Page Object Model:** Widely used in test automation code
    - Pro's:
        - Page objects reflect application domain knowledge
        - Robust and readable object oriented approach with functional encapsulation
        - Low maintenance, UI changes can quickly be implemented in the test suite
        - very scalable with minimal code duplication
    - Con's:
        - Application specific: page objects need to be re-written to automate other applications
        - Initial effort required is high, especially to automate a small application
- **Page Factory:** classical design pattern to use with Page Object Model
    - Pro's:
        - All page objects easily accessiblen from one central object
    - Con's:
        - Page Factory object can grow into a monster object
        - Usually created as singleton, making it an programming anti-pattern in combination with the previous point.





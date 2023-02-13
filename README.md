# Automated Cypress tests for exitequity.com

This project is an example test suite for the exitequity.com website.  This suite is
'living code' and will evolve over time.

This suite can be run as any configuration of individual tests or 'all together'.
See the **Running tests with tags** section for
the test types available.

All commands need to be run inside a terminal instance.

## Setup

- Clone the project locally to an empty folder
- Open a terminal instance to that folder
- `npm install`
- `npx cypress open`

### For PC users:

After running `npm install`, an additional ,`npx cypress install` may be required before
running `npx cypress open`

## Running tests

Tests can be run in headed or un-headed mode.  The headed option will allow you to see the
Cypress runner as it is testing.  Un-headed will only show the output in the terminal window.

To run Cypress tests in headed mode use `--headed` when launching Cypress.

Example: `npx cypress run --headed`

## Running a specific test spec

From a terminal window in the root folder the project was cloned into, run:

`npx cypress run --spec [reletive path to spec, seperated by commas]`

Example:

mac/lin -> `npx cypress run --spec /cypress/e2e/topNav.cy.js`
PC -> `npx cypress run --spec .\cypress\e2e\topNav.cy.js`

## Running tests with tags

From a terminal window in the root folder the project was cloned into, run:

`npx cypress run --env grepTags=[tag]`

**tag types** (optional, comma separated) = bvt, smoke, rc, full

Note: Due to multiple errors on the website causing a memory issue in the testing browser, the ContactUs spec has not
been fleshed out as much as the other specs at present.

## Opening Cypress test runner

To open the Cypress test runner to run tests that way use: `npx cypress open`.  Documentation
on using the test runner can be found [here.](https://docs.cypress.io/guides/core-concepts/cypress-app.)
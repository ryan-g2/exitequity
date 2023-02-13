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

## Running tests with tags

From a terminal window in the root folder the project was cloned into, run:

`npx cypress run --env grepTags=[tag]`

**tag types** (optional, comma separated) = bvt, smoke, rc, full

Note: Due to multiple errors on the website causing a memory issue in the testing browser, the ContactUs spec has not
been fleshed out as much as the other specs at present.

## Running a specific test spec

From a terminal window in the root folder the project was cloned into, run:

`npx cypress run --spec [reletive path to spec, seperated by commas]`

Example: 

mac/lin -> `npx cypress run --spec /cypress/e2e/topNav.cy.js`
PC -> `npx cypress run --spec .\cypress\e2e\topNav.cy.js`


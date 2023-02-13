# Automated Cypress tests for exitequity.com

This project is an example test suite for the exitequity.com website.  This suite is
'living code' and will evolve over time.  The main idea is to eventually build out
multiple automated test types for this site using Cypress as a focus.

This suite can be run as any configuration of individual tests or 'all together'.
See the [Running tests with tags](#Running tests with tags) section for
the test types available.



## Setup
- `npm install`
- `npx cypress open`

### For PC users:

After running `npm install`, an additional ,`npx cypress install` may be required before
running `npx cypress open`

## Running tests with tags

`npx cypress run --env grepTags=[tag]`

**tag types** (optional, comma separated) = bvt, smoke, rc, full

Note: Due to multiple errors on the website causing a memory issue in the testing browser, the ContactUs spec has not
been fleshed out as much as the other specs.  This will be revisited at a later date.

## Running a specific test spec

`npx cypress run --spec [reletive path to spec, seperated by commas]`
EX: mac/lin -> `/cypress/e2e/contactUs.cy.js`
PC -> `.\cypress\e2e\contactUs.cy.js`

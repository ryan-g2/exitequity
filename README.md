# exitequity

##Setup
- `npm install`
- `npx cypress open`

#For PC users:

After running `npm install`, an additional ,`npx cypress install` may be required before
running `npx cypress open`

##Running tests with tags

`npx cypress run --env grepTags=[tag]`

tag types = bvt, smoke, rc, full

##Running a specific test spec

`npx cypress run --spec [reletive path to spec, seperated by commas]`
EX: mac/lix -> `/cypress/e2e/contactUs.cy.js`
PC -> `.\cypress\e2e\contactUs.cy.js`

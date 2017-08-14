module.exports = { 
'Search': function (browser) {
 browser
.url('http://www.bing.com') 
.waitForElementVisible('input[name="q"]', 1000)
.setValue('input[name=q]', 'cloudsystems.sa') 
 
.submitForm('form')

.click("strong") 
 
.click('a.call-to-action-button');
 
    } }

const { getCountyData, successCallback,failureCallback } = require('./getData.js');
console.log('start')
getCountyData('CA', 'https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_California', '.sortable tbody tr[class!=sortbottom]', 1,3,5).then(successCallback, failureCallback);
getCountyData('NY', 'https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_New_York_(state)', '.sortable tbody tr[class!=sortbottom]', 1,3,5).then(successCallback, failureCallback);
getCountyData('WA','https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Washington_(state)', '.sortable tbody tr[class!=sortbottom]', 1,3,5).then(successCallback, failureCallback);
getCountyData('NJ','https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_New_Jersey','.sortable tbody tr[class!=sortbottom]', 1,3,5).then(successCallback,failureCallback);
getCountyData('MI','https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Michigan','.sortable tbody tr[class!=sortbottom]',1,3,5).then(successCallback, failureCallback);
getCountyData('PA','https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Pennsylvania','.sortable tbody tr[class!=sortbottom]',1,3,5).then(successCallback, failureCallback);
getCountyData('IL','https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Illinois','.sortable tbody tr[class!=sortbottom]',1,3,5).then(successCallback, failureCallback);
getCountyData('LA','https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Louisiana','.sortable tbody tr[class!=sortbottom]',1,3,5).then(successCallback, failureCallback);
getCountyData('FL','https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Florida','.sortable tbody tr[class!=sortbottom]',1,3,7).then(successCallback, failureCallback);
getCountyData('TX','https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Texas','.sortable tbody tr[class!=sortbottom]',1,3,5).then(successCallback, failureCallback);
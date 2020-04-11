const { getCountyData, successCallback,failureCallback } = require('./getData.js');
console.log('start')
getCountyData('CA', 'https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_California', '.sortable tbody tr[class!=sortbottom]', 1,3,5).then(successCallback, failureCallback);

getCountyData('NY', 'https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_New_York_(state)', '.sortable tbody tr[class!=sortbottom]', 1,3,5).then(successCallback, failureCallback);

getCountyData('WA','https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Washington_(state)', '.sortable tbody tr[class!=sortbottom]', 1,3,5).then(successCallback, failureCallback);

getCountyData('NJ','https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_New_Jersey','.sortable tbody tr[class!=sortbottom]', 1,3,5).then(successCallback,failureCallback);

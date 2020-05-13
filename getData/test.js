const { getCountyData, successCallback, failureCallback } = require('./getData.js');


// getCountyData('NY', 'https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_New_York_(state)', '.sortable tbody tr[class!=sortbottom]', 1,3,5).then(successCallback, failureCallback);


const testData = require('../docs/US-NY/countyTimeseries.json');

let count = 0;
for (let i = 0; i < testData.length-300; i++) {
    const bigData = testData[i];
    
    if (bigData.data.length > 63) {
        console.log(i)
        // bigData.data.splice(63,62)
        console.log(bigData.data[63])
        console.log(bigData.data[85])
        console.log(bigData.data[100])
        console.log(bigData.data.length)
        count ++;
        console.log(bigData.data)
    }
}

console.log(count)
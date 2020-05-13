const { getCountyData, successCallback, failureCallback } = require('./getData.js');













// const fs = require('fs');
// const testData = require('../docs/US-NY/countyTimeseries.json');
// const path = require('path');
// let count = 0;
// for (let i = 0; i < testData.length; i++) {
//     const bigData = testData[i];
//     if (bigData.data.length > 63) {
//         bigData.data = bigData.data.slice(0,62);
//         count++;
//         console.log(bigData.data.length);
//         console.log('0',bigData.data[0])
//         console.log('62',bigData.data[bigData.data.length-1])
//     }
    
//     console.log('normal',bigData.data.length)
    
// }

// fs.writeFile(path.join(__dirname, `../docs/US-NY/countyTimeseriesNew.json`), JSON.stringify(testData, null, 2), function (err) {
//     if (err) {
//         return console.log(err);
//     } else {
//         return console.log(`finish writing NY file`)
//     }

// })

// console.log(count)
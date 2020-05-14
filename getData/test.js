const { getCountyData, successCallback, failureCallback } = require('./getData.js');












const fs = require('fs');
const testData = require('../docs/US-LA/countyTimeseries.json');
const path = require('path');
let count = 0;
console.log('1',testData.length)
let deleteIndexs = [];
let swapIndexs = [];
for (let i = 0; i < testData.length; i++) {
    const bigData = testData[i];
    for (let j = 0; j < bigData.data.length; j++) {
        let countyDeathData = bigData.data[j].death;
        let countyCaseData = bigData.data[j].case;
        if (j ==1 && countyDeathData == null) {
            deleteIndexs.push(i)
            
        }
        if (countyDeathData > countyCaseData) {
            if (!swapIndexs.includes(i)) {
                
                swapIndexs.push(i);
            }
        }
        
        
    }
    // console.log(bigData.timeStamp)
}
console.log('2',testData.length)
// console.log(swapIndexs);
// console.log(swapIndexs[0]);
// console.log(swapIndexs.length);
// console.log(swapIndexs[243]);
for (let i = 0; i < testData.length; i++) {
    const bigData = testData[i];
    for (let j = 0; j < bigData.data.length; j++) {
        const countyData = bigData.data[j];
        if (swapIndexs.includes(i) && countyData.case<countyData.death ) {
            console.log(i)
            let temp = countyData.case;
            countyData.case = countyData.death;
            countyData.death = temp;
        }
    }
    
}
testData.splice(deleteIndexs[0],deleteIndexs[234]);
//length 235

// for (let i = 0; i < testData.length; i++) {
//     const bigData = testData[i];
//     for (let j = 0; j < bigData.data.length; j++) {
//         let countyDeathData = bigData.data[j].death;
//         let countyCaseData = bigData.data[j].case;
       
//         if (j ==0) {
//             console.log('new case',countyCaseData)
//             console.log('new death',countyDeathData)
//         }
//     }
//     // console.log(bigData.timeStamp)
// }


// fs.writeFile(path.join(__dirname, `../docs/US-LA/countyTimeseriesNew.json`), JSON.stringify(testData, null, 2), function (err) {
//     if (err) {
//         return console.log(err);
//     } else {
//         return console.log(`finish writing LA file`)
//     }

// })

// console.log(count)
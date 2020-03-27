const covidHistory = require('./docs/US-CA/countyTimeseries.json');
const fs = require('fs');

let data = covidHistory;
for (let i = 0; i < data.length; i++) {
  const el = data[i];
  
  el.data.forEach(obj => {
    if (obj.county == "Alameda[c]"){
      obj.county = 'Alameda';
    }
    if (obj.county == 'Yuba/Sutter[d]'){
      obj.county = 'Yuba/Sutter';
    }
  })
}


fs.writeFile(`./docs/US-CA/countyTimeseries.json`, JSON.stringify(data, null, 2), function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('finish clean up data')
  }

})
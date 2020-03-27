const request = require("request");
const cheerio = require("cheerio");
const covidHistory = require('./docs/US-NY/countyTimeseries.json');
const covidNY = require('./base_data/covidNY.json')
const fs = require('fs');
const {getCurrentTime} = require('./utils.js');


let covidData = covidHistory;

//NY
request({
  method: 'GET',
  url: "https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_New_York_(state)"
}, (err, res, body) => {
  if (err) return console.error(err);
  console.log('res', res && res.statusCode)
  if (res.statusCode == 200) {
    let data = []
    let $ = cheerio.load(body);
    $.fn.ignore = function(sel){
      return this.clone().find(sel||">*").remove().end();
    };
    const rows = $('.sortable tbody tr[class!=sortbottom]')
      rows.each((index, el) => {
        if (index < rows.length && index > 1) {
          data.push($(el).ignore("sup").text());
        }
      })
    let newData = [];
    data.forEach(county => {
      const datastr = JSON.stringify(county).split('\\n');
      if (datastr[1] && parseInt(datastr[3])) {
        const datas = {
          "county": datastr[1],
          "case": parseInt(datastr[3].split(',').join('')),
          "death": parseInt(datastr[5].split(',').join(''))
        }
        newData.push(datas);
      }
    })
    
    let timeseriesData = {
      timeStamp: getCurrentTime(),
      data: newData
    }
    covidData.push(timeseriesData);
    fs.writeFile(`./docs/US-NY/countyTimeseries.json`, JSON.stringify(covidData, null, 2), function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('finish writing NY file')
      }

    })
  } else {
    console.log('failed',res.statusCode)
  }
});



//NY

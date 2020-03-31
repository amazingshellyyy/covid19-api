const request = require("request");
const cheerio = require("cheerio");
const fs = require('fs');
const {getCurrentTime} = require('../utils.js');
const path = require('path');
const covidHistory = require('../docs/US/statesTimeseries.json');

let covidData = covidHistory;


request({
  method: 'GET',
  url: "https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_the_United_States"
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
    // console.log("data", data)
    let newData = [];
    data.forEach(county => {
      const datastr = JSON.stringify(county).split('\\n');
    //   console.log(datastr)
      if (datastr[3] && !parseInt(datastr[3][0])) {
          if ( Number(datastr[5])== 0 || parseInt(datastr[5])) {
            const datas = {
                "state": datastr[3],
                "case": parseInt(datastr[5].split(',').join('')),
                "death": parseInt(datastr[7].split(',').join('')),
            }
            newData.push(datas);
          } 
      }
    })
    // console.log('newData',newData)
    let timeseriesData = {
      timeStamp: getCurrentTime(),
      data: newData
    }
    covidData.push(timeseriesData);
    covidData.sort((a,b)=> (a.timeStamp > b.timeStamp)? 1 : -1 )
    fs.writeFile(path.join(__dirname, '../docs/US/statesTimeseries.json'), JSON.stringify(covidData, null, 2), function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('finish writing US-states file')
      }

    })
  } else {
    console.log('failed',res.statusCode)
  }
});



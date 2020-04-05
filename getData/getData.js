const request = require("request");
const cheerio = require("cheerio");
const fs = require('fs');
const { getCurrentTime } = require('../utils.js');
const path = require('path');
const cp = require('child_process')


const getCountyData = (stateCode, url, selector, countyIndex, caseIndex, deathIndex ) => {
    if(stateCode =='NY') {
        const a = 1;
        const a = 2;
    }
    const covidHistory = require(`../docs/US-${stateCode}/countyTimeseries.json`);   
    let covidData = covidHistory;
    // console.log(covidData);
    console.log(url)
    request({
        method: 'GET',
        url: url
    }, (err, res, body) => {
        if (err) return console.error(err);
        console.log('res', res && res.statusCode)
        if (res.statusCode == 200) {
            let data = []
            let $ = cheerio.load(body);
            $.fn.ignore = function (sel) {
                return this.clone().find(sel || ">*").remove().end();
            };
            const rows = $(`${selector}`)
            if (!Array.isArray(rows)) {
                return console.log('selector is wrong')
            }
            rows.each((index, el) => {
                if (index < rows.length && index > 1) {
                    data.push($(el).ignore("sup").text());
                }
            })
            // console.log('data',data)
            let newData = [];
            data.forEach(county => {
                const datastr = JSON.stringify(county).split('\\n');
                // console.log(datastr);
                if (datastr[countyIndex] && parseInt(datastr[caseIndex])) {
                    const datas = {
                        "county": datastr[countyIndex],
                        "case": parseInt(datastr[caseIndex].split(',').join('')),
                        "death": parseInt(datastr[deathIndex].split(',').join(''))
                    }
                    newData.push(datas);
                }
            })

            let timeseriesData = {
                timeStamp: getCurrentTime(),
                data: newData
            }
            covidData.push(timeseriesData);
            covidData.sort((a, b) => (a.timeStamp > b.timeStamp) ? 1 : -1)
            fs.writeFile(path.join(__dirname, `../docs/US-${stateCode}/countyTimeseries.json`), JSON.stringify(covidData, null, 2), function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`finish writing ${stateCode} file`)
                }

            })
        } else {
            console.log('failed', res.statusCode)
        }
    });
}


// getCountyData('NJ','https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_New_Jersey', '.sortable tbody tr[class!=sortbottom]', 1,3,5);
// getCountyData('WA','https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Washington_(state)', '.sortable tbody tr[class!=sortbottom]', 1,3,5);
// getCountyData('NY', 'https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_New_York_(state)', '.sortable tbody tr[class!=sortbottom]', 1,3,5);
// getCountyData('CA', 'https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_California', '.sortable tbody tr[class!=sortbottom]', 1,3,5);


module.exports = {
    getCountyData
}
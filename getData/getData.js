const request = require("request");
const cheerio = require("cheerio");
const fs = require('fs');
const { getCurrentTime } = require('../utils.js');
const path = require('path');
const cp = require('child_process')

const getCountyData = (stateCode, url, selector, countyIndex, caseIndex, deathIndex ) => {
    return new Promise((resolve, reject)=>{
        try {
            const covidHistory = require(`../docs/US-${stateCode}/countyTimeseries.json`);   
            let covidData = covidHistory;
            // console.log(covidData);
            // console.log(url)
            request({
                method: 'GET',
                url: url
            }, (err, res, body) => {
                if (err) return reject(err);
                console.log('res', res && res.statusCode)
                // console.log(selector);
                if (res.statusCode == 200) {
                    let data = []
                    // console.log(body)
                    // fs.writeFile(`./output.html`, JSON.stringify(body), (e)=> console.log(e))
                    let $ = cheerio.load(body);
                    $.fn.ignore = function (sel) {
                        return this.clone().find(sel || ">*").remove().end();
                    };
                    const rows = $(selector);
                    // console.log('rows',$(rows).text())

                    const i = stateCode=='CA'? 1 : 0;
                    rows.each((index, el) => {
                        if (index < rows.length && index > i ) {
                            data.push($(el).ignore("sup").text());
                        }
                    })
                    console.log('data',data)
                    let newData = [];
                    data.forEach(county => {
                        const datastr = JSON.stringify(county).split('\\n');
                        // console.log(datastr[deathIndex].length);
                        if (!datastr[deathIndex]) {
                            return reject('something wrong with the death index')
                        }
                        const death = datastr[deathIndex].length == 0 ? 0 :parseInt(datastr[deathIndex].split(',').join(''));
                        if (datastr[countyIndex] && parseInt(datastr[caseIndex])) {
                            const datas = {
                                "county": datastr[countyIndex],
                                "case": parseInt(datastr[caseIndex].split(',').join('')),
                                "death": death
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
                            return reject(err);
                        } else {
                            return resolve(`finish writing ${stateCode} file`)
                        }
        
                    })
                } else {
                    return reject(res.statusCode);
                }
            });
        } catch (err) {
            return reject(err);
        }

    })
}


// getCountyData('NJ','https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_New_Jersey', '.sortable tbody tr[class!=sortbottom]', 1,3,5);
// getCountyData('WA','https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Washington_(state)', '.sortable tbody tr[class!=sortbottom]', 1,3,5);
// getCountyData('NY', 'https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_New_York_(state)', '.sortable tbody tr[class!=sortbottom]', 1,3,5);
// getCountyData('CA', 'https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_California', '.sortable tbody tr[class!=sortbottom]', 1,3,5);

const successCallback = (result) =>{
    console.log(result);
}

const failureCallback = (error) => {
    console.error("Error:"+error);
}



module.exports = {
    getCountyData,
    successCallback,
    failureCallback
}
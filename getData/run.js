const { getCountyData } = require('./getData.js');
console.log('start')
try {
    getCountyData('CA', 'https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_California', '.sortable tbody tr[class!=sortbottom]', 1,3,5);
    getCountyData('NY', 'https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_New_York_(state)', '.sortable tbody tr[class!=sortbottom]', 1,3,5);
    getCountyData('WA','https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Washington_(state)', '.sortable tbody tr[class!=sortbottom]', 1,3,5);
    getCountyData('NJ','https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_New_Jersey', '.sortable tbody tr[class!=sortbottom]', 1,3,5);
    console.log('end')
} catch(err) {
    console.log(err)
}

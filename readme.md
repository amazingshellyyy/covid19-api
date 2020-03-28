<div align="center">
  <h2>Covid19 Open API (keep updating)</h2>
</div>

### COVID19 County Cases API
This API currently collects California counties' data with confirmed cases and deaths number since March 16th.
We are working on datas for other states' county as well.

<h3 style="color:red">Data is updated every hour!</h3>

For county timeseries data: 
- Request method: GET
- Endpoint: 
```
https://amazingshellyyy.com/covid19-api/<country-code>-<subvisions-code>/countyTimeseries.json
```
### List
- US-CA: 
  - countyTimeseries: https://amazingshellyyy.com/covid19-api/US-CA/countyTimeseries.json
- US-NY: 
  - countyTimeseries: https://amazingshellyyy.com/covid19-api/US-NY/countyTimeseries.json
- US-NY: 
  - countyTimeseries: https://amazingshellyyy.com/covid19-api/US-WA/countyTimeseries.json

### Specifications
#### < country-code>

- follow [ISO 3166 Standard Country Codes](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes)
- Example: United States is `US`, Taiwan is `TW`, United Kindom is `GB`

#### < subdivisions-code>

- follow [ISO 3166 — Codes for the representation of names of countries and their subdivisions](https://www.iso.org/obp/ui/#iso:code:3166:US)
- Example: California of United States is `US-CA`, New York of United States  is `US-NY`


### Using axios
```js
import axios from 'axios';
axios.get('https://amazingshellyyy.com/covid19-api/US-CA/countyTimeseries.json')
      .then(res => {
        console.log('covid CA County data',res.data)
      })
      .catch(err => {
        console.log(err)
      })
```

The JSON contains timeStamp (stored in milliseconds) and array of counties' cases with objects of each county and its name, cases, and deaths.

```
[
  {
    "timeStamp": 1584367447000,
    "data": [
      {
        "county": "Santa Clara",
        "case": 114,
        "death": 2
      },
      {
        "county": "Los Angeles",
        "case": 69,
      "death": 1
      },
      {
        "county": "San Francisco",
        "case": 37,
        "death": 0
      },
      ...
    ]
  }
  ...
}
```
### Notes
- Yuba and Sutter reported their cases together at one resource before March 25 so part of the data look like this .
```
      ...
      {
        "county": "Yuba/Sutter",
        "case": 3,
        "death": 0
      },
      ...
``` 

### resource
 - https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_California
 - https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_New_York_(state)

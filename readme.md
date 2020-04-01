<div align="center">
  <h2>Covid19 Open API (keep updating)</h2>
</div>

### Covid19 Open API
This API currently collects California, New York, Washington states' counties' data with confirmed cases and deaths numbers.
We are working on datas for other states' county as well.

*2020 Mar 30 updates: start collecting US states data which includes 50 U.S states, 1 federal disctrict, and 5 inhabited territories.


- County Data is updated every hour!
- State Data is updated every 3 hours!

:star:Please star this repo to support my effort! Thank you so much!:star:

#### For state timeseries data:
- Request method: GET
- Endpoint: 
```
https://amazingshellyyy.com/covid19-api/<country-code>/statesTimeseries.json
```

#### For county timeseries data: 
- Request method: GET
- Endpoint: 
```
https://amazingshellyyy.com/covid19-api/<country-code>-<subvisions-code>/countyTimeseries.json
```
### List
- US: (Mar 12th ~)
  - states Timeseries: https://amazingshellyyy.com/covid19-api/US/statesTimeseries.json
- US-CA: (Mar 16th ~)
  - county Timeseries: https://amazingshellyyy.com/covid19-api/US-CA/countyTimeseries.json
- US-NY: (Mar 18th ~)
  - county Timeseries: https://amazingshellyyy.com/covid19-api/US-NY/countyTimeseries.json
- US-WA: (Mar 13th ~)
  - county Timeseries: https://amazingshellyyy.com/covid19-api/US-WA/countyTimeseries.json

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

### Sample Data
#### Sample | State Timeseries data:
The JSON contains timeStamp (stored in milliseconds) and array of states' cases with objects of each state and its name, cases, and deaths.
```
[
  {
    "timeStamp": 1585618844246,
    "data": [
      {
        "state": "Alabama",
        "case": 827,
        "death": 4
      },
      {
        "state": "Alaska",
        "case": 102,
        "death": 2
      },
      {
        "state": "American Samoa",
        "case": 0,
        "death": 0
      },
      ...
    ]
  }
  ...
]
```

#### Sample | County Timeseries data:
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
- US state wide data is missing on Mar 26th. Be awared that there might be a gap.
- In California county data, Yuba and Sutter reported their cases together at one resource before March 25 so part of the data look like this:
```
      ...
      {
        "county": "Yuba/Sutter",
        "case": 3,
        "death": 0
      },
      ...
``` 
- some data in Washinton State is hasn't been assigned to any county therefore the county name will be "(Unassigned)":
```
      ...
      {
        "county": "(Unassigned)",
        "case": 160,
        "death": 0
      }
      ...
```


### resource
 - https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_the_United_States
 - https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_California
 - https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_New_York_(state)
 - https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Washington_(state)

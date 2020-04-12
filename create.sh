# allStates=("AK" "AL" "AZ" "AR" "CO" "CT" "DE" "FL" "GA" "HI" "ID" "IL" "IN" "IA" "KS" "KY" "LA" "ME" "MD" "MA" "MN" "MS" "MO" "MT" "NE" "NV" "NH" "NM" "NC" "ND" "OH" "OK" "OR" "PA" "RI" "SC" "SD" "TN" "TX" "UT" "VT" "VA" "WV" "WI" 
# "WY")
allStates=("LL" "MM" "DD")


# for s in "AR" "CO" "CT" "DE" "FL" "GA" "HI" "ID" "IL" "IN" "IA" "KS" "KY" "LA" "ME" "MD" "MA" "MN" "MS" "MO" "MT" "NE" "NV" "NH" "NM" "NC" "ND" "OH" "OK" "OR" "PA" "RI" "SC" "SD" "TN" "TX" "UT" "VT" "VA" "WV" "WI" "WY"
# do
#     mkdir ./docs/US-$s
#     touch ./docs/US-$s/countyTimeseries.json
#     echo "[]" >> ./docs/US-$s/countyTimeseries.json
# done

# differnet table type : MA

echo "getCountyData('MA','https://en.wikipedia.org/wiki/2020_coronavirus_pandemic_in_Massachusetts','.sortable tbody tr[class!=sortbottom]',1,3,5)" >> ./getData/test.js
node ./getData/test.js
var express = require('express');
var debug = require('./debugTool');

// /sensor/get/date
exports.get_date_sensingData = async function(sensorId, startDate, endDate, callback) {
      try {
         const rs = await elastic.search({
            index: 'data',
            body: {
               "query": {
                  "bool": {
                     "must": [
                        {"match": {
                           "sen_mng_no": sensorId
                        }},
                        {"range": {
                           "tr_date": {
                              "gte": startDate,
                              "lte": endDate
                           }
                        }}
                     ]
                  }
               }
            }
         });

         return callback(null, rs.hits.hits);
      }
      catch (err) {
         return callback(err);
      }
}

// /sensor/get/top
exports.get_top_sensingData = async function(sensorId, topNum, callback) {
  try {
      const rs = await elastic.search({
         index:'data',
         body: {
            "size": topNum,
            "query": {
               "match": {
                  "sen_mng_no": sensorId
               }
            },
        "sort": [
          {"tr_seq": "desc"}
        ]
         }
      });
    return callback(null, rs.hits.hits);
  }
  catch (err) {
      return callback(err);
  }
}
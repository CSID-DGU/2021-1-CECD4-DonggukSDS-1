var express = require('express');
var debug = require('./debugTool');
var elasticsearch = require('elasticsearch');

const elastic = new elasticsearch.Client({
hosts: ["http://1.238.89.68:9200"]	
});

// /sensor/get/date
exports.get_date_sensingData = async function(sensorId, startDate, endDate) {
	//console.log('sensor_id', sensorId);
		try {
         const rs = await elastic.search({
            index: 'data',
            body: {
               "size": 1000,
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

         return rs.hits.hits;
      }
      catch (err) {
         return err;
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
